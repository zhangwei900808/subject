using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using NHibernate;
using NHibernate.Criterion;
using Subject.DAO.Interface;
using Subject.Nhibernate;
using Subject.Model;
using Subject.DAO.Views;
using Subject.DAO.Mappers;

namespace Subject.DAO.Implementation
{
    public class CourseService : IDao<Course>
    {
        private readonly ISession _session;

        public CourseService(ISession session)
        {
            _session = session;
        }

        public bool Exist(Course bean)
        {
            throw new NotImplementedException();
        }

        public void Save(Course bean)
        {
            try
            {
                _session.Save(bean);
                _session.Flush();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public IList<Course> Get()
        {
            throw new NotImplementedException();
        }


        public IEnumerable<CourseView> GetView()
        {
            try
            {
                IEnumerable<Course> list = _session.CreateQuery("from Course").List<Course>();
                return CourseMapper.GetCourseView(list);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Update(Course bean)
        {
            throw new NotImplementedException();
        }

        public void Delete(Course bean)
        {
            try
            {
                _session.Delete(bean);
                _session.Flush();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void SaveOrUpdate(Course bean)
        {
            try
            {
                _session.SaveOrUpdate(bean);
                _session.Flush();
            }
            catch (Exception)
            {
                throw;
            }
        }


        public IEnumerable<CourseView> FindById(string id)
        {
            try
            {
                var course = _session.CreateCriteria(typeof(Course))
                                     .Add(Restrictions.Eq("Id", id))
                                     .List<Course>();

                return CourseMapper.GetCourseView(course);

            }
            catch (Exception)
            {

                throw;
            }
        }
        public IEnumerable<ResourseAndCourseView> GetCourseAndResource()
        {
            try
            {
                var list =
                    _session.CreateCriteria<Course>()
                        .List<Course>();
                return CourseMapper.GetResourcesAndCourseView(list);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public Course GetCourse(string courseid)
        {
            try
            {
                var list = _session.CreateCriteria<Course>()
                            .Add(Restrictions.Eq("Id", courseid))
                            .List<Course>()
                            .First();
                return list;
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
