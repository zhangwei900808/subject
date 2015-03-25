using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Subject.Model
{
    /// <summary>
    /// 用户贴子明细表
    /// </summary>
    public class UserPosts
    {
        /// <summary>
        /// id
        /// </summary>
        public string Id { get; set; }

        public Posts Posts { get; set; }

        public User User { get; set; }

        /// <summary>
        /// 内容
        /// </summary>
        public string Contents { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime? CreateDt { get; set; }
    }
}
