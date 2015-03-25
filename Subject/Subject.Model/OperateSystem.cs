using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Subject.Model
{
    /// <summary>
    /// 操作系统表
    /// </summary>
    public class OperateSystem
    {
        /// <summary>
        /// id
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// 简介
        /// </summary>
        public string Introduction { get; set; }

        /// <summary>
        /// 图片url
        /// </summary>
        public string ImgUrl { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Note { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime? CreateDt { get; set; }

        public IList<Course> Courses { get; set; }
    }
}
