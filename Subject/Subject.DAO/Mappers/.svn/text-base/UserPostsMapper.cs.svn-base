using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Subject.DAO.Views;
using Subject.Model;

namespace Subject.DAO.Mappers
{
    public class UserPostsMapper
    {
        public static IEnumerable<UserPostsView> GetUserPostsView(IEnumerable<UserPosts> userPostses)
        {
            return Mapper.Map<IEnumerable<UserPosts>, IEnumerable<UserPostsView>>(userPostses);
        }
    }
}
