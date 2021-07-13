﻿using System;
using System.Collections.Generic;
using System.Linq;
using Rhino.Geometry;
using STBDotNet.v202;

namespace HoaryFox.Component_v2.Utils.Geometry
{
    public class CreateBrepFromStb
    {
        private readonly IEnumerable<StbNode> _nodes;
        private readonly IReadOnlyList<double> _tolerance;
        private readonly StbSections _sections;

        public CreateBrepFromStb(StbSections sections, IEnumerable<StbNode> nodes, IReadOnlyList<double> tolerance)
        {
            _nodes = nodes;
            _tolerance = tolerance;
            _sections = sections;
        }

        public List<Brep> Column(IEnumerable<StbColumn> columns)
        {
            var brepList = new List<Brep>();

            foreach (StbColumn column in columns)
            {
                StbColumnKind_structure kind = column.kind_structure;

                StbNode[] endNodes =
                {
                    _nodes.First(node => node.id == column.id_node_bottom),
                    _nodes.First(node => node.id == column.id_node_top)
                };

                Point3d[] sectionPoints =
                {
                    new Point3d(endNodes[0].X, endNodes[0].Y, endNodes[0].Z),
                    new Point3d(),
                    new Point3d(),
                    new Point3d(endNodes[1].X, endNodes[1].Y, endNodes[1].Z)
                };
                Vector3d memberAxis = sectionPoints[3] - sectionPoints[0];
                sectionPoints[1] = sectionPoints[0] + memberAxis / memberAxis.Length * column.joint_bottom;
                sectionPoints[2] = sectionPoints[3] - memberAxis / memberAxis.Length * column.joint_top;

                var curveList = new List<Curve>();

                switch (kind)
                {
                    case StbColumnKind_structure.RC:
                        StbSecColumn_RC rcSec = _sections.StbSecColumn_RC.First(sec => sec.id == column.id_section);
                        object figure = rcSec.StbSecFigureColumn_RC.Item;
                        curveList = SecRcColumnToCurves(figure, sectionPoints);
                        break;
                    case StbColumnKind_structure.S:
                        StbSecColumn_S sSec = _sections.StbSecColumn_S.First(sec => sec.id == column.id_section);
                        object[] figures = sSec.StbSecSteelFigureColumn_S.Items;
                        curveList = SecSteelColumnToCurves(figures, sectionPoints);
                        break;
                    case StbColumnKind_structure.SRC:
                    case StbColumnKind_structure.CFT:
                    case StbColumnKind_structure.UNDEFINED:
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                }

                RotateCurveList(memberAxis, curveList, column.rotate, sectionPoints, Vector3d.ZAxis);
                Brep brep = Brep.CreateFromLoft(curveList, Point3d.Unset, Point3d.Unset, LoftType.Straight, false)[0]
                    .CapPlanarHoles(_tolerance[0]);

                brepList.Add(brep);
            }

            return brepList;
        }

        private static List<Curve> SecRcColumnToCurves(object figure, IReadOnlyList<Point3d> sectionPoints)
        {
            var curveList = new List<Curve>();

            switch (figure)
            {
                case StbSecColumn_RC_Rect rect:
                    curveList.Add(new PolylineCurve(
                        SectionCornerPoints.ColumnRect(sectionPoints[0], rect.width_X, rect.width_Y)));
                    curveList.Add(new PolylineCurve(
                        SectionCornerPoints.ColumnRect(sectionPoints[3], rect.width_X, rect.width_Y)));
                    break;
                case StbSecColumn_RC_Circle circle:
                    curveList.Add(new ArcCurve(new Circle(sectionPoints[0], circle.D / 2d)));
                    curveList.Add(new ArcCurve(new Circle(sectionPoints[3], circle.D / 2d)));
                    break;
                default:
                    throw new Exception();
            }

            return curveList;
        }

        private List<Curve> SecSteelColumnToCurves(IReadOnlyList<object> figures, IReadOnlyList<Point3d> sectionPoints)
        {
            var curveList = new List<Curve>();

            switch (figures.Count)
            {
                case 1:
                    var same = figures[0] as StbSecSteelColumn_S_Same;
                    curveList.Add(GetSteelSec(same.shape, sectionPoints[0], SectionType.Column));
                    curveList.Add(GetSteelSec(same.shape, sectionPoints[3], SectionType.Column));
                    break;
                case 2:
                    var notSames = new[] { figures[0] as StbSecSteelColumn_S_NotSame, figures[1] as StbSecSteelColumn_S_NotSame };
                    StbSecSteelColumn_S_NotSame nsBottom = notSames.First(item => item.pos == StbSecSteelColumn_S_NotSamePos.BOTTOM);
                    StbSecSteelColumn_S_NotSame nsTop = notSames.First(item => item.pos == StbSecSteelColumn_S_NotSamePos.TOP);
                    curveList.Add(GetSteelSec(nsBottom.shape, sectionPoints[0], SectionType.Column));
                    if (sectionPoints[1].Z > sectionPoints[0].Z)
                    {
                        curveList.Add(GetSteelSec(nsBottom.shape, sectionPoints[1], SectionType.Column));
                        curveList.Add(GetSteelSec(nsTop.shape, sectionPoints[1], SectionType.Column));
                    }
                    else
                    {
                        curveList.Add(GetSteelSec(nsBottom.shape, sectionPoints[2], SectionType.Column));
                        curveList.Add(GetSteelSec(nsTop.shape, sectionPoints[2], SectionType.Column));
                    }
                    curveList.Add(GetSteelSec(nsTop.shape, sectionPoints[3], SectionType.Column));
                    break;
                case 3:
                    var three = new[] { figures[0] as StbSecSteelColumn_S_ThreeTypes, figures[1] as StbSecSteelColumn_S_ThreeTypes, figures[2] as StbSecSteelColumn_S_ThreeTypes };
                    StbSecSteelColumn_S_ThreeTypes tBottom = three.First(item => item.pos == StbSecSteelColumn_S_ThreeTypesPos.BOTTOM);
                    StbSecSteelColumn_S_ThreeTypes tCenter = three.First(item => item.pos == StbSecSteelColumn_S_ThreeTypesPos.CENTER);
                    StbSecSteelColumn_S_ThreeTypes tTop = three.First(item => item.pos == StbSecSteelColumn_S_ThreeTypesPos.TOP);
                    curveList.Add(GetSteelSec(tBottom.shape, sectionPoints[0], SectionType.Column));
                    curveList.Add(GetSteelSec(tCenter.shape, sectionPoints[1], SectionType.Column));
                    curveList.Add(GetSteelSec(tCenter.shape, sectionPoints[2], SectionType.Column));
                    curveList.Add(GetSteelSec(tTop.shape, sectionPoints[3], SectionType.Column));
                    break;
                default:
                    throw new ArgumentException("Unmatched StbSecSteelColumn_S");
            }

            return curveList;
        }

        public List<Brep> Girder(IEnumerable<StbGirder> girders)
        {
            var brepList = new List<Brep>();

            foreach (StbGirder girder in girders)
            {
                StbGirderKind_structure kind = girder.kind_structure;

                StbNode[] endNodes =
                {
                    _nodes.First(node => node.id == girder.id_node_start),
                    _nodes.First(node => node.id == girder.id_node_end)
                };

                Point3d[] sectionPoints =
                {
                    new Point3d(endNodes[0].X, endNodes[0].Y, endNodes[0].Z),
                    Point3d.Origin,
                    Point3d.Origin,
                    new Point3d(endNodes[1].X, endNodes[1].Y, endNodes[1].Z)
                };
                Vector3d memberAxis = sectionPoints[3] - sectionPoints[0];
                sectionPoints[1] = sectionPoints[0] + memberAxis / memberAxis.Length * girder.joint_start;
                sectionPoints[2] = sectionPoints[3] - memberAxis / memberAxis.Length * girder.joint_end;

                var curveList = new List<Curve>();
                switch (kind)
                {
                    case StbGirderKind_structure.RC:
                        StbSecBeam_RC rcSec = _sections.StbSecBeam_RC.First(sec => sec.id == girder.id_section);
                        object[] figure = rcSec.StbSecFigureBeam_RC.Items;
                        curveList = SecRcBeamCurves(figure, sectionPoints);
                        break;
                    case StbGirderKind_structure.S:
                        StbSecBeam_S sSec = _sections.StbSecBeam_S.First(sec => sec.id == girder.id_section);
                        object[] figures = sSec.StbSecSteelFigureBeam_S.Items;
                        curveList = SecSteelBeamToCurves(figures, sectionPoints);
                        break;
                    case StbGirderKind_structure.SRC:
                    case StbGirderKind_structure.UNDEFINED:
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                }

                RotateCurveList(memberAxis, curveList, girder.rotate, sectionPoints, Vector3d.XAxis);
                Brep brep = Brep.CreateFromLoft(curveList, Point3d.Unset, Point3d.Unset, LoftType.Straight, false)[0]
                    .CapPlanarHoles(_tolerance[0]);

                brepList.Add(brep);
            }

            return brepList;
        }

        private static void RotateCurveList(Vector3d memberAxis, IReadOnlyList<Curve> curveList, double rotate, IReadOnlyList<Point3d> sectionPoints, Vector3d secLocalAxis)
        {
            Vector3d rotateAxis = Vector3d.CrossProduct(secLocalAxis, memberAxis);
            double angle = Vector3d.VectorAngle(secLocalAxis, memberAxis);
            int len = curveList.Count;
            switch (len)
            {
                case 2:
                    curveList[0].Rotate(rotate, secLocalAxis, sectionPoints[0]); // 断面内の回転
                    curveList[0].Rotate(angle, rotateAxis, sectionPoints[0]); // 断面外の回転 
                    curveList[1].Rotate(rotate, secLocalAxis, sectionPoints[3]);
                    curveList[1].Rotate(angle, rotateAxis, sectionPoints[3]);
                    break;
                case 3:
                    curveList[0].Rotate(rotate, secLocalAxis, sectionPoints[0]);
                    curveList[0].Rotate(angle, rotateAxis, sectionPoints[0]); 
                    curveList[2].Rotate(rotate, secLocalAxis, sectionPoints[3]);
                    curveList[2].Rotate(angle, rotateAxis, sectionPoints[3]);
                    if (sectionPoints[1] == Point3d.Origin)
                    {
                        curveList[1].Rotate(rotate, secLocalAxis, sectionPoints[1]);
                        curveList[1].Rotate(angle, rotateAxis, sectionPoints[1]);
                    }
                    else
                    {
                        curveList[1].Rotate(rotate, secLocalAxis, sectionPoints[2]);
                        curveList[1].Rotate(angle, rotateAxis, sectionPoints[2]);
                    }
                    break;
                case 4:
                    for (var i = 0; i < 4; i++)
                    {
                        curveList[i].Rotate(rotate, secLocalAxis, sectionPoints[i]);
                        curveList[i].Rotate(angle, rotateAxis, sectionPoints[i]);
                    }
                    break;
                default:
                    throw new ArgumentException();
            }
        }

        private List<Curve> SecRcBeamCurves(IReadOnlyList<object> figures, IReadOnlyList<Point3d> sectionPoints)
        {
            var curveList = new List<Curve>();

            switch (figures.Count)
            {
                case 1:
                    var straight = figures[0] as StbSecBeam_RC_Straight;
                    curveList.Add(new PolylineCurve(
                        SectionCornerPoints.BeamRect(sectionPoints[0], straight.depth, straight.width)));
                    curveList.Add(new PolylineCurve(
                        SectionCornerPoints.BeamRect(sectionPoints[3], straight.depth, straight.width)));
                    break;
                case 2:
                    var taper = new[] { figures[0] as StbSecBeam_RC_Taper, figures[1] as StbSecBeam_RC_Taper };
                    curveList.Add(new PolylineCurve(
                        SectionCornerPoints.BeamRect(sectionPoints[0], taper[0].depth, taper[0].width)));
                    curveList.Add(new PolylineCurve(
                        SectionCornerPoints.BeamRect(sectionPoints[3], taper[1].depth, taper[1].width)));
                    break;
                case 3:
                    var haunches = new[] { figures[0] as StbSecBeam_RC_Haunch, figures[1] as StbSecBeam_RC_Haunch, figures[2] as StbSecBeam_RC_Haunch };
                    curveList.Add(new PolylineCurve(
                        SectionCornerPoints.BeamRect(sectionPoints[0], haunches[0].depth, haunches[0].width)));
                    curveList.Add(new PolylineCurve(
                        SectionCornerPoints.BeamRect(sectionPoints[1], haunches[1].depth, haunches[1].width)));
                    curveList.Add(new PolylineCurve(
                        SectionCornerPoints.BeamRect(sectionPoints[2], haunches[1].depth, haunches[1].width)));
                    curveList.Add(new PolylineCurve(
                        SectionCornerPoints.BeamRect(sectionPoints[3], haunches[2].depth, haunches[2].width)));
                    break;
                default:
                    throw new Exception();
            }

            return curveList;
        }

        private List<Curve> SecSteelBeamToCurves(IReadOnlyList<object> figures, IReadOnlyList<Point3d> sectionPoints)
        {
            var curveList = new List<Curve>();

            switch (figures)
            {
                case StbSecSteelBeam_S_Straight[] straights:
                    break;
                case StbSecSteelBeam_S_Taper[] tapers:
                    break;
                case StbSecSteelBeam_S_Joint[] joints:
                    break;
                case StbSecSteelBeam_S_Haunch[] haunches:
                    break;
                case StbSecSteelBeam_S_FiveTypes[] five:
                    break;
                default:
                    throw new ArgumentException("Unmatched StbSecSteelBeam_S");
            }

            return curveList;
        }

        private Curve GetSteelSec(string shape, Point3d point, SectionType type)
        {
            StbSecSteel secSteel = _sections.StbSecSteel;

            if (secSteel.StbSecBuildBOX != null)
            {
                foreach (StbSecBuildBOX box in _sections.StbSecSteel.StbSecBuildBOX)
                {
                    if (box.name == shape)
                    {
                        switch (type)
                        {
                            case SectionType.Column:
                                return new PolylineCurve(SectionCornerPoints.ColumnRect(point, box.B, box.A));
                            case SectionType.Beam:
                                break;
                            case SectionType.Brace:
                                break;
                            default:
                                throw new ArgumentOutOfRangeException(nameof(type), type, null);
                        }
                    }
                }
            }

            if (secSteel.StbSecRollBOX != null)
            {
                foreach (StbSecRollBOX box in _sections.StbSecSteel.StbSecRollBOX)
                {
                    if (box.name == shape)
                    {
                        switch (type)
                        {
                            case SectionType.Column:
                                return new PolylineCurve(SectionCornerPoints.ColumnRect(point, box.B, box.A));
                            case SectionType.Beam:
                                break;
                            case SectionType.Brace:
                                break;
                            default:
                                throw new ArgumentOutOfRangeException(nameof(type), type, null);
                        }
                    }
                }
            }

            if (secSteel.StbSecBuildH != null)
            {
                foreach (StbSecBuildH buildH in _sections.StbSecSteel.StbSecBuildH)
                {
                    if (buildH.name == shape)
                    {
                        switch (type)
                        {
                            case SectionType.Column:
                                return new PolylineCurve(SectionCornerPoints.ColumnH(point, buildH.B, buildH.A,
                                    buildH.t1, buildH.t2));
                            case SectionType.Beam:
                                break;
                            case SectionType.Brace:
                                break;
                            default:
                                throw new ArgumentOutOfRangeException(nameof(type), type, null);
                        }
                    }
                }
            }

            if (secSteel.StbSecRollH != null)
            {
                foreach (StbSecRollH rollH in _sections.StbSecSteel.StbSecRollH)
                {
                    if (rollH.name == shape)
                    {
                        switch (type)
                        {
                            case SectionType.Column:
                                return new PolylineCurve(SectionCornerPoints.ColumnH(point, rollH.B, rollH.A, rollH.t1, rollH.t2));
                            case SectionType.Beam:
                                break;
                            case SectionType.Brace:
                                break;
                            default:
                                throw new ArgumentOutOfRangeException(nameof(type), type, null);
                        }
                    }
                }
            }

            // TODO: Box と H 以外の断面を実装する

            throw new ArgumentException("There are no matching steel section");
        }

        private enum SectionType
        {
            Column,
            Beam,
            Brace
        }
    }
}
