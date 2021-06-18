$(()=>{
    let m=Math.random();
    if(m<0.25){
        $("main").css({
            "background-color":"#f7e2cd"
        })
        $(".content").addClass("content-image-one")
    }else if(0.25<=m&&m<0.5){
        $("main").css({
            "background-color":"#1f1a8c"
        })
        $(".content").addClass("content-image-two")
    }else if(0.5<=m&&m<0.75){
        $("main").css({
            "background-color":"#0066ff"
        })
        $(".content").addClass("content-image-three")
    }else if(0.75<=m){
        $("main").css({
            "background-color":"#0c3c6a"
        })
        $(".content").addClass("content-image-four")
    }
    change();
    $(".scan-code-content .img-box").on("mouseover",function(){
        $(".img").css({
            "transform":"translateX(-68px)"
        })
        $(".phone").css({
            "opacity":"1",
            "transition-delay":".4s"
        })
    })
    $(".scan-code-content .img-box").on("mouseout",function(){
        $(".img").css({
            "transform":"translateX(0px)"
        })
        $(".phone").css({
            "opacity":"0",
            "transition-delay":"0s"
        })
    })
    $(".login div").on("click",function(){
        $(".login div").find("a").removeClass("red");
        $(this).find("a").addClass("red");
        $(".input-content").children("div").css({
            "display":"none",
            "z-index":1
        })
        $(".input-content").children("div").eq($(this).index()).css({
            "display":"block",
            "z-index":2
        })
        $(".scan-code-content .img-box").mouseover();
    })
    $(".form-i").on("click",function(){
        $(".form-i").find(".a").css({
            "background-position":"0 0"
        })
        $(".form-i").find(".p").css({
            "background-position":"-48px 0"
        })
        $(this).find(".a").css({
            "background-position":"0 -48px"
        })
        $(this).find(".p").css({
            "background-position":"-48px -48px"
        })
    })
    $(".form-i").on("input",function(){
        if($(this).find("input").val()!=""){
            $(".form-i i").eq($(this).index()).css({
                "display":"block"
            })
        }else{
            $(".form-i i").eq($(this).index()).css({
                "display":"none"
            })
        }
    })
    $("input").on("blur",function(){
        $("input").parent().find(".p").css({
            "background-position":"-48px 0"
        })
        $("input").parent().find(".a").css({
            "background-position":"0 0"
        })
    })
    $(".one").on("mousedown",function(){
        $(".one-i").val("");
        $(this).css({
            "display":"none"
        })
    })
    $(".two").on("mousedown",function(){
        $(".two-i").val("");
        $(this).css({
            "display":"none"
        })
    })
    $(".one").on("mouseover",function(){
        $(this).css({
            "background-position":"-51px -143px"
        })
    })
    $(".one").on("mouseout",function(){
        $(this).css({
            "background-position":"-26px -143px"
        })
    })
    $(".two").on("mouseover",function(){
        $(this).css({
            "background-position":"-51px -143px"
        })
    })
    $(".two").on("mouseout",function(){
        $(this).css({
            "background-position":"-26px -143px"
        })
    })
    function change(){
        if($(".one-i").val()!=""){
            $(".one").css({
                "display":"block"
            })
        }else{
            $(".one").css({
                "display":"none"
            })
        }
        if($(".two-i").val()!=""){
            $(".two").css({
                "display":"block"
            })
        }else{
            $(".two").css({
                "display":"none"
            })
        }
    }
})