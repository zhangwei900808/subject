<%@ Page Title="" Language="C#" MasterPageFile="~/Course.Master" AutoEventWireup="true"
    CodeBehind="ForumInfo.aspx.cs" Inherits="Subject.Web.Views.ForumInfo.ForumInfo" %>

<asp:Content ID="h" ContentPlaceHolderID="head" runat="server">
    <title>论坛详细信息</title>
    <link href="../../Scripts/BootStrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/BootStrap/css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
    <link href="../../Styles/Default.css" rel="stylesheet" type="text/css" />

    <link href="../../Scripts/kindeditor-4.1.10/themes/default/default.css" rel="stylesheet"
        type="text/css" />
    <link href="../../Scripts/kindeditor-4.1.10/plugins/code/prettify.css" rel="stylesheet"
        type="text/css" />

    <link href="ForumInfo.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery-1.8.3.js" type="text/javascript"></script>

    <script src="../../Scripts/kindeditor-4.1.10/kindeditor-min.js" type="text/javascript"></script>
    <script src="../../Scripts/kindeditor-4.1.10/lang/zh_CN.js" type="text/javascript"></script>
    <script src="../../Scripts/kindeditor-4.1.10/plugins/code/prettify.js" type="text/javascript"></script>

    <script src="../../Scripts/BootStrap/js/bootstrap.js" type="text/javascript"></script>
    <script src="../../Scripts/zwjs.js" type="text/javascript"></script>
    <script src="ForumInfo.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="c" ContentPlaceHolderID="cphContent" runat="server">
    <div id="content-foruminfo">
        <div id="content-ol">
            <ol class="breadcrumb">
                <li><a href="<%= Page.ResolveUrl("~/Default.aspx") %>">首页</a></li>
                <li><a href="<%= Page.ResolveUrl("~/Views/Forum/Forum.aspx") %>">论坛</a></li>
                <li class="active">详细信息</li>
            </ol>
        </div>
        <div class="btn-foruminfo">
            <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="posting_click()">
                发帖</button>
        </div>
        <div id="foruminfo-table">
            
        </div>
         <div class="btn-foruminfo">
            <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">
                发帖</button>
                <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">
                结帖</button>
        </div>
        <hr/>
        <div id="resplay-tip">回复内容:</div>
        <div id="js-edit">
            <textarea id="content-js" name="content"></textarea>
        </div>
        <div id="btn-submit"><button name="btn-editor-submit" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">
                提交回复</button>(Ctrl+Enter)</div>
    </div>
</asp:Content>
