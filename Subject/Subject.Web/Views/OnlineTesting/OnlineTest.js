//----------------------------  初始化  ---------------------------------
$(function () {
    $("#delbtn").popover();
    $("#title").popover();
    getCourse();
    hidda();
    $("#f-content").children().css("margin-top", "40px");
});

//----------------------------  方法  ---------------------------------

function getCourse() {
    zwobj.url = '../../Handler/CourseHandler.ashx?action=GetCourseAndResource';
    zwobj.data = { type: "exam" };
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
    location.href = "/views/OnlineTesting/Exam.aspx?id=" + parameters;
}

function ol_ok() {
    var val = $("#txt_examname").val();
    if (val.trim().length <= 0) {
        alert("请输入试卷名称！");
        return;
    }
    zwobj.url = '../../Handler/ResourcesHandler.ashx?action=SaveResourse';
    zwobj.data = { courseid: $("#sel-couselist").val(), name: val, type: "exam" };
    ajaxData();
    location.reload();
}

function btAddExam_click(id) {
    $('#exam').modal({
        show: true,
        keyboard: false,
        backdrop: false
    });
    $("#hidd_exam").val(id);
}

function exam_ok() {
    var id = $("#hidd_exam").val();
    var tm = $("#exam_tm").val();
    var a = $("#exam_A").val();
    var b = $("#exam_B").val();
    var c = $("#exam_C").val();
    var d = $("#exam_D").val();
    var answer = $("#exam_answer").val();
    if (tm.trim().length <= 0 ||
    answer.trim().length <= 0) {
        alert("请输入题目和答案！");
        return;
    }
    zwobj.url = '../../Handler/ExamHandler.ashx?action=SaveExam';
    zwobj.data = { resourseId: id, tm: tm, a: a, b: b, c: c, d: d, answer: answer };
    ajaxData();
    location.reload();
}

function btdelexam_click(id) {
    zwobj.url = '../../Handler/ExamHandler.ashx?action=DelExam';
    zwobj.data = { id: id };
    ajaxData();
    location.reload();
}

//----------------------------  ajax后台返回方法  ---------------------------------

function Ajax_GetCourseAndResource(data) {
    $(".ol-course-list").empty();
    var html = "";
    var len = data.Data.length;
    //控制select
    $("#sel-couselist").empty();
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
                    '<td><span><a title="' + data.Data[i].Resourceses[j].Name + '" onclick="v_click(\'' +
                    encodeURI(data.Data[i].Resourceses[j].Id) + '\')">' + data.Data[i].Resourceses[j].Name.substr(0, 18) +
                    '...</a><button name="libtn" class="btn btn-primary btn-xs" data-toggle="modal" onclick="btAddExam_click(\'' +
                    data.Data[i].Resourceses[j].Id + '\')">添加</button><button name="libtn" class="btn btn-primary btn-xs" data-toggle="modal" onclick="btdelexam_click(\'' +
                    data.Data[i].Resourceses[j].Id + '\')">删除</button></span></td>';
            } else {
                html += '<td><span><a title="' + data.Data[i].Resourceses[j].Name + '" onclick="v_click(\'' +
                    encodeURI(data.Data[i].Resourceses[j].Id) + '\')">' + data.Data[i].Resourceses[j].Name.substr(0, 18) +
                    '...</a><button name="libtn" class="btn btn-primary btn-xs" data-toggle="modal" onclick="btAddExam_click(\'' +
                    data.Data[i].Resourceses[j].Id + '\')">添加</button><button name="libtn" class="btn btn-primary btn-xs" data-toggle="modal" onclick="btdelexam_click(\'' +
                    data.Data[i].Resourceses[j].Id + '\')">删除</button></span></td>';
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
