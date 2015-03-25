using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Subject.DAO.Views;
using Subject.Model;

namespace Subject.DAO.Mappers
{
    public class PostsMapper
    {
        public static IEnumerable<PostsView> GetPostsView(IEnumerable<Posts> posts)
        {
            return Mapper.Map<IEnumerable<Posts>, IEnumerable<PostsView>>(posts);
        }
    }
}
