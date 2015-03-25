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
    /// Summary description for ExamHandler
    /// </summary>
    public class ExamHandler : IHttpHandler
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
        /// 保存试题
        /// </summary>
        /// <param name="context"></param>
        public void SaveExam(HttpContext context)
        {
            var resourseId = context.Request.Params["resourseId"];
            var tm = context.Request.Params["tm"];
            var a = context.Request.Params["a"];
            var b = context.Request.Params["b"];
            var c = context.Request.Params["c"];
            var d = context.Request.Params["d"];
            var answer = context.Request.Params["answer"];
            var examService = new ExamService(_session);
            var exam = new Exam();
            try
            {
                exam.Id = Guid.NewGuid().ToString();
                exam.ExamType = "选择题";
                exam.Title = tm;
                exam.A = a;
                exam.B = b;
                exam.C = c;
                exam.D = d;
                exam.Answer = answer;
                exam.Resources = new Resources()
                    {
                        Id = resourseId
                    };
                examService.Save(exam);
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// 根据resourseid获取数据
        /// </summary>
        /// <param name="context"></param>
        public void GetExamByResourseId(HttpContext context)
        {
            var zwJson = new ZwJson();
            var resourseid = context.Request.Params["id"];
            var examService = new ExamService(_session);
            try
            {
                var resourse = new Resources()
                    {
                        Id = resourseid
                    };
                var data = examService.GetByResourseId(resourse);
                var json = from da in data
                           select new
                               {
                                   da.A,
                                   da.B,
                                   da.C,
                                   da.D,
                                   da.Title,
                                   da.Answer
                               };
                zwJson.IsSuccess = true;
                zwJson.Data = json;
                zwJson.JsExecuteMethod = "ajax_GetExamByResourseId";
                context.Response.Write(_jss.Serialize(zwJson));
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// 删除试卷
        /// </summary>
        /// <param name="context"></param>
        public void DelExam(HttpContext context)
        {
            var id = context.Request.Params["id"];
            var resourcesService = new ResourcesService(_session);
            var resourse = new Resources();
            try
            {
                resourse.Id = id;
                resourcesService.Delete(resourse);
            }
            catch (Exception)
            {
                throw;
            }
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