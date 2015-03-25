﻿//----------------------------  初始化  ---------------------------------
$(function () {
    $("#delbtn").popover();
    $("#title").popover();
    hidda();
    var videourl = getQueryString("filepath");
    initFlash(videourl);
});

//----------------------------  方法  ---------------------------------

function initFlash(parameters) {
    var url = decodeURI(parameters);
    $("#f-content").append('<embed id="f-flash" type="application/x-shockwave-flash"' +
        ' pluginspage="http://www.macromedia.com/go/getflashplayer"height="670" width="70%" ' +
        ' wmode="Window" loop="loop" src="' + url + '" scale="NoScale" quality="high"menu="false"></embed>');
    //$("#f-flash").play();

}

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
}

//------------------------------  事件  ----------------------------------

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
