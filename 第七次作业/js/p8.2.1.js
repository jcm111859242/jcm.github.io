$(".top .tab").click(function () {
    $(".top .tab").css("background-color", "#fff");
    $(this).css("background-color", "#c0c0c0");
    $(".page .bd").text($(this).index() + 1);
});