$(function(){
    $(".metismenu li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".content div.rightCont").eq($(".metismenu li").index(this)).show().siblings().hide();
    });
});