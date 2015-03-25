using System;
using System.Web.UI;

namespace Subject.Web
{
    public partial class Default : Page
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