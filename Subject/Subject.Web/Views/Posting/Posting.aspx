<%@ Page Title="" Language="C#" MasterPageFile="~/Course.Master" AutoEventWireup="true"
    CodeBehind="Posting.aspx.cs" Inherits="Subject.Web.Views.Posting.Posting" %>

<asp:Content ID="h" ContentPlaceHolderID="head" runat="server">
    <link href="../../Scripts/BootStrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/BootStrap/css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/kindeditor-4.1.10/themes/default/default.css" rel="stylesheet"
        type="text/css" />
    <link href="../../Scripts/kindeditor-4.1.10/plugins/code/prettify.css" rel="stylesheet"
        type="text/css" />
    <link href="../../Styles/Default.css" rel="stylesheet" type="text/css" />
    <link href="../../Views/Posting/Posting.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="../../Scripts/BootStrap/js/bootstrap.js" type="text/javascript"></script>
    <script src="../../Scripts/zwjs.js" type="text/javascript"></script>
    <script src="../../Scripts/kindeditor-4.1.10/kindeditor-min.js" type="text/javascript"></script>
    <script src="../../Scripts/kindeditor-4.1.10/lang/zh_CN.js" type="text/javascript"></script>
    <script src="../../Scripts/kindeditor-4.1.10/plugins/code/prettify.js" type="text/javascript"></script>
    <script src="../../Views/Posting/Posting.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="c" ContentPlaceHolderID="cphContent" runat="server">
    <div id="content-ol">
        <ol class="breadcrumb">
            <li><a href="<%= Page.ResolveUrl("~/Default.aspx") %>">首页</a></li>
            <li><a href="<%= Page.ResolveUrl("~/Views/Forum/Forum.aspx") %>">论坛</a></li>
            <li class="active">发帖</li>
        </ol>
    </div>
    <table class="posting-table" border="1">
        <tr>
            <td>
                标题
            </td>
            <td>
                <input type="text" id="txt-title" /><span id="tip">注意：只能输入100个字符</span>
            </td>
        </tr>
        <tr>
            <td>
                内容
            </td>
            <td>
                <textarea id="ta-content" name="content"></textarea>
                <button id="btn-posting" name="btn-posting" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">
                发表帖子</button>
            </td>
        </tr>
    </table>
</asp:Content>
