using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Script.Serialization;
using Subject.DAO;
using Subject.DAO.Implementation;
using NHibernate;
using Subject.Model;
using Subject.Nhibernate;
using System.Web.SessionState;
using Subject.Infrastructure;
using System.Web.SessionState;

namespace Subject.Web.Handler
{
    /// <summary>
    /// Summary description for UserPostsHandler
    /// </summary>
    public class UserPostsHandler : IHttpHandler, IRequiresSessionState
    {
        readonly JavaScriptSerializer _jss = new JavaScriptSerializer();
        readonly ISession _session = SessionFactory.GetCurrentSession();

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            var action = context.Request.Params["action"];
            var curType = GetType();
            var method = curType.GetMethod(action, BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.Instance);
            if (method != null)
            {
                method.Invoke(this, new object[] { HttpContext.Current });
            }
        }

        public void GetUserPostsById(HttpContext context)
        {
            ZwJson zwJson = new ZwJson();
            PostsService postsService = new PostsService(_session);
            UserPostsService userPostsService = new UserPostsService(_session);
            var postid = context.Request.Params["postid"];
            var list2 = postsService.FindById2(postid);

            list2.ReplyCount = list2.UserPostses.Count;
            zwJson.Other = list2.ReplyCount.ToString();
            postsService.SaveOrUpdate(list2);

            Posts posts = new Posts() { Id = postid };
            var list = userPostsService.FindById(posts);
            zwJson.IsSuccess = true;
            zwJson.Data = list;
            zwJson.JsExecuteMethod = "ajax_GetUserPostsById";
            context.Response.Write(_jss.Serialize(zwJson));
        }

        /// <summary>
        /// 保存用户评论数据
        /// </summary>
        /// <param name="context"></param>
        public void SaveUserPosts(HttpContext context)
        {
            ZwJson zwJson = new ZwJson();
            UserPostsService userPostsService = new UserPostsService(_session);
            UserService userService = new UserService(_session);
           
            var postid = context.Request.Params["postid"];
            var khtml = context.Request.Params["khtml"];
            var name = context.Session["UserName"];

            if (name != null)
            {
                var data = userService.FindByName(name.ToString());
                Posts posts = new Posts() { Id = postid };
                UserPosts userPosts = new UserPosts()
                {
                    Id = Guid.NewGuid().ToString(),
                    Contents = khtml,
                    CreateDt = DateTime.Now,
                    Posts = posts,
                    User = data[0]
                };
                userPostsService.Save(userPosts);
                zwJson.IsSuccess = true;
                zwJson.JsExecuteMethod = "ajax_SaveUserPosts";
            }
            else
            {
                zwJson.IsSuccess = false;
                zwJson.Msg = "请先登录！";
            }
            context.Response.Write(_jss.Serialize(zwJson));
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}