
//----------------------------  初始化  ---------------------------------
$(function () {
    $("#delbtn").popover();
    $("#title").popover();
    hidda();
    initkindeditor();

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

function initkindeditor() {
    var koption = {
        cssPath: '../../scripts/kindeditor-4.1.10/plugins/code/prettify.css',
        uploadJson: '../../scripts/kindeditor-4.1.10/asp.net/upload_json.ashx',
        fileManagerJson: '../../scripts/kindeditor-4.1.10/asp.net/file_manager_json.ashx',
        allowFileManager: true
    };
    KindEditor.ready(function (k) {
        var keditor = k.create('#ta-content', koption);
        prettyPrint();
        k('button[name=btn-posting]').click(function (e) {
            var title = $("#txt-title").val();
            if (title.length == 0) {
                alert("标题不能为空！");
                return false;
            }
            if (keditor.isEmpty()) {
                alert("请输入数据再提交！");
                return false;
            }
            zwobj.url = "../../Handler/PostsHandler.ashx?action=SavePosts";
            zwobj.data = { title: title, khtml: encodeURI(keditor.html()) };
            ajaxData();
            return true;
        });
        $("#ta-content").prev().removeAttr("style").css("width", "100%");
    });
}

//----------------------------  后台返回方法  ---------------------------------

function ajax_SavePosts() {
    alert("发布成功！");
    location.reload();
}

//------------------------------  事件  ----------------------------------

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