<%@ Page Title="测试试卷" Language="C#" MasterPageFile="~/Course.Master" AutoEventWireup="true"
    CodeBehind="Exam.aspx.cs" Inherits="Subject.Web.Views.OnlineTesting.Exam" %>

<asp:Content ID="h" ContentPlaceHolderID="head" runat="server">
    <title>测试试卷</title>
    <link href="../../Scripts/BootStrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/BootStrap/css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
    <link href="../../Styles/Default.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery-1.7.2.js" type="text/javascript"></script>
    <script src="../../Scripts/BootStrap/js/bootstrap.js" type="text/javascript"></script>
    <script src="../../Scripts/zwjs.js" type="text/javascript"></script>
    <script src="Exam.js" type="text/javascript"></script>
    <style>
        #ol-content {
            position: relative;
        }
        #f-content
        {
            padding-left: 30px;
            height: 660px;
            overflow-y: scroll;
        }
        #f-content table
        {
            margin-top: 10px;
        }
        .da
        {
            color: red;
            display: none;
        }
        table tr
        {
            height: inherit;
        }
        #show_da {
            position: absolute;
            right: 20px;
            bottom: 0px;
            width: 70px;
            border: 1px solid #008000;
            border-bottom: 3px solid #008000;
            color: blue;
            font-size: 12px;
            background-color: #FCFCD4;
        }
        #show_da:hover {
            cursor: pointer;
        }
    </style>
</asp:Content>
<asp:Content ID="c" ContentPlaceHolderID="cphContent" runat="server">
    <div id="ol-content">
        <div id="content-ol">
            <ol class="breadcrumb">
                <li><a href="<%= Page.ResolveUrl("~/Default.aspx") %>">首页</a></li>
                <li><a href="<%= Page.ResolveUrl("~/views/OnlineTesting/OnlineTest.aspx") %>">在线测试</a></li>
                <li class="active">测试试卷</li>
            </ol>
        </div>
        <div id="f-content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr>
                        <td style="line-height: 25px" align="center" valign="top">
                            <table id="table_select_exam" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                </tbody>
                            </table>
                </tbody>
            </table>
        </div>
        <div id="show_da" onclick="btn_showda()">显示答案</div>
    </div>
</asp:Content>
