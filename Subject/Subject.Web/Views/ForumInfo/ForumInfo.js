﻿//----------------------------  初始化  ---------------------------------
$(function () {
    var id = getQueryString("id");
    getPosts(id);
    getUserPosts(id);
    $("#delbtn").popover();
    $("#title").popover();
    hidda();
    initkindeditor(id);
});

//----------------------------  方法  ---------------------------------

function hidda() {
    var lbl = $("#username").text();
    if (lbl.length != 0) {
        $("#regist-a").hide();
        $("#login-a").hide();
        $("#quit-a").show();

    } else {
        $("#regist-a").show();
        $("#login-a").show();
        $("#quit-a").hide();
    }
    if (lbl != "欢迎你，admin") {
        $("#addcourse-a").hide();
        $("#delbtn").hide();
    } else {
        $("#addcourse-a").show();
        $("#delbtn").show();
    }
}

function initkindeditor(id) {
    var koption = {
        cssPath: '../../scripts/kindeditor-4.1.10/plugins/code/prettify.css',
        uploadJson: '../../scripts/kindeditor-4.1.10/asp.net/upload_json.ashx',
        fileManagerJson: '../../scripts/kindeditor-4.1.10/asp.net/file_manager_json.ashx',
        allowFileManager: true
    };
    KindEditor.ready(function (k) {
        var keditor = k.create('#content-js', koption);
        prettyPrint();
        k('button[name=btn-editor-submit]').click(function (e) {
            if (keditor.isEmpty()) {
                alert("请输入数据再提交！");
                return false;
            }
            zwobj.url = "../../Handler/UserPostsHandler.ashx?action=SaveUserPosts";
            zwobj.data = { postid: id, khtml: encodeURI(keditor.html()) };
            ajaxData();
            return true;
        });
    });
}

function getPosts(id) {
    zwobj.url = "../../Handler/PostsHandler.ashx?action=GetPostsById";
    zwobj.data = { postid: id };
    ajaxData();
}

function getUserPosts(id) {
    zwobj.url = "../../Handler/UserPostsHandler.ashx?action=GetUserPostsById";
    zwobj.data = { postid: id };
    ajaxData();
}

//----------------------------  后台返回方法  ---------------------------------

function ajax_GetPostsById(data) {
    $("#foruminfo-table").empty();
    var html = "";
    html += "<table border='1' class='foruminfo-table'>" +
            "<tbody><tr><td rowspan='3'><div class='img'>" +
            "<img src='../../images/subject.jpg' height='124px' width='124px' />" +
            "</div><p>" + data.Data[0].UserName + "</p></td><td colspan='2'>" +
            "<span class='floor-tip'>楼主</span> <span class='floor-other'>发表于：" +
            eval("new " + data.Data[0].CreateDt.split('/')[1]).Format("yyyy-MM-dd HH:mm:ss") +
            "</span></td></tr><tr><td colspan='2'>" + decodeURI(data.Data[0].Contents) + "</td></tr><tr><td colspan='2'>" +
            "<span class='floor-tip'>引用|管理</span> <span id='replay-count' class='floor-other'>回复次数:</span>" +
            " </td></tr></tbody></table>";
    $("#foruminfo-table").html(html);
}

function ajax_GetUserPostsById(data) {
    var len = data.Data.length;
    $("#replay-count").append(data.Other);
    var html = "";
    for (var i = 0; i < len; i++) {
        html += "<table border='1' class='foruminfo-table'>" +
            "<tbody><tr><td rowspan='3'><div class='img'>" +
            "<img src='../../images/subject.jpg' height='124px' width='124px' />" +
            "</div><p>" + data.Data[i].UserName + "</p></td><td colspan='2'>" +
            "<span class='floor-tip'>#" + (i + 1) + "</span> <span class='floor-other'>回复于：" +
            eval("new " + data.Data[i].CreateDt.split('/')[1]).Format("yyyy-MM-dd HH:mm:ss") +
            "</span></td></tr><tr><td colspan='2'>" + decodeURI(data.Data[i].Contents) + "</td></tr><tr><td colspan='2'>" +
            "<span class='floor-tip'>引用|管理</span> <span class='floor-other'></span>" +
            " </td></tr></tbody></table>";
    }
    $("#foruminfo-table").append(html);
}

function ajax_SaveUserPosts(data) {
    location.reload();
}

//------------------------------  事件  ----------------------------------

function posting_click() {
    location.href = "../../Views/Posting/Posting.aspx";
}

function btdelrecources_click(courseid, resourcename) {
    zwobj.url = '../../Handler/ResourcesHandler.ashx?action=DelRecources';
    zwobj.data = { courseid: courseid, name: resourcename };
    ajaxData();
}

function UploadFile(id) {
    swfObj.post_params.id = id;
    var swfu = new SWFUpload(swfObj);
}

function regist_click() {
    $('#Regist').modal({
        show: true,
        keyboard: false,
        backdrop: false
    });
}

function RegistOk_click() {
    var username = $("#uname").val();
    var pass = $("#pass").val();
    if (username.length == 0 || pass.length == 0) {
        return false;
    }
    var pass2 = $("#pass2").val();
    if (pass != pass2) {
        return false;
    }
    var sex = $('input[name=sex][checked]').val();
    var introduction = $("#introduction").val();

    zwobj.url = '../../Handler/UserHandler.ashx?action=Register';
    zwobj.data = { username: username, pass: pass, sex: sex, introduction: introduction };
    ajaxData();
    return true;
}

function login_click() {
    $('#Login').modal({
        show: true,
        keyboard: false,
        backdrop: false
    });
}

function loginOk_click() {
    var username = $("#uname2").val();
    var pass = $("#pass3").val();
    if (username.length == 0 || pass.length == 0) {
        return false;
    }
    zwobj.url = '../../Handler/UserHandler.ashx?action=Login';
    zwobj.data = { username: username, pass: pass };
    ajaxData();
    return true;
}

function quit_click() {
    zwobj.url = '../../Handler/UserHandler.ashx?action=Quit';
    zwobj.data = {};
    ajaxData();
    return true;
}

function ajax_Quit() {
    location.reload();
}

function ajax_Login() {
    location.reload();
}

//------------------------------  后台返回  ----------------------------------

function ajax_SaveUser(data) {
    location.reload();
}
