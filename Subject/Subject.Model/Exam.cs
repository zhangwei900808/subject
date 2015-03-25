using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Subject.Model
{
    public class Exam
    {
        /// <summary>
        /// 试卷id
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// 题型
        /// </summary>
        public string ExamType { get; set; }

        /// <summary>
        /// 题目
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 答案
        /// </summary>
        public string Answer { get; set; }

        /// <summary>
        /// 选项A
        /// </summary>
        public string A { get; set; }

        /// <summary>
        /// 选项B
        /// </summary>
        public string B { get; set; }

        /// <summary>
        /// 选项C
        /// </summary>
        public string C { get; set; }
        
        /// <summary>
        /// 选项C
        /// </summary>
        public string D { get; set; }

        /// <summary>
        /// 所属资源
        /// </summary>
        public Resources Resources { get; set; }
    }
}
