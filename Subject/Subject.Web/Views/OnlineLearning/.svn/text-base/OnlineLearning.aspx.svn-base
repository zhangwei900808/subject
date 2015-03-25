<%@ Page Title="" Language="C#" MasterPageFile="~/Course.Master" AutoEventWireup="true"
    CodeBehind="OnlineLearning.aspx.cs" Inherits="Subject.Web.Views.OnlineLearning.OnlineLearning" %>

<asp:Content ID="h" ContentPlaceHolderID="head" runat="server">
    <link href="../../Scripts/SWFUpload/default.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/BootStrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/BootStrap/css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
    <link href="../../Styles/Default.css" rel="stylesheet" type="text/css" />
    <link href="OnlineLearning.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/SWFUpload/default.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery-1.7.2.js" type="text/javascript"></script>
    
    <script src="../../Scripts/BootStrap/js/bootstrap.js" type="text/javascript"></script>
    <script src="../../Scripts/SWFUpload/swfupload.js" type="text/javascript"></script>
    <script src="handlers.js" type="text/javascript"></script>
    <script src="../../Scripts/zwjs.js" type="text/javascript"></script>
    <script src="OnlineLearning.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="c" ContentPlaceHolderID="cphContent" runat="server">
    <div id="ol-content">
        <div id="content-ol">
            <ol class="breadcrumb">
                <li><a href="<%= Page.ResolveUrl("~/Default.aspx") %>">首页</a></li>
                <li class="active">在线学习</li>
            </ol>
        </div>
        <div class="btn-foruminfo">
            <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal" onclick="ol_upload_click()">
                上传文件</button>
        </div>
        <div class="ol-course-list">
        </div>
    </div>
    <!-- Course Modal -->
    <div class="modal fade" id="ol-upload" tabindex="-1" role="dialog" aria-labelledby="ol-upload-lbl"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;</button>
                    <h4 class="modal-title" id="ol-upload-lbl">
                        上传文件</h4>
                </div>
                <div class="modal-body">
                    <table>
                        <tr>
                            <td>
                                课程列表：
                            </td>
                            <td>
                                <select id="sel-couselist" onchange="sel_couselist_change()">
                                </select>
                            </td>
                            <td>
                                <span id="spanButtonPlaceholder"></span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" onclick="ol_cancel()">
                        取消</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!-- Course Modal -->
    <div class="modal fade" id="loading" tabindex="-1" role="dialog" aria-labelledby="loading-lbl"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;</button>
                    <h4 class="modal-title" id="loading-lbl">
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
