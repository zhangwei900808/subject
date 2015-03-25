using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Subject.Model
{
    /// <summary>
    /// 用户表
    /// </summary>
    public class User
    {
        /// <summary>
        /// 用户id
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 密码
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// 性别
        /// </summary>
        public string Sex { get; set; }

        /// <summary>
        /// 个人简介
        /// </summary>
        public string BriefIntroduction { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime? CreateDt { get; set; }

        /// <summary>
        /// 用户帖子 一对多
        /// </summary>
        public IList<Posts> Postses { get; set; }

        /// <summary>
        /// 用户评论 一对多
        /// </summary>
        public IList<UserPosts> UserPostses { get; set; } 
    }
}
