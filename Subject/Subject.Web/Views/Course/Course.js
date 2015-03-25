
//----------------------------  初始化  ---------------------------------
$(function () {
    var id = getQueryString("id");
    GetCourse(id);
    $("#delbtn").popover();
    $("#title").popover();
    FindByCourseId(id);
    UploadFile(id);
    hidda();
});

/**
* *定义swfupload配置文件对象
**/
var swfObj = {
    // Backend Settings
    upload_url: "../../Handler/ResourcesHandler.ashx?action=SaveFile",
    post_params: {
        id: "",
        type: "课程列表"
    },
    //upload_url: "upload.aspx",
    // File Upload Settings
    file_size_limit: "10240",
    file_types: "*.ppt;*.doc;*.docx;*.xls;",
    file_types_description: "*.ppt;*.doc;*.docx;*.xls;",
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
    button_text: '<span class="button">选择文件上传 <span class="buttonSmall">(最大 10Mb)</span></span>',
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

function hidda() {
    var lbl = $("#username").text();
    if (lbl.length != 0) {
        $("#regist-a").hide();
        $("#login-a").hide();
        $("#quit-a").show();
        $("#content3-ul li button").show();
    } else {
        $("#regist-a").show();
        $("#login-a").show();
        $("#quit-a").hide();
        $("#content3-ul li button").hide();
    }
    if (lbl != "欢迎你，admin") {
        $("#addcourse-a").hide();
        $("#delbtn").hide();
        $("#swfu_container").hide();
    } else {
        $("#addcourse-a").show();
        $("#swfu_container").show();
        $("#delbtn").show();
    }
}

function GetCourse(id) {
    zwobj.url = '../../Handler/CourseHandler.ashx?action=FindById';
    zwobj.data = { id: id };
    ajaxData();
}

function FindByCourseId(id) {
    zwobj.url = '../../Handler/CourseHandler.ashx?action=FindByCourseId';
    zwobj.data = { id: id };
    ajaxData();
}


//------------------------------  事件  ----------------------------------

function btdelrecources_click(courseid, resourcename) {
    zwobj.url = '../../Handler/ResourcesHandler.ashx?action=DelRecources';
    zwobj.data = { courseid: courseid, name: resourcename, type: "课程列表" };
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

function ajax_DelRecources(data) {
    location.reload();
}


function Ajax_FindById(data) {
    $("#content2 h2 strong").append(data.Data[0].Title);
    var time = eval("new " + data.Data[0].CreateDt.split('/')[1]).Format("yyyy-MM-dd HH:mm:ss");
    $("#time").append(time);
    $("#author").append(data.Data[0].Creater);
    $("#count").append(data.Data[0].ClickCount);
    $("#p2").append(data.Data[0].Contents);
}

function Ajax_FindByCourseId(data) {
    var name = $("#username").text();
    var len = data.Data.length;
    var html = "";
    for (var i = 0; i < len; i++) {
        if (name == "欢迎你，admin") {
            html += "<li><a href='" + data.Data[i].FilePath + "'> " + data.Data[i].Name +
            "</a> <button name='libtn' class='btn btn-primary btn-xs' data-toggle='modal' onclick='btdelrecources_click(\"" + data.Data[i].CourseId + "\",\"" + data.Data[i].Name + "\")'>删除</button></li>";
        } else {
            html += "<li><a href='" + data.Data[i].FilePath + "'> " + data.Data[i].Name +
            "</a></li>";
        }
    }
    $("#content3 ul").append(html);
}

//------------------------------  后台返回  ----------------------------------

function ajax_SaveUser(data) {
    location.reload();
}
