﻿using System.Collections.Generic;
using HoaryFox.STB;
using Rhino.Geometry;

namespace HoaryFox.Member
{
    public class CreateLines
    {
        private readonly StbData _stbData;
        private readonly List<Point3d> _nodes;
        
        public CreateLines(StbData stbData)
        {
            _stbData = stbData;
            _nodes = Nodes();
        }

        public List<Point3d> Nodes()
        {
            var nodes = new List<Point3d>();
            for (var i = 0; i < _stbData.Nodes.Id.Count; i++)
            {
                var position = new Point3d(_stbData.Nodes.X[i], _stbData.Nodes.Y[i], _stbData.Nodes.Z[i]);
                nodes.Add(position);
            }

            return nodes;
        }

        public List<Line> Columns()
        {
            var columns = new List<Line>();
            for (var i = 0; i < _stbData.Columns.Id.Count; i++)
            {
                var idNodeStart = _stbData.Nodes.Id.IndexOf(_stbData.Columns.IdNodeStart[i]);
                var idNodeEnd = _stbData.Nodes.Id.IndexOf(_stbData.Columns.IdNodeEnd[i]);
                columns.Add(new Line(_nodes[idNodeStart], _nodes[idNodeEnd]));
            }

            return columns;
        }

        public List<Line> Girders()
        {
            var girders = new List<Line>();
            for (var i = 0; i < _stbData.Girders.Id.Count; i++)
            {
                var idNodeStart = _stbData.Nodes.Id.IndexOf(_stbData.Girders.IdNodeStart[i]);
                var idNodeEnd = _stbData.Nodes.Id.IndexOf(_stbData.Girders.IdNodeEnd[i]);
                girders.Add(new Line(_nodes[idNodeStart], _nodes[idNodeEnd]));
            }

            return girders;
        }

        public List<Line> Posts()
        {
            var posts = new List<Line>();
            
            for (var i = 0; i < _stbData.Posts.Id.Count; i++)
            {
                var idNodeStart = _stbData.Nodes.Id.IndexOf(_stbData.Posts.IdNodeStart[i]);
                var idNodeEnd = _stbData.Nodes.Id.IndexOf(_stbData.Posts.IdNodeEnd[i]);
                posts.Add(new Line(_nodes[idNodeStart], _nodes[idNodeEnd]));
            }

            return posts;
        }

        public List<Line> Beams()
        {
            var beams = new List<Line>();
            
            for (var i = 0; i < _stbData.Beams.Id.Count; i++)
            {
                var idNodeStart = _stbData.Nodes.Id.IndexOf(_stbData.Beams.IdNodeStart[i]);
                var idNodeEnd = _stbData.Nodes.Id.IndexOf(_stbData.Beams.IdNodeEnd[i]);
                beams.Add(new Line(_nodes[idNodeStart], _nodes[idNodeEnd]));
            }

            return beams;
        }

        public List<Line> Braces()
        {
            var braces = new List<Line>();

            for (var i = 0; i < _stbData.Braces.Id.Count; i++)
            {
                var idNodeStart = _stbData.Nodes.Id.IndexOf(_stbData.Braces.IdNodeStart[i]);
                var idNodeEnd = _stbData.Nodes.Id.IndexOf(_stbData.Braces.IdNodeEnd[i]);
                braces.Add(new Line(_nodes[idNodeStart], _nodes[idNodeEnd]));
            }

            return braces;
        }
    }
}