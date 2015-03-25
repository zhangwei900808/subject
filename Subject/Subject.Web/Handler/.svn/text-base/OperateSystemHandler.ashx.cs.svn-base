using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using NHibernate;
using Subject.Nhibernate;
using Subject.DAO.Implementation;

namespace Subject.Web.Handler
{
    /// <summary>
    /// Summary description for OperateSystemHandler
    /// </summary>
    public class OperateSystemHandler : IHttpHandler
    {

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

        public string GetOperateSystem(HttpContext context)
        {
            ISession session = SessionFactory.GetCurrentSession();
            OperateSystemService operateSystemService = new OperateSystemService(session);
            var list = operateSystemService.Get();
            return "";
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