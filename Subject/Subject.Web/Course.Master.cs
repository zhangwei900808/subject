using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Subject.Web
{
    public partial class Course : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var session = Session["UserName"];
            if (session != null)
            {
                username.InnerText = "欢迎你，" + session;
            }
            else
            {
                username.InnerText = "";
            }
        }
    }
}