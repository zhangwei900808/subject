using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Subject.Model;
using Subject.DAO.Views;

namespace Subject.DAO
{
    public class BootStrapper
    {
        public static void ConfigureAutoMapper()
        {
            Mapper.CreateMap<Course, CourseView>();
            Mapper.CreateMap<Resources, ResourcesView>();
            Mapper.CreateMap<Course, ResourseAndCourseView>();
            Mapper.CreateMap<Posts, PostsView>();
            Mapper.CreateMap<UserPosts, UserPostsView>();
        }
    }
}
