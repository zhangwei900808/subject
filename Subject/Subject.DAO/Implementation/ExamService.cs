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
    public class ExamService : IDao<Exam>
    {
        private readonly ISession _session;

        public ExamService(ISession session)
        {
            _session = session;
        }

        public bool Exist(Exam bean)
        {
            throw new NotImplementedException();
        }

        public void Save(Exam bean)
        {
            _session.Save(bean);
            _session.Flush();
        }

        public IList<Exam> Get()
        {
            throw new NotImplementedException();
        }

        public void Update(Exam bean)
        {
            throw new NotImplementedException();
        }

        public void Delete(Exam bean)
        {
            _session.Delete(bean);
            _session.Flush();
        }

        public void SaveOrUpdate(Exam bean)
        {
            throw new NotImplementedException();
        }

        public IList<Exam> GetByResourseId(Resources resources)
        {
            try
            {
                var data = _session.CreateCriteria<Exam>()
                                   .Add(Restrictions.Eq("Resources", resources))
                                   .List<Exam>();
                return data;
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}
