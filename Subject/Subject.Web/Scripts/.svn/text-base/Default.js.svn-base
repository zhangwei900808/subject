var myarray = new Array(); //数组
//----------------------------  初始化  ---------------------------------
$(function () {
    hidda();
    $("#delbtn").popover();
    $("#title").popover();
    AjaxCourse();
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

function AjaxCourse() {
    zwobj.url = 'Handler/CourseHandler.ashx?action=GetCourse';
    zwobj.data = {};
    ajaxData();
}

function HtmlCourse(data) {
    var len = data.Data.length;
    var innerHtml = "";
    var row = "<div class='row'>";
    for (var i = 0; i < len; i++) {
        var rowcol = "<div class='col-sm-6 col-md-4'>";
        var thumbnailcaption = "<div class='thumbnail' onclick='addborder_click(\"" + data.Data[i].Id + "\",this)'><div class='caption'>";
        var h3 = " <h3>" + data.Data[i].Title.substr(0, 10) + "</h3>";
        var p = "<p>" + data.Data[i].Contents.substr(0, 87) + "...</p><p> <a  class='btn btn-primary btn-sm' data-toggle='modal' onclick='courselocation_onclick(\"" + data.Data[i].Id + "\",this)')'>点击进入</a></p> </div></div></div>";
        if ((i % 3) == 0) {
            innerHtml += row + rowcol + thumbnailcaption + h3 + p;
        } else {
            innerHtml += rowcol + thumbnailcaption + h3 + p;
        }
    }
    $("#content2").html(innerHtml);
}

function Ajax_SaveCourse(obj) {
    location.reload();
}

function Ajax_DelCourse(obj) {
    location.reload();
}

function Course() {
    zwobj.url = 'Handler/CourseHandler.ashx?action=GetCourse';
    zwobj.data = {};
    ajaxData();
}


function listgroup(e) {
    $(".list-group a").removeClass("active");
    $(e).addClass("active");
}

//------------------------------  事件  ----------------------------------

function btnabout_click() {
    location.href = "../Views/About/About.aspx";
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

    zwobj.url = 'Handler/UserHandler.ashx?action=Register';
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
    zwobj.url = 'Handler/UserHandler.ashx?action=Login';
    zwobj.data = { username: username, pass: pass };
    ajaxData();
    return true;
}

function quit_click() {
    zwobj.url = 'Handler/UserHandler.ashx?action=Quit';
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
function addCourse_click() {
    var title = $("#title").val();
    var contents = $("#coursecontent").val();
    if (title.length == 0) {
        $("#title").popover();
        return false;
    }
    zwobj.url = 'Handler/CourseHandler.ashx?action=SaveCourse';
    zwobj.data = { title: title, content: contents };
    ajaxData();
    return true;
}

function openform_click() {
    $('#myModal').modal({
        show: true,
        keyboard: false,
        backdrop: false
    });
    $("#title").focus();
}

function courselocation_onclick(id, e) {
    location.href = "Views/Course/Course.aspx?id=" + id;
}

function addborder_click(id, e) {
    var lbl = $("#username").text();
    if (lbl != "欢迎你，admin") {
        $(e).removeClass("thumbnail-border");
    } else {
        var hasclass = $(e).hasClass("thumbnail-border");
        if (hasclass) {
            $(e).removeClass("thumbnail-border");
            myarray.remove(id);
        } else {
            $(e).addClass("thumbnail-border");
            myarray.push(id);
        }
    }

}

function del_click() {
    var len = myarray.length;
    if (len == 0) {
        $("#delbtn").popover();
    }
    zwobj.url = 'Handler/CourseHandler.ashx?action=DelCourse';
    zwobj.data = { id: myarray.join('|') };
    ajaxData();
    return true;
}

//------------------------------  后台返回  ----------------------------------

function ajax_SaveUser(data) {
    location.reload();
}

