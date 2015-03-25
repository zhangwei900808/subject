using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NHibernate;
using NHibernate.Criterion;
using Subject.DAO.Interface;
using Subject.Model;

namespace Subject.DAO.Implementation
{
    public class UserService:IDao<User>
    {
        private readonly ISession _session;
        public UserService(ISession session)
        {
            _session = session;
        }

        public bool Exist(User bean)
        {
            var username = bean.Name;
            var password = bean.Password;
            var count = _session.CreateCriteria(typeof (User))
                                .Add(Restrictions.Eq("Name", username))
                                .Add(Restrictions.Eq("Password", password))
                                .List<User>()
                                .Count;
            return count > 0;
        }

        public void Save(User bean)
        {
            _session.Save(bean);
            _session.Flush();
        }

        public IList<User> Get()
        {
            try
            {
                return _session.CreateQuery("from User").List<User>();
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public void Update(User bean)
        {
            throw new NotImplementedException();
        }

        public void Delete(User bean)
        {
            throw new NotImplementedException();
        }

        public void SaveOrUpdate(User bean)
        {
            throw new NotImplementedException();
        }

        public IList<User> FindByName(string name)
        {
            try
            {
                return _session.CreateCriteria<User>()
                               .Add(Restrictions.Eq("Name", name))
                               .List<User>();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
