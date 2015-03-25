<%@ Page Title="" Language="C#" MasterPageFile="~/Course.Master" AutoEventWireup="true"
    CodeBehind="Forum.aspx.cs" Inherits="Subject.Web.Views.Forum.Forum" %>

<asp:Content ID="h" ContentPlaceHolderID="head" runat="server">
    <title>论坛</title>
    <link href="../../Scripts/BootStrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/BootStrap/css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/bootstrap-paginator/bootstrap-combined.min.css" rel="stylesheet"
        type="text/css" />
    <link href="../../Styles/Default.css" rel="stylesheet" type="text/css" />
    <link href="Forum.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="../../Scripts/BootStrap/js/bootstrap.js" type="text/javascript"></script>
    <script src="../../Scripts/bootstrap-paginator/bootstrap-paginator.js" type="text/javascript"></script>
    <script src="../../Scripts/zwjs.js" type="text/javascript"></script>
    <script src="Forum.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="c" ContentPlaceHolderID="cphContent" runat="server">
    <div id="content-forum">
        <div id="content-ol">
            <ol class="breadcrumb">
                <li><a href="<%= Page.ResolveUrl("~/Default.aspx") %>">首页</a></li>
                <li class="active">论坛</li>
            </ol>
        </div>
        <div id="forum-btn1">
            <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="posting_click()">
                发帖</button>
        </div>
        <div id="forum-content">
            <div class="panel panel-default">
                <!-- Table -->
                <table class="table">
                    <thead>
                        <tr>
                            <th style="width: 675px; text-align: left;">
                                全部主题
                            </th>
                            <th style="width: 100px; text-align: center;">
                                发表时间
                            </th>
                            <th style="width: 100px; text-align: center;">
                                回复/查看
                            </th>
                            <th style="width: 100px; text-align: center;">
                                作者
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="content-page">
            <div id="example">
            </div>
        </div>
    </div>
</asp:Content>
