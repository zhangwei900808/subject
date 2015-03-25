using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.SessionState;
using NHibernate;
using Subject.Nhibernate;
using Subject.DAO.Implementation;
using Subject.DAO.Views;
using Subject.Infrastructure;
using Subject.Model;
using Subject.DAO.Mappers;
using Subject.DAO.Views;

namespace Subject.Web.Handler
{
    /// <summary>
    /// Summary description for CourseHandler
    /// </summary>
    public class CourseHandler : IHttpHandler, IRequiresSessionState
    {
        readonly JavaScriptSerializer _jss = new JavaScriptSerializer();
        readonly ISession _session = SessionFactory.GetCurrentSession();
        readonly string _filepath = System.Configuration.ConfigurationManager.AppSettings["coursefilepath"];
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

        /// <summary>
        /// 获取课程列表
        /// </summary>
        /// <param name="context"></param>
        public void GetCourse(HttpContext context)
        {
            var zwJson = new ZwJson();
            CourseService courseService = new CourseService(_session);
            var list = courseService.GetView();
            zwJson.Data = list;
            zwJson.IsSuccess = true;
            zwJson.JsExecuteMethod = "HtmlCourse";
            context.Response.Write(_jss.Serialize(zwJson));
        }

        /// <summary>
        /// 保存课程
        /// </summary>
        /// <param name="context"></param>
        public void SaveCourse(HttpContext context)
        {
            var zwJson = new ZwJson();
            var course = new Model.Course
                {
                    Id = Guid.NewGuid().ToString(),
                    Contents = context.Request.Params["content"],
                    CreateDt = DateTime.Now,
                    Title = context.Request.Params["title"],
                    Creater = context.Session["UserName"].ToString(),
                    ClickCount = 0
                };
            CourseService courseService = new CourseService(_session);
            courseService.Save(course);
            zwJson.IsSuccess = true;
            zwJson.JsExecuteMethod = "Ajax_SaveCourse";
            context.Response.Write(_jss.Serialize(zwJson));
        }

        /// <summary>
        /// 删除数据
        /// </summary>
        /// <param name="context"></param>
        public void DelCourse(HttpContext context)
        {
            var zwJson = new ZwJson();
            CourseService courseService = new CourseService(_session);
            var id = context.Request.Params["id"];
            var idlist = id.Split('|');
            foreach (var s in idlist)
            {
                var list = courseService.GetCourse(s);
                var count = list.Resourceses.Count();
                if (count > 0)
                {
                    zwJson.IsSuccess = false;
                    zwJson.Msg = list.Title + "课程下有资源文件，请先删除该文件，再点击删除！";
                    context.Response.Write(_jss.Serialize(zwJson));
                    return;
                }
                courseService.Delete(list);
            }
            zwJson.IsSuccess = true;
            zwJson.JsExecuteMethod = "Ajax_DelCourse";
            context.Response.Write(_jss.Serialize(zwJson));
        }

        /// <summary>
        /// 根据CourseId获取数据
        /// </summary>
        /// <param name="context"></param>
        public void FindById(HttpContext context)
        {
            var zwJson = new ZwJson();
            CourseService courseService = new CourseService(_session);
            var id = context.Request.Params["id"];

            var data = courseService.GetCourse(id);
            data.ClickCount++;
            courseService.SaveOrUpdate(data);

            var course = courseService.FindById(id);
            zwJson.Data = course;
            zwJson.IsSuccess = true;
            zwJson.JsExecuteMethod = "Ajax_FindById";
            context.Response.Write(_jss.Serialize(zwJson));
        }

        /// <summary>
        /// 根据课程id获取资源文件
        /// </summary>
        /// <param name="context"></param>
        public void FindByCourseId(HttpContext context)
        {
            var zwJson = new ZwJson();
            ResourcesService resourcesService = new ResourcesService(_session);
            var id = context.Request.Params["id"];
            var resources = resourcesService.FindByCourseId(new Model.Course() { Id = id });
            zwJson.Data = resources;
            zwJson.IsSuccess = true;
            zwJson.JsExecuteMethod = "Ajax_FindByCourseId";
            context.Response.Write(_jss.Serialize(zwJson));
        }

        /// <summary>
        /// 获取课程和资源
        /// </summary>
        /// <param name="context"></param>
        public void GetCourseAndResource(HttpContext context)
        {
            var zwJson = new ZwJson();
            CourseService courseService = new CourseService(_session);
            var type = context.Request.Params["type"];
            var course = courseService.GetCourseAndResource();
            zwJson.Data = from c in course
                          select new
                              {
                                  c.Id,
                                  c.Title,
                                  Resourceses = c.Resourceses.Where(s => s.Flag == type)
                              };
            zwJson.IsSuccess = true;
            zwJson.JsExecuteMethod = "Ajax_GetCourseAndResource";
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