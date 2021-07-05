﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using Grasshopper.Kernel;
using HoaryFox.Component_v2.Utils.Geometry;
using Rhino.Geometry;
using STBDotNet.v202;

namespace HoaryFox.Component_v2.Geometry
{
    public class Stb2Line : GH_Component
    {
        private ST_BRIDGE _stBridge;
        private List<Point3d> _nodes = new List<Point3d>();
        private readonly List<List<Line>> _lineList = new List<List<Line>>();

        public Stb2Line()
          : base("Stb to Line", "S2L",
              "Display ST-Bridge model in line",
              "HoaryFox2", "Geometry")
        {
        }

        public override void ClearData()
        {
            base.ClearData();
            _lineList.Clear();
        }

        protected override void RegisterInputParams(GH_InputParamManager pManager)
        {
            pManager.AddGenericParameter("Data", "D", "input ST-Bridge Data", GH_ParamAccess.item);
            pManager.AddBooleanParameter("Bake", "Bake", "If it true, bake geometry.", GH_ParamAccess.item, false);
        }

        protected override void RegisterOutputParams(GH_OutputParamManager pManager)
        {
            pManager.AddPointParameter("Nodes", "pt", "output StbNodes to point3d", GH_ParamAccess.list);
            pManager.AddLineParameter("Columns", "Col", "output StbColumns to Line", GH_ParamAccess.list);
            pManager.AddLineParameter("Girders", "Gird", "output StbGirders to Line", GH_ParamAccess.list);
            pManager.AddLineParameter("Posts", "Pst", "output StbPosts to Line", GH_ParamAccess.list);
            pManager.AddLineParameter("Beams", "Beam", "output StbBeams to Line", GH_ParamAccess.list);
            pManager.AddLineParameter("Braces", "Brc", "output StbBraces to Line", GH_ParamAccess.list);
        }

        protected override void SolveInstance(IGH_DataAccess DA)
        {
            var isBake = false;
            if (!DA.GetData("Data", ref _stBridge)) { return; }
            if (!DA.GetData("Bake", ref isBake)) { return; }

            CreateLine();
            if (isBake)
            {
                BakeLine();
            }

            DA.SetDataList(0, _nodes);
            foreach ((List<Line> geometry, int i) in _lineList.Select((geo, index) => (geo, index + 1)))
            {
                DA.SetDataList(i, geometry);
            }
        }

        private void BakeLine()
        {
            throw new NotImplementedException();
        }

        private void CreateLine()
        {
            var createLines = new CreateLineFromStb(_stBridge);
            _nodes = createLines.Nodes();
            _lineList.Add(createLines.Columns());
            _lineList.Add(createLines.Girders());
            _lineList.Add(createLines.Posts());
            _lineList.Add(createLines.Beams());
            _lineList.Add(createLines.Braces());
        }

        protected override Bitmap Icon => Properties.Resource.Line;
        public override Guid ComponentGuid => new Guid("FDC62C6D-7C03-412D-8FF8-B76439197730");
    }
}
