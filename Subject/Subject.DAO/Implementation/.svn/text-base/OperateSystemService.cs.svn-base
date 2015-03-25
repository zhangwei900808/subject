using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NHibernate;
using Subject.DAO.Interface;
using Subject.Nhibernate;
using Subject.Model;

namespace Subject.DAO.Implementation
{
   public class OperateSystemService:IDao<OperateSystem>
   {
        private readonly ISession _session;

        public OperateSystemService(ISession session)
       {
           _session = session;
       }

       public bool Exist(OperateSystem bean)
       {
           throw new NotImplementedException();
       }

       public void Save(OperateSystem bean)
       {
           throw new NotImplementedException();
       }

       public IList<OperateSystem> Get()
       {
           try
           {
               return _session.CreateQuery("from OperateSystem").List<OperateSystem>();
           }
           catch (Exception)
           {
               throw;
           }
       }

       public void Update(OperateSystem bean)
       {
           throw new NotImplementedException();
       }

       public void Delete(OperateSystem bean)
       {
           throw new NotImplementedException();
       }

       public void SaveOrUpdate(OperateSystem bean)
       {
           throw new NotImplementedException();
       }
   }
}
