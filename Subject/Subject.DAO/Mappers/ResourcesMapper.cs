using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Subject.DAO.Views;
using Subject.Model;

namespace Subject.DAO.Mappers
{
    public class ResourcesMapper
    {
        public static IEnumerable<ResourcesView> GetResourcesView(IEnumerable<Resources> resourceses)
        {
            return Mapper.Map<IEnumerable<Resources>, IEnumerable<ResourcesView>>(resourceses);
        }

       
    }
}
