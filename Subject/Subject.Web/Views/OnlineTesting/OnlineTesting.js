﻿//----------------------------  初始化  ---------------------------------
$(function () {
    $("#delbtn").popover();
    $("#title").popover();
    getCourse();
    hidda();
    $("#f-content").children().css("margin-top", "40px");
});

/**
* *定义swfupload配置文件对象
**/
var swfObj = {
    // Backend Settings
    upload_url: "../../Handler/ResourcesHandler.ashx?action=SaveFile",
    post_params: {
        id: "",
        type: "flashPdf"
    },
    //upload_url: "upload.aspx",
    // File Upload Settings
    file_size_limit: "1024000",
    file_types: "*.swf;",
    file_types_description: "*.swf;",
    file_upload_limit: "0",    // Zero means unlimited
    // Event Handler Settings - these functions as defined in Handlers.js
    //  The handlers are not part of SWFUpload but are part of my website and control how
    //  my website reacts to the SWFUpload events.
    file_queue_error_handler: fileQueueError,
    file_dialog_complete_handler: fileDialogComplete,
    upload_progress_handler: uploadProgress,
    upload_error_handler: uploadError,
    upload_success_handler: uploadSuccess,
    upload_complete_handler: uploadComplete,
    // Button settings
    button_image_url: "../../Images/XPButtonNoText_160x22.png",
    button_placeholder_id: "spanButtonPlaceholder",
    button_width: 160,
    button_height: 22,
    button_text: '<span class="button">选择文件上传 <span class="buttonSmall">(最大 1G)</span></span>',
    button_text_style: '.button { font-family: Helvetica, Arial, sans-serif; font-size: 14pt;} .buttonSmall { font-size: 10pt; }',
    button_text_top_padding: 1,
    button_text_left_padding: 5,
    // Flash Settings
    flash_url: "../../Scripts/swfupload/swfupload.swf", // Relative to this file
    custom_settings: {
        upload_target: "divFileProgressContainer"
    },
    // Debug Settings
    debug: false
};

//----------------------------  方法  ---------------------------------

function getCourse() {
    zwobj.url = '../../Handler/CourseHandler.ashx?action=GetCourseAndResource';
    zwobj.data = { type: "flashPdf" };
    ajaxData();
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
    if (lbl != "欢迎你，admin") {
        $(".btn-foruminfo button").hide();
        $(".ol-table tr td span button").hide();
        $(".ol-table tr td span").removeClass("add-css1").addClass("add-css2");
    } else {
        $(".btn-foruminfo button").show();
        $(".ol-table tr td span button").show();
        $(".ol-table tr td span").removeClass("add-css2").addClass("add-css1");
    }
}

//------------------------------  事件  ----------------------------------

function ol_cancel() {
    location.reload();
}

function sel_couselist_change() {
    var id = $("#sel-couselist").val();
    swfObj.post_params.id = id;
    var swfu = new SWFUpload(swfObj);
}

function ol_upload_click() {
    $('#ol-upload').modal({
        show: true,
        keyboard: false,
        backdrop: false
    });
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

function btdelrecources_click(courseid, name) {
    zwobj.url = '../../Handler/ResourcesHandler.ashx?action=DelRecources';
    zwobj.data = { courseid: courseid, name: name, type: "flashPdf" };
    ajaxData();
}

function v_click(parameters) {
    location.href = "/views/OnlineTesting/OTFlash.aspx?filepath=" + parameters;
}

//----------------------------  ajax后台返回方法  ---------------------------------

function Ajax_GetCourseAndResource(data) {
    $(".ol-course-list").empty();
    var html = "";
    var len = data.Data.length;
    //控制select
    $("#sel-couselist").empty();
    $("#sel-couselist").append("<option value=''>—请选择—</option>");
    for (var i = 0; i < len; i++) {

        var len2 = data.Data[i].Resourceses.length;
        html += ' <div class="ol-course-list">' +
                '<h2>' + data.Data[i].Title + '</h2>' +
                ' <table class="ol-table"><tbody>';
        //控制select
        $("#sel-couselist").append("<option value='" + data.Data[i].Id + "'>" +
            data.Data[i].Title + "</option>");

        for (var j = 0; j < len2; j++) {
            if ((j % 3) == 0) {
                html += '<tr>' +
                    '<td><span><img src="../../images/flash.png" width="17px" height="17px" /><a title="' + data.Data[i].Resourceses[j].Name + '" onclick="v_click(\'' +
                    encodeURI(data.Data[i].Resourceses[j].FilePath) + '\')">' + data.Data[i].Resourceses[j].Name.substr(0, 18) +
                    '...</a><button name="libtn" class="btn btn-primary btn-xs" data-toggle="modal" onclick="btdelrecources_click(\'' +
                    data.Data[i].Resourceses[j].CourseId + '\',\'' + data.Data[i].Resourceses[j].Name + '\')">删除</button></span></td>';
            } else {
                html += '<td><span><img src="../../images/flash.png" width="17px" height="17px"  /><a title="' + data.Data[i].Resourceses[j].Name + '" onclick="v_click(\'' +
                    encodeURI(data.Data[i].Resourceses[j].FilePath) + '\')">' + data.Data[i].Resourceses[j].Name.substr(0, 18) +
                    '...</a><button name="libtn" class="btn btn-primary btn-xs" data-toggle="modal" onclick="btdelrecources_click(\'' +
                    data.Data[i].Resourceses[j].CourseId + '\',\'' + data.Data[i].Resourceses[j].Name + '\')">删除</button></span></td>';
            }
        }
        html += '</tbody></table></div>';

    }
    $(".ol-course-list").append(html);
}

function ajax_DelRecources(data) {
    location.reload();
}

//------------------------------  后台返回  ----------------------------------

function ajax_SaveUser(data) {
    location.reload();
}
