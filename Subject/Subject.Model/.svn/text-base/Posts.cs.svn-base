using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Subject.Model
{
    /// <summary>
    /// 帖子
    /// </summary>
    public class Posts
    {
        /// <summary>
        /// id
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 用户 多对一对应
        /// </summary>
        public User User { get; set; }

        /// <summary>
        /// 内容
        /// </summary>
        public string Contents { get; set; }

        /// <summary>
        /// 回复次数
        /// </summary>
        public decimal? ReplyCount { get; set; }

        /// <summary>
        /// 浏览次数
        /// </summary>
        public decimal? ViewCount { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime? CreateDt { get; set; }

        public IList<UserPosts> UserPostses { get; set; }
    }
}
