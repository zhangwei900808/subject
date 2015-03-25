<%@ Page Title="" Language="C#" MasterPageFile="~/Course.Master" AutoEventWireup="true"
    CodeBehind="Course.aspx.cs" Inherits="Subject.Web.Views.Course.Course" %>

<asp:Content ID="head" ContentPlaceHolderID="head" runat="server">
    <link href="../../Scripts/BootStrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/BootStrap/css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
    <link href="../../Styles/Default.css" rel="stylesheet" type="text/css" />
    <link href="Course.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/SWFUpload/default.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery-1.7.2.js" type="text/javascript"></script>
    <script src="../../Scripts/SWFUpload/swfupload.js" type="text/javascript"></script>
    <script src="handlers.js" type="text/javascript"></script>
    <script src="../../Scripts/BootStrap/js/bootstrap.js" type="text/javascript"></script>
    <script src="../../Scripts/zwjs.js" type="text/javascript"></script>
    <script src="Course.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="content" ContentPlaceHolderID="cphContent" runat="server">
    <div id="content-ol">
        <ol class="breadcrumb">
            <li><a href="<%= Page.ResolveUrl("~/Default.aspx") %>">首页</a></li>
            <li class="active">课程内容</li>
        </ol>
    </div>
    <div id="content2">
        <h2>
            <strong></strong>
        </h2>
        <div style="width: 900px; margin: 0px auto; color: green; background-color: green">
            <hr />
        </div>
        <p id="p1">
            发表时间：<span id="time"></span>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 作者：<span id="author"></span>&nbsp;
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 点击次数：<span id="count"></span>次</p>
        <p id="p2">
        </p>
    </div>
    <div id="content3">
        <h3>
            课程资源下载：</h3>
        <div id="swfu_container">
            <div>
                <span id="spanButtonPlaceholder"></span>
            </div>
        </div>
        <ul id="content3-ul">
        </ul>
    </div>
    <!-- Course Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;</button>
                    <h4 class="modal-title" id="myModalLabel">
                        正在上传，请稍等...</h4>
                </div>
                <div class="modal-body">
                    <div id="divFileProgressContainer">
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</asp:Content>
