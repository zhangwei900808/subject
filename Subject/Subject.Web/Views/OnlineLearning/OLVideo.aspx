<%@ Page Title="" Language="C#" MasterPageFile="~/Course.Master" AutoEventWireup="true"
    CodeBehind="OLVideo.aspx.cs" Inherits="Subject.Web.Views.OnlineLearning.OLVideo" %>

<asp:Content ID="h" ContentPlaceHolderID="head" runat="server">
    <link href="../../Scripts/BootStrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/BootStrap/css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
    <link href="../../Styles/Default.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/johndyer-mediaelement-2d3aefc/build/mediaelementplayer.css"
        rel="stylesheet" type="text/css" />
    <link href="OnlineLearning.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery-1.7.2.js" type="text/javascript"></script>
   
    <script src="../../Scripts/BootStrap/js/bootstrap.js" type="text/javascript"></script>
    <script src="../../Scripts/johndyer-mediaelement-2d3aefc/build/mediaelement-and-player.js"
        type="text/javascript"></script>
    <script src="../../Scripts/zwjs.js" type="text/javascript"></script>
    <script src="OLVideo.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="c" ContentPlaceHolderID="cphContent" runat="server">
    <div id="ol-content">
        <div id="content-ol">
            <ol class="breadcrumb">
                <li><a href="<%= Page.ResolveUrl("~/Default.aspx") %>">首页</a></li>
                <li><a href="<%= Page.ResolveUrl("~/views/OnlineLearning/OnlineLearning.aspx") %>">在线学习</a></li>
                <li class="active">在线视频</li>
            </ol>
        </div>
        <div id="v-content">
            <video width="800" height="450" id="v-player" src="" type="video/mp4" controls="controls"></video>
        </div>
    </div>
</asp:Content>
