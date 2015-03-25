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

namespace Subject.Web.Handler
{
    /// <summary>
    /// Summary description for UserHandler
    /// </summary>
    public class UserHandler : IHttpHandler,IRequiresSessionState
    {
        readonly JavaScriptSerializer _jss = new JavaScriptSerializer();
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

        public string GetUser(HttpContext context)
        {
            ISession session = SessionFactory.GetCurrentSession();
            UserService user = new UserService(session);
            var userlist = user.Get();
            SessionFactory.CloseSession();
            var str = "Hello";
            return str;
        }


        public void Register(HttpContext context)
        {
            ZwJson zwJson=new ZwJson();
            ISession session = SessionFactory.GetCurrentSession();
            UserService user = new UserService(session);
            context.Session["UserName"] = context.Request.Params["username"];
            user.Save(new User() { 
                Id = Guid.NewGuid().ToString(),
                CreateDt = DateTime.Now,
                Name = context.Request.Params["username"],
                Password = context.Request.Params["pass"],
                Sex = context.Request.Params["sex"],
                BriefIntroduction = context.Request.Params["introduction"]
            });
            zwJson.IsSuccess = true;
            zwJson.JsExecuteMethod = "ajax_SaveUser";
            context.Response.Write(_jss.Serialize(zwJson));
        }


        public void Login(HttpContext context)
        {
            ZwJson zwJson = new ZwJson();
            ISession session = SessionFactory.GetCurrentSession();
            UserService user = new UserService(session);
            var data = user.Exist(new User
                {
                    Name = context.Request.Params["username"],
                    Password = context.Request.Params["pass"]
                });
            if (data)
            {
                context.Session["UserName"] = context.Request.Params["username"];
                zwJson.IsSuccess = true;
            }
            else
            {
                zwJson.IsSuccess = false;
                zwJson.Msg = "请先注册，再登录！";
            }
            zwJson.JsExecuteMethod = "ajax_Login";
            context.Response.Write(_jss.Serialize(zwJson));
        }


        public void Quit(HttpContext context)
        {
            ZwJson zwJson = new ZwJson();
            context.Session["UserName"] = null;
            zwJson.IsSuccess = true;
            zwJson.JsExecuteMethod = "ajax_Quit";
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