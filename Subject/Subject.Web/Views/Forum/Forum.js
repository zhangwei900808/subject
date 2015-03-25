
//----------------------------  初始化  ---------------------------------
$(function () {
    GetPosts();
    $("#delbtn").popover();
    $("#title").popover();
    hidda();
});
var currentPage = 1, totalPages = 10;

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
        $(".table thead tr").append('<th style="width: 100px; text-align: center;">操作</th>');

    }
}

function GetPosts() {
    zwobj.url = "../../Handler/PostsHandler.ashx?action=GetPosts";
    zwobj.data = {};
    ajaxData();
}

function bootstrappage() {
    var options = {
        currentPage: currentPage,
        totalPages: totalPages,
        size: 'normal',
        itemContainerClass: function (type, page, current) {
            return (page === current) ? "active" : "pointer-cursor";
        },
        itemTexts: function (type, page, current) {
            switch (type) {
                case "first":
                    return "First";
                case "prev":
                    return "上一页";
                case "next":
                    return "下一页";
                case "last":
                    return "Last";
                case "page":
                    return page;
            }
        },
        shouldShowPage: function (type, page, current) {
            switch (type) {
                case "first":
                case "last":
                    return false;
                default:
                    return true;
            }
        },
        onPageClicked: function (e, originalEvent, type, page) {
            currentPage = page;
            zwobj.url = "../../Handler/PostsHandler.ashx?action=GetPosts";
            zwobj.data = { current: currentPage, total: 10 };
            ajaxData();
        }
    };
    $('#example').bootstrapPaginator(options);
}



//----------------------------  后台返回方法  ---------------------------------

function ajax_GetPosts(data) {
    var lbl = $("#username").text();
    $(".table tbody").empty();
    var html = "";
    var len = data.Data.length;
    for (var i = 0; i < len; i++) {
        html += "<tr>" +
            "<td><a href='../ForumInfo/ForumInfo.aspx?id=" + data.Data[i].Id + "'>" + data.Data[i].Title + "</a></td>" +
            "<td>" + eval("new " + data.Data[i].CreateDt.split('/')[1]).Format("yyyy-MM-dd") + "</td>" +
            "<td>" + data.Data[i].ReplyCount + "/" + data.Data[i].ViewCount + "</td>" +
            "<td>" + data.Data[i].UserName + "</td>";
        if (lbl == "欢迎你，admin") {
            html += '<td> <button type="button" class="btn btn-primary btn-xs" data-dismiss="modal" onclick="del_click(\'' + data.Data[i].Id + '\')">删除</button></td>';
        }
        html += "</tr>";
    }
    $(".table tbody").html(html);
    var total = parseInt(data.Other);
    totalPages = (total / 10) + 1;
    bootstrappage();
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

function del_click(id) {
    zwobj.url = '../../Handler/PostsHandler.ashx?action=DelPosts';
    zwobj.data = { id: id };
    ajaxData();
}

function ajax_DelPosts(data) {
    location.reload();
}

//------------------------------  后台返回  ----------------------------------

function ajax_SaveUser(data) {
    location.reload();
}
