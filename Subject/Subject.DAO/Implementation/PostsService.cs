using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NHibernate;
using NHibernate.Criterion;
using Subject.DAO.Interface;
using Subject.Model;
using Subject.DAO.Views;
using Subject.DAO.Mappers;

namespace Subject.DAO.Implementation
{
    public class PostsService : IDao<Posts>
    {
        private readonly ISession _session;
        public PostsService(ISession session)
        {
            _session = session;
        }

        public bool Exist(Posts bean)
        {
            throw new NotImplementedException();
        }

        public void Save(Posts bean)
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

        public IList<Posts> Get()
        {
            try
            {
                return _session.CreateQuery("from Posts").List<Posts>();
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public void Update(Posts bean)
        {
            throw new NotImplementedException();
        }

        public void Delete(Posts bean)
        {
            try
            {
                var data = (Posts) _session.Load(typeof (Posts), bean.Id);
                _session.Delete(data);
                _session.Flush();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void SaveOrUpdate(Posts bean)
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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="pageStart"></param>
        /// <param name="pageLimit"></param>
        /// <param name="count"></param>
        /// <returns></returns>
        public IEnumerable<PostsView> FindByPosts(int pageStart, int pageLimit, ref int count)
        {
            try
            {
                var query = _session.CreateCriteria<Posts>();
                count = query.List<Posts>().Count;
                var data = query
                    .SetFirstResult((pageStart - 1) * pageLimit)
                    .SetMaxResults(pageLimit)
                    .AddOrder(new Order("CreateDt", false))
                    .List<Posts>();
                
                return PostsMapper.GetPostsView(data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public IEnumerable<PostsView> FindById(string id)
        {
            try
            {
                var data = _session.CreateCriteria<Posts>()
                                   .Add(Restrictions.Eq("Id", id))
                                   .List<Posts>();
                return PostsMapper.GetPostsView(data);

            }
            catch (Exception e)
            {
                throw;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Posts FindById2(string id)
        {
            try
            {
                var data = _session.CreateCriteria<Posts>()
                                   .Add(Restrictions.Eq("Id", id))
                                   .List<Posts>()
                                   .First();
                return data;

            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}
