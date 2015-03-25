﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Subject.Web.Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>操作系统精品课程</title>
    <link href="Scripts/BootStrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="Scripts/BootStrap/css/bootstrap-theme.css" rel="stylesheet" type="text/css" />
    <link href="Styles/Default.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/jquery-1.7.2.js" type="text/javascript"></script>
    <script src="Scripts/BootStrap/js/bootstrap.js" type="text/javascript"></script>
    <script src="Scripts/zwjs.js" type="text/javascript"></script>
    <script src="Scripts/Default.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div id="head-div">
        <img src="<%= Page.ResolveUrl("~/images/banner1.jpg") %>" align="middle" alt="操作系统 精品课程" title="操作系统精品课程" />
    </div>
    <div class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" href="<% Page.ResolveUrl("Default.aspx"); %>">首页</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="<%= Page.ResolveUrl("~/Views/Forum/Forum.aspx") %>">论坛</a></li>
                <li><a href="<%= Page.ResolveUrl("~/Views/OnlineLearning/OnlineLearning.aspx") %>">在线学习</a></li>
                <li><a href="<%= Page.ResolveUrl("~/Views/OnlineTesting/OnlineTest.aspx") %>">在线测试</a></li>
                <li><a href="<%= Page.ResolveUrl("~/Views/About/About.aspx") %>">关于</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <label id="username" runat="server">
                    </label>
                </li>
                <li><a id="regist-a" onclick="login_click()" style="padding: 8px 5px;">登录</a></li>
                <li><a id="login-a" onclick="regist_click()" style="padding: 8px 15px 8px 0;">
                    注册</a></li>
                <li><a id="quit-a" onclick="quit_click()">退出</a></li>
            </ul>
        </div>
    </div>
    <div id="content">
        <div id="content1">
            <img src="images/czxt.jpg" align="left" alt="操作系统精品课程" title="操作系统精品课程" /><h2>
                操作系统课程简介</h2>
            <p>
                《计算机操作系统》课程是我校计算机专业学生的一门专业基础课， 该课程目的是使学生掌握现代计算机操作系统的基本原理、 基本设计方法及实现技术，具有分析现行操作系统和设计、
                开发实际操作系统的基本能力， 为以后使用计算机解决本专业的问题打下坚实的基础， 计算机操作系统在计算机专业课程体系中扮演着重要的角色。</p>
            <p>
                <button class="btn btn-primary" data-toggle="modal" onclick="btnabout_click()">
                    了解更多</button>
                <a id="addcourse-a" class="btn btn-primary" data-toggle="modal" onclick="openform_click()">
                    添加课程</a>
                <a id="delbtn" class="btn btn-primary" data-placement="right" data-toggle="popover"
                    data-content="请选择一条数据删除！" onclick="del_click()">删除课程</a>
            </p>
        </div>
        <div id="content2">
        </div>
    </div>
    <div id="footer">
        <p id="p2">
            版权所有：&copy滁州学院计算机信息工程学院</p>
        <p id="p3">
            此网站内容为原创，转载请标明出处</p>
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
                        添加课程</h4>
                </div>
                <div class="modal-body">
                    <table>
                        <tr>
                            <td>
                                课程标题：
                            </td>
                            <td>
                                <input id="title" type="text" data-placement="right" data-toggle="popover" data-content="请输入标题！" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                课程说明：
                            </td>
                            <td>
                                <textarea id="coursecontent" rows="8"></textarea>
                            </td>
                        </tr>
                    </table>
                    <br>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        取消</button>
                    <button type="button" class="btn btn-primary" onclick="addCourse_click()">
                        保存</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!--Regist Modal -->
    <div class="modal fade" id="Regist" tabindex="-1" role="dialog" aria-labelledby="regist-title"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;</button>
                    <h4 class="modal-title" id="regist-title">
                        注册</h4>
                </div>
                <div class="modal-body">
                    <table>
                        <tr>
                            <td>
                                用户名：
                            </td>
                            <td>
                                <input id="uname" type="text" data-placement="right" data-toggle="popover" data-content="请输入用户名！" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                密码：
                            </td>
                            <td>
                                <input id="pass" type="password" data-placement="right" data-toggle="popover" data-content="请输入密码！" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                确认密码：
                            </td>
                            <td>
                                <input id="pass2" type="password" data-placement="right" data-toggle="popover" data-content="请确认密码！" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                性别：
                            </td>
                            <td>
                                <input id="sex1" type="radio" name="sex" checked="checked" value="男">男</input>
                                <input id="sex2" type="radio" name="sex" value="女">女</input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                个人简介：
                            </td>
                            <td>
                                <textarea id="introduction" rows="8"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        取消</button>
                    <button type="button" class="btn btn-primary" onclick="RegistOk_click()">
                        注册</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!--Login Modal -->
    <div class="modal fade" id="Login" tabindex="-1" role="dialog" aria-labelledby="login-title"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;</button>
                    <h4 class="modal-title" id="login-title">
                        登录</h4>
                </div>
                <div class="modal-body">
                    <table>
                        <tr>
                            <td>
                                用户名：
                            </td>
                            <td>
                                <input id="uname2" type="text" data-placement="right" data-toggle="popover" data-content="请输入用户名！" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                密码：
                            </td>
                            <td>
                                <input id="pass3" type="password" data-placement="right" data-toggle="popover" data-content="请输入密码！" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        取消</button>
                    <button type="button" class="btn btn-primary" onclick="loginOk_click()">
                        登录</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <input type="hidden" id="hiddId" />
    </form>
</body>
</html>
