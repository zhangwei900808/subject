<%@ Page Title="在线测试" Language="C#" MasterPageFile="~/Course.Master" AutoEventWireup="true" CodeBehind="OnlineTest.aspx.cs" Inherits="Subject.Web.Views.OnlineTesting.OnlineTest" %>
<asp:Content ID="h" ContentPlaceHolderID="head" runat="server">
    <title>在线测试</title>
    <link href="../../Scripts/SWFUpload/default.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/BootStrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="../../Scripts/BootStrap/css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
    <link href="../../Styles/Default.css" rel="stylesheet" type="text/css" />
    <link href="OnlineTesting.css" rel="stylesheet" type="text/css" /> 
    <link href="../../Scripts/SWFUpload/default.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery-1.7.2.js" type="text/javascript"></script>
    <script src="../../Scripts/BootStrap/js/bootstrap.js" type="text/javascript"></script>
    <script src="../../Scripts/SWFUpload/swfupload.js" type="text/javascript"></script>
    <script src="handlers.js" type="text/javascript"></script>
    <script src="../../Scripts/zwjs.js" type="text/javascript"></script>
    <script src="OnlineTest.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="c" ContentPlaceHolderID="cphContent" runat="server">
    <div id="ol-content">
        <div id="content-ol">
            <ol class="breadcrumb">
                <li><a href="<%= Page.ResolveUrl("~/Default.aspx") %>">首页</a></li>
                <li class="active">在线测试</li>
            </ol>
        </div>
        <div class="btn-foruminfo">
            <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal" onclick="ol_upload_click()">
                添加试卷</button>
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
                        添加试卷</h4>
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
                            
                        </tr>
                         <tr>
                           <td>
                                试卷名称：
                            </td>
                            <td>
                               <input id="txt_examname" type="text" style="width: 200px;"/>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-default" onclick="ol_ok()">
                        确定</button>
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
    <div class="modal fade" id="exam" tabindex="-1" role="dialog" aria-labelledby="ol-upload-lbl"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;</button>
                    <h4 class="modal-title" id="H1">
                        添加试题</h4>
                </div>
                <div class="modal-body">
                    <table>
                        <tr>
                            <td>
                                试题类型：
                            </td>
                            <td>
                               <select id="sel_exam" style="width: 200px;">
                                   <option value="1">选择题</option>
                                   <option value="2">填空题</option>
                                   <option value="3">问题题</option>
                               </select>
                            </td>
                            
                        </tr>
                         <tr>
                           <td>
                                题目：
                            </td>
                            <td>
                               <textarea id="exam_tm" style="width: 200px;height: 50px;"></textarea>
                            </td>
                        </tr>
                         <tr>
                           <td>
                                选项A：
                            </td>
                            <td>
                               <textarea id="exam_A" style="width: 200px;height: 50px;"></textarea>
                            </td>
                        </tr>
                        <tr>
                           <td>
                                选项B：
                            </td>
                           <td>
                               <textarea id="exam_B" style="width: 200px;height: 50px;"></textarea>
                            </td>
                        </tr>
                        <tr>
                           <td>
                                选项C：
                            </td>
                            <td>
                               <textarea id="exam_C" style="width: 200px;height: 50px;"></textarea>
                            </td>
                        </tr>
                        <tr>
                           <td>
                                选项D：
                            </td>
                           <td>
                               <textarea id="exam_D" style="width: 200px;height: 50px;"></textarea>
                            </td>
                        </tr>
                         <tr>
                           <td>
                                答案：
                            </td>
                            <td>
                               <textarea id="exam_answer" style="width: 200px;height: 50px;"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-default" onclick="exam_ok()">
                        确定</button>
                    <button type="button" class="btn btn-default" onclick="ol_cancel()">
                        取消</button>
                </div>
                <input type="hidden" id="hidd_exam"/>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</asp:Content>
