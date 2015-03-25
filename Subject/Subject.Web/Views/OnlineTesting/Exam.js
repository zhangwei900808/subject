//----------------------------  初始化  ---------------------------------
$(function () {
    $("#delbtn").popover();
    $("#title").popover();
    hidda();
    var id = getQueryString("id");
    getExamData(id);
});

//----------------------------  方法  ---------------------------------

function getExamData(id) {
    zwobj.url = '../../Handler/ExamHandler.ashx?action=GetExamByResourseId';
    zwobj.data = { id: id };
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

function btn_showda() {
    var text = $("#show_da").text();
    if (text == "显示答案") {
        $(".da").show();
        $("#show_da").text("隐藏答案");
    }
    if (text == "隐藏答案") {
        $(".da").hide();
        $("#show_da").text("显示答案");
    }
}
//--------------------------------------------------------------------------

function ajax_GetExamByResourseId(data) {
    if (data == null) {
        return;
    }
    var len = data.Data.length;
    if (len <= 0) {
        return;
    }
    var html = "";
    $("#table_select_exam").empty();
    html += '<tr>' +
    '<td align="left" height="30">' +
    '<p>一、单选题</p></td></tr>';
    for (var i = 0; i < len; i++) {
        html += '<tr><td align="left">' + (i + 1) + "." + data.Data[i].Title + '</td></tr>';
        html += '<tr>' +
        '<td align="left" height="30">' +
        '&nbsp;&nbsp;&nbsp;&nbsp;<input id="an[com_test_select][73]" type="radio">A&nbsp;' +
        '' + data.Data[i].A + '<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;<input id="an[com_test_select][73]" type="radio">B&nbsp;' +
        '' + data.Data[i].B + '<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;<input id="an[com_test_select][73]" type="radio">C&nbsp;' +
        '' + data.Data[i].C + '<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;<input id="an[com_test_select][73]" type="radio">D&nbsp;' +
        '' + data.Data[i].D + '<br>' +
        '</td>' +
        '</tr>';
        html += ' <tr class="da">' +
        '<td align="left" height="30">' +
        ' <span>&nbsp;参考答案是：' + data.Data[i].Answer + '</span>' +
        '</td>' +
        ' </tr>';
    }
    $("#table_select_exam").append(html);
}

//------------------------------  后台返回  ----------------------------------

function ajax_SaveUser(data) {
    location.reload();
}
