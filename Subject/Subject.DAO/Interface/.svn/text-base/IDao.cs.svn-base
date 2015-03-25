using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NHibernate;
using Subject.Model;

namespace Subject.DAO.Interface
{
    public interface IDao<T> where T : class
    {
        bool Exist(T bean);

        void Save(T bean);

        IList<T> Get();

        void Update(T bean);

        void Delete(T bean);

        void SaveOrUpdate(T bean);
    }
}
