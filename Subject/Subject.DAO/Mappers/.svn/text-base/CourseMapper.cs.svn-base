using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Subject.DAO.Views;
using Subject.Model;

namespace Subject.DAO.Mappers
{
   public static class CourseMapper
    {
       public static IEnumerable<CourseView> GetCourseView(IEnumerable<Course> course)
       {
           return Mapper.Map<IEnumerable<Course>, IEnumerable<CourseView>>(course);
       }

       public static IEnumerable<ResourseAndCourseView> GetResourcesAndCourseView(IEnumerable<Course> courses)
       {
           return Mapper.Map<IEnumerable<Course>, IEnumerable<ResourseAndCourseView>>(courses);
       }
    }
}
