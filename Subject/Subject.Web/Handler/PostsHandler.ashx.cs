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
    /// Summary description for PostsHandler
    /// </summary>
    public class PostsHandler : IHttpHandler, IRequiresSessionState
    {
        private readonly JavaScriptSerializer _jss = new JavaScriptSerializer();
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

        public void GetPosts(HttpContext context)
        {
            ZwJson zwJson = new ZwJson();
            ISession session = SessionFactory.GetCurrentSession();
            PostsService posts = new PostsService(session);

            var pageStart = int.Parse(context.Request.Params["current"] ?? "1");
            var pageLimit = int.Parse(context.Request.Params["total"] ?? "10");

            var count = 0;
            var list = posts.FindByPosts(pageStart, pageLimit, ref count);
            zwJson.IsSuccess = true;
            zwJson.Data = list;
            zwJson.Other = count.ToString();
            zwJson.JsExecuteMethod = "ajax_GetPosts";
            context.Response.Write(_jss.Serialize(zwJson));
        }

        /// <summary>
        /// 根据id获取帖子
        /// </summary>
        /// <param name="context"></param>
        public void GetPostsById(HttpContext context)
        {
            ZwJson zwJson = new ZwJson();
            PostsService postsService = new PostsService(_session);
            var postid = context.Request.Params["postid"];
            var list = postsService.FindById(postid);
            var list2 = postsService.FindById2(postid);

            list2.ViewCount++;
            list2.ReplyCount = list2.UserPostses.Count;
            postsService.SaveOrUpdate(list2);

            zwJson.IsSuccess = true;
            zwJson.JsExecuteMethod = "ajax_GetPostsById";
            zwJson.Data = list;
            context.Response.Write(_jss.Serialize(zwJson));
        }

        /// <summary>
        /// 保存post数据
        /// </summary>
        /// <param name="context"></param>
        public void SavePosts(HttpContext context)
        {
            ZwJson zwJson = new ZwJson();
            PostsService postsService = new PostsService(_session);
            UserService userService = new UserService(_session);
            var title = context.Request.Params["title"];
            var khtml = context.Request.Params["khtml"];
            var name = context.Session["UserName"];
            if (name != null)
            {
                var data = userService.FindByName(name.ToString());
                postsService.Save(new Posts()
                {
                    Id = Guid.NewGuid().ToString(),
                    Contents = khtml,
                    CreateDt = DateTime.Now,
                    Title = title,
                    ViewCount = 0,
                    ReplyCount = 0,
                    User = data[0]
                });
                zwJson.IsSuccess = true;
                zwJson.JsExecuteMethod = "ajax_SavePosts";
            }
            else
            {
                zwJson.IsSuccess = false;
                zwJson.Msg = "请先登录!";
            }
            context.Response.Write(_jss.Serialize(zwJson));
        }

        /// <summary>
        /// 删除帖子
        /// </summary>
        /// <param name="context"></param>
        public void DelPosts(HttpContext context)
        {
            ZwJson zwJson = new ZwJson();
            PostsService postsService = new PostsService(_session);
            UserService userService = new UserService(_session);
            var id = context.Request.Params["id"];
            var name = context.Session["UserName"];
            if (name != null)
            {
                postsService.Delete(new Posts
                    {
                        Id = id
                    });
                zwJson.IsSuccess = true;
                zwJson.JsExecuteMethod = "ajax_DelPosts";
            }
            else
            {
                zwJson.IsSuccess = false;
                zwJson.Msg = "请先登录!";
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