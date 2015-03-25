﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Script.Serialization;
using Subject.DAO;
using Subject.DAO.Implementation;
using NHibernate;
using Subject.Model;
using Subject.Nhibernate;
using Subject.Infrastructure;

namespace Subject.Web.Handler
{
    /// <summary>
    /// Summary description for ResourcesHandler
    /// </summary>
    public class ResourcesHandler : IHttpHandler
    {
        readonly JavaScriptSerializer _jss = new JavaScriptSerializer();
        ISession session = SessionFactory.GetCurrentSession();
        readonly string _filepath = System.Configuration.ConfigurationManager.AppSettings["coursefilepath"];
        readonly string _video = System.Configuration.ConfigurationManager.AppSettings["resourcesfilepath"];
        readonly string _flash = System.Configuration.ConfigurationManager.AppSettings["flashfilepath"];
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
        /// 保存资源
        /// </summary>
        /// <param name="context"></param>
        public void SaveResourse(HttpContext context)
        {
            var courseid = context.Request.Params["courseid"];
            var name = context.Request.Params["name"];
            var type = context.Request.Params["type"];
            var resourcesService=new ResourcesService(session);
            var resourse = new Resources();
            try
            {
                resourse.Id = Guid.NewGuid().ToString();
                resourse.Name = name;
                resourse.Flag = type;
                resourse.CreateDt = DateTime.Now;
                resourse.Course = new Model.Course()
                {
                    Id = courseid
                };
                resourcesService.Save(resourse);
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// 获取资源文件
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public string GetResources(HttpContext context)
        {
            ResourcesService resourcesService = new ResourcesService(session);
            var list = resourcesService.Get();
            SessionFactory.CloseSession();
            var str = "Hello";
            return str;
        }

        /// <summary>
        /// 删除资源文件
        /// </summary>
        /// <param name="context"></param>
        public void DelRecources(HttpContext context)
        {
            ZwJson zwJson = new ZwJson();
            ResourcesService resourcesService = new ResourcesService(session);
            var name = context.Request.Params["name"];
            var courseid = context.Request.Params["courseid"];
            var type = context.Request.Params["type"];
            var pathAll = "";
            switch (type)
            {
                case "课程列表":
                    pathAll = _filepath + courseid + @"\" + name;
                    break;
                case "视频列表":
                    pathAll = _video + courseid + @"\" + name;
                    break;
                case "flashPdf":
                    pathAll = _flash + courseid + @"\" + name;
                    break;
            }
            try
            {
                resourcesService.DeleteByName(new Resources()
                {
                    Name = name,
                    Flag = type
                });
                zwJson.IsSuccess = true;
                zwJson.JsExecuteMethod = "ajax_DelRecources";
                File.Delete(pathAll);
                context.Response.Write(_jss.Serialize(zwJson));
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// 保存课程资源文件
        /// </summary>
        /// <param name="context"></param>
        public void SaveFile(HttpContext context)
        {
            ZwJson zwJson = new ZwJson();
            ResourcesService resourcesService = new ResourcesService(session);
            HttpPostedFile file = context.Request.Files["Filedata"];
            var courseid = context.Request.Params["id"];
            var type = context.Request.Params["type"];
            Resources resources = new Resources();
            if (file == null) return;
            var pathAll = "";
            var httppath = "";
            var pathDirectory = "";
            switch (type)
            {
                case "课程列表":
                    pathAll = _filepath + courseid + @"\" + file.FileName;
                    httppath = "/CourseFile/" + courseid + @"\" + file.FileName;
                    pathDirectory = _filepath + courseid;
                    break;
                case "视频列表":
                    pathAll = _video + courseid + @"\" + file.FileName;
                    httppath = "/OlFile/" + courseid + @"\" + file.FileName;
                    pathDirectory = _video + courseid;
                    break;
                case "flashPdf":
                    pathAll = _flash + courseid + @"\" + file.FileName;
                    httppath = "/FlashFile/" + courseid + @"\" + file.FileName;
                    pathDirectory = _flash + courseid;
                    break;
            }
            var url = UrlHelper.Resolve(httppath);
            int size = file.ContentLength / 1024;
            var flag = file.ContentLength % 1024;
            if (flag > 0)
            {
                size++;
            }
            resources.FileSize = size.ToString(CultureInfo.InvariantCulture);
            resources.Flag = type;
            resources.Name = file.FileName;
            resources.FileType = file.FileName.Split('.')[file.FileName.Split('.').Length - 1];
            resources.FilePath = url;
            resources.CreateDt = DateTime.Now;
            resources.Course = new Model.Course()
            {
                Id = courseid
            };
            if (!Directory.Exists(pathDirectory))
            {
                Directory.CreateDirectory(pathDirectory);
            }
            if (File.Exists(pathAll))
            {
                resourcesService.DeleteByName(resources);
            }
            resources.Id = Guid.NewGuid().ToString();
            resourcesService.Save(resources);
            file.SaveAs(pathAll);
            //zwJson.IsSuccess = true;
            //zwJson.JsExecuteMethod = "ajax_SaveFile";
            //context.Response.Write(_jss.Serialize(zwJson));
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