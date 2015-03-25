using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NHibernate;
using NHibernate.Criterion;
using Subject.DAO.Interface;
using Subject.Model;
using Subject.DAO.Mappers;
using Subject.DAO.Views;

namespace Subject.DAO.Implementation
{
    public class ResourcesService : IDao<Resources>
    {
        private readonly ISession _session;
        public ResourcesService(ISession session)
        {
            _session = session;
        }

        public bool Exist(Resources bean)
        {
            throw new NotImplementedException();
        }

        public void Save(Resources bean)
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

        public IList<Resources> Get()
        {
            try
            {
                return _session.CreateQuery("from Resources").List<Resources>();
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public void Update(Resources bean)
        {
            try
            {
                _session.Update(bean);
                _session.Flush();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void DeleteByName(Resources bean)
        {
            var resources = FindByName(bean.Name, bean.Flag);
            try
            {
                if (resources.Count > 0)
                {
                    _session.Delete(resources[0]);
                    _session.Flush();

                }

            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Delete(Resources bean)
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

        public void Delete2(string courseid)
        {
            try
            {
                _session.Delete("from Resources r where r.Course.Id=" + courseid);
                _session.Flush();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Refresh(Resources bean)
        {
            try
            {
                _session.Refresh(bean);
                _session.Flush();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void SaveOrUpdate(Resources bean)
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

        public IList<Resources> FindByName(string name, string type)
        {
            try
            {
                var data = _session.CreateCriteria(typeof(Resources))
                     .Add(Restrictions.Eq("Name", name))
                     .Add(Restrictions.Eq("Flag", type))
                     .List<Resources>();
                return data;
            }
            catch (Exception)
            {
                throw;
            }
        }


        public IEnumerable<ResourcesView> FindByCourseId(Course bean)
        {
            try
            {
                var data = _session.CreateCriteria(typeof(Resources))
                        .Add(Restrictions.Eq("Course", bean))
                        .Add(Restrictions.Eq("Flag", "课程列表"))
                        .AddOrder(new Order("CreateDt", false))
                        .List<Resources>();
                return ResourcesMapper.GetResourcesView(data);
            }
            catch (Exception)
            {
                throw;
            }
        }



    }
}
