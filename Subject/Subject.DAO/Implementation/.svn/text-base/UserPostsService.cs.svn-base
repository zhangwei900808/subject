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
    public class UserPostsService : IDao<UserPosts>
    {
        private readonly ISession _session;
        public UserPostsService(ISession session)
        {
            _session = session;
        }

        public bool Exist(UserPosts bean)
        {
            throw new NotImplementedException();
        }

        public void Save(UserPosts bean)
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

        public IList<UserPosts> Get()
        {
            try
            {
                return _session.CreateQuery("from UserPosts").List<UserPosts>();
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public void Update(UserPosts bean)
        {
            throw new NotImplementedException();
        }

        public void Delete(UserPosts bean)
        {
            throw new NotImplementedException();
        }

        public void SaveOrUpdate(UserPosts bean)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<UserPostsView> FindById(Posts posts)
        {
            try
            {
                var data = _session.CreateCriteria<UserPosts>()
                                   .Add(Restrictions.Eq("Posts", posts))
                                   .AddOrder(new Order("CreateDt", true))
                                   .List<UserPosts>();
                return UserPostsMapper.GetUserPostsView(data);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
