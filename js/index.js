$(() => {
    //顶部广告
    //点击移出顶部广告
    $(".ad i").on("click", function () {
        $(".ad").remove();
    })
    //头部
    //左侧移入
    $("header .left").on("mouseover", function () {
        $(this).addClass("hover");
        $("header .left-hover").css({
            "display": "block"
        })
    })
    $("header .left").on("mouseout", function () {
        $(this).removeClass("hover");
        $("header .left-hover").css({
            "display": "none"
        })
    })
    $("header .left-hover").on("mouseover", function () {
        $("header .left").mouseover();
    })
    $("header .left-hover").on("mouseout", function () {
        $("header .left").mouseout();
    })
    //左侧移入end
    //右侧移入
    $(".hover-white").eq(0).on("mouseover", function () {
        $(this).addClass("hover");
        $(".hover-1").css({
            "display": "block"
        })
    })
    $(".hover-white").eq(0).on("mouseout", function () {
        $(this).removeClass("hover");
        $(".hover-1").css({
            "display": "none"
        })
    })
    $(".hover-1").on("mouseover", function () {
        $(".hover-white").eq(0).mouseover();
    })
    $(".hover-1").on("mouseout", function () {
        $(".hover-white").eq(0).mouseout();
    })
    //
    $(".hover-white").eq(1).on("mouseover", function () {
        $(this).addClass("hover");
        $(".hover-2").css({
            "display": "block"
        })
    })
    $(".hover-white").eq(1).on("mouseout", function () {
        $(this).removeClass("hover");
        $(".hover-2").css({
            "display": "none"
        })
    })
    $(".hover-2").on("mouseover", function () {
        $(".hover-white").eq(1).mouseover();
    })
    $(".hover-2").on("mouseout", function () {
        $(".hover-white").eq(1).mouseout();
    })
    //
    $(".hover-white").eq(2).on("mouseover", function () {
        $(this).addClass("hover");
        $(".hover-3").css({
            "display": "block"
        })
    })
    $(".hover-white").eq(2).on("mouseout", function () {
        $(this).removeClass("hover");
        $(".hover-3").css({
            "display": "none"
        })
    })
    $(".hover-3").on("mouseover", function () {
        $(".hover-white").eq(2).mouseover();
    })
    $(".hover-3").on("mouseout", function () {
        $(".hover-white").eq(2).mouseout();
    })
    //
    $(".hover-white").eq(3).on("mouseover", function () {
        $(this).addClass("hover");
        $(".hover-4").css({
            "display": "block"
        })
    })
    $(".hover-white").eq(3).on("mouseout", function () {
        $(this).removeClass("hover");
        $(".hover-4").css({
            "display": "none"
        })
    })
    $(".hover-4").on("mouseover", function () {
        $(".hover-white").eq(3).mouseover();
    })
    $(".hover-4").on("mouseout", function () {
        $(".hover-white").eq(3).mouseout();
    })
    //
    $(".JD-app").on("mouseover", function () {
        $(".extension").css({
            "display": "block"
        })
        $(".delta-2").css({
            "display": "block"
        })
    })
    $(".JD-app").on("mouseout", function () {
        $(".extension").css({
            "display": "none"
        })
        $(".delta-2").css({
            "display": "none"
        })
    })
    $(".extension").on("mouseover", function () {
        $(".extension").css({
            "display": "block"
        })
        $(".delta-2").css({
            "display": "block"
        })
    })
    $(".extension").on("mouseout", function () {
        $(".extension").css({
            "display": "none"
        })
        $(".delta-2").css({
            "display": "none"
        })
    })
    //右侧移入end
    //logo移入动画
    let flag = true;
    $(".logo-2").on("mouseover", function () {
        if(flag==true){
            flag=false;
            $(".logo-2").css({
                "background-image":"url(./image/logo/logo-img.gif"+"?m="+Math.random()+")"
            })
            // if (flag == true) {
                $(".logo-1").css({
                    "opacity": 0,
                    "transition": "all .1s",
                    "transition-delay": ".5s"
                })
                $(this).css({
                    "opacity": 1,
                    "transition": "all .1s",
                    "transition-delay": ".5s"
                })
                $(".logo-2 span").css({
                    "opacity": 1,
                    "transition-delay": "2s"
                })
            // }
            var s1=setTimeout(function(){
                
                $(".logo-1").css({
                    "opacity": 1,
                    "transition": "1s"
                })
                $(".logo-2").css({
                    "opacity": 0,
                    "transition": "1s",
                })
                $(".logo-2 span").css({
                    "opacity": 0,
                    "transition-delay": "0s"
                })
                // flag = true;
            },5000)
            var s2=setTimeout(function(){

                flag=true;
            },6000)
        }
        // flag = false;
    })
    //logo移入动画end
    //form-bottom定时切换
    let R_index = 0;
    setInterval(function () {
        R_index++;
        R_index %= 3;
        if (R_index == 0) {
            $(".form-bottom .red").html("美妆秒杀节");
        }
        if (R_index == 1) {
            $(".form-bottom .red").html("工业品五折");
        }
        if (R_index == 2) {
            $(".form-bottom .red").html("九九秒杀节");
        }
    }, 3000)
    //form-bottom定时切换end
    //input焦点状态及input-content定时切换
    let I_index = 0;
    let I_stop = null;
    I_auto();
    //
    $("input").on("blur", function () {
        $(this).css({
            "color": "rgb(51,51,51)"
        })
        I_auto();
    })
    $("input").on("input", function () {
        $(this).css({
            "color": "rgb(51,51,51)"
        })
    })
    $("input").on("focus", function () {
        $(this).css({
            "color": "#999"
        })
        if ($(this).val() != "") {
            $(this).trigger("input");
        }
        clearInterval(I_stop);
    })
    function I_auto() {
        I_stop = setInterval(function () {
            I_index++;
            I_index %= 4;
            if (I_index == 0) {
                $("input").prop("placeholder", "工博会工业品采购节199减100");
            }
            if (I_index == 1) {
                $("input").prop("placeholder", "美的电压力锅");
            }
            if (I_index == 2) {
                $("input").prop("placeholder", "洗烘一体洗衣机");
            }
            if (I_index == 3) {
                $("input").prop("placeholder", "澳柯玛冰箱");
            }
        }, 7000)
    }
    // input焦点状态及input-content定时切换end
    //隐形搜索栏
    $(document).on("scroll", function () {
        if ($(document).scrollTop() >= ($(".JD-seckill").offset().top - 90)) {
            $(".search-invisible").slideDown(500);
        }
        else {
            $(".search-invisible").css({
                "display": "none"
            })
        }
    })
    $(document).scroll();
    //隐形搜索栏end
    //main左侧轮播图
    let Ml_stop = null;
    let Ml_index = 0;
    Ml_change();
    Ml_auto();
    $(".center-left .left-left").on("click", function () {
        clearInterval(Ml_stop);
        Ml_index--;
        if (Ml_index < 0) {
            Ml_index = $("main .center-left img").length - 1;
        }
        Ml_change();
        Ml_auto();
    })
    $(".center-left .left-right").on("click", function () {
        clearInterval(Ml_stop);
        Ml_index++;
        if (Ml_index > $("main .center-left img").length - 1) {
            Ml_index = 0;
        }
        Ml_change();
        Ml_auto();
    })
    $("main .center-left img").on("mouseover", function () {
        clearInterval(Ml_stop);
    })
    $("main .center-left img").on("mouseout", function () {
        Ml_auto();
    })
    $("main .point li").on("mouseover", function () {
        Ml_index = $(this).index();
        Ml_change();
    })
    function Ml_changeImg() {
        $("main .center-left img").css({
            "opacity": "0"
        })
        $("main .center-left img").eq(Ml_index).css({
            "opacity": "1"
        })
    }
    function Ml_changePoint() {
        $(".point li").eq(Ml_index).addClass("li-hover");
        $(".point li").eq(Ml_index).siblings(".point li").removeClass("li-hover");
    }
    function Ml_change() {
        Ml_changeImg();
        Ml_changePoint();
    }
    function Ml_auto() {
        Ml_stop = setInterval(function () {
            Ml_index++;
            Ml_index %= $("main .center-left img").length;
            Ml_change();
        }, 3000)
    }
    //main左侧轮播图end
    //main右侧轮播图
    let Mr_stop = null;
    let Mr_index = 0;
    Mr_change();
    Mr_auto();
    $(".center-right .left-left").on("click", function () {
        clearInterval(Mr_stop);
        Mr_index--;
        if (Mr_index < 0) {
            Mr_index = $("main .ad-img").length - 1;
        }
        Mr_change();
        Mr_auto();
    })
    $(".center-right .left-right").on("click", function () {
        clearInterval(Mr_stop);
        Mr_index++;
        if (Mr_index > $("main .ad-img").length - 1) {
            Mr_index = 0;
        }
        Mr_change();
        Mr_auto();
    })
    $("main .ad-img").on("mouseover", function () {
        clearInterval(Mr_stop);
    })
    $("main .ad-img").on("mouseout", function () {
        Mr_auto();
    })
    function Mr_change() {
        $("main .ad-img").css({
            "opacity": "0",
            "z-index": 0
        })
        $("main .ad-img").eq(Mr_index).css({
            "opacity": "1",
            "z-index": 1
        })
    }
    function Mr_auto() {
        Mr_stop = setInterval(function () {
            Mr_index++;
            Mr_index %= $("main .ad-img").length;
            Mr_change();
        }, 8000)
    }
    $(".ad-img").on("mouseover", function () {
        $(".center-right .left-left").css({
            "opacity": 1
        })
        $(".center-right .left-right").css({
            "opacity": 1
        })
    })
    $(".ad-img").on("mouseout", function () {
        $(".center-right .left-left").css({
            "opacity": 0
        })
        $(".center-right .left-right").css({
            "opacity": 0
        })
    })
    $(".center-right .left-left").on("mouseover", function () {
        $(".center-right .left-left").css({
            "opacity": 1
        })
        $(".center-right .left-right").css({
            "opacity": 1
        })
    })
    $(".center-right .left-right").on("mouseover", function () {
        $(".center-right .left-left").css({
            "opacity": 1
        })
        $(".center-right .left-right").css({
            "opacity": 1
        })
    })
    //main轮播图end
    //秒杀
    setInterval(function () {
        let S_d = new Date();
        if (S_d.getHours() % 2 == 0) {
            if (S_d.getHours() < 10) {
                $("strong").html("0" + S_d.getHours() + ":00");
            } else {
                $("strong").html(S_d.getHours() + ":00");
            }
            $(".h").html("0" + 1);
        }
        else if (S_d.getHours() % 2 != 0) {
            if (S_d.getHours() < 10) {
                $("strong").html("0" + (S_d.getHours() - 1) + ":00");
            } else {
                $("strong").html((S_d.getHours() - 1) + ":00");
            }
            $(".h").html("0" + 0);
        }
        let S_m = 59 - S_d.getMinutes();
        let S_s = 59 - S_d.getSeconds();
        //
        if (59 - S_d.getMinutes() < 10) {
            $(".m").html("0" + S_m);
        } else {
            $(".m").html(S_m);
        }
        //
        if (59 - S_d.getSeconds() < 10) {
            $(".s").html("0" + S_s);
        } else {
            $(".s").html(S_s);
        }
    }, 100)
    //
    let roll_index = 1;
    let roll_flag = true;
    let roll_stop = null;
    $(".roll-content a").on("mouseover", function () {
        $(".roll-content .img").eq($(this).index()).css({
            "opacity": ".8"
        })
        $(".roll-content h6").eq($(this).index()).css({
            "color": "#e1251b"
        });
    })
    $(".roll-content a").on("mouseout", function () {
        $(".roll-content .img").eq($(this).index()).css({
            "opacity": "1"
        })
        $(".roll-content h6").eq($(this).index()).css({
            "color": "#333"
        });
    })
    //
    $(".seckill-roll .left-left").on("click", function () {
        if (roll_flag == true) {
            roll_flag = false;
            clearTimeout(roll_stop);
            roll_index--;
            if (roll_index == 0) {
                setTimeout(function () {
                    $(".roll").css({
                        "transform": "translateX(-" + 4000 + "px)",
                        "transition": "all 0s"
                    })
                    roll_index = 5;
                }, 500)
            }
            $(".roll").css({
                "transform": "translateX(-" + (800 * roll_index) + "px)",
                "transition": "all .5s cubic-bezier(.73,.66,.23,.78)"
            })
            roll_auto();
        }
    })
    $(".seckill-roll .left-right").on("click", function () {
        if (roll_flag == true) {
            roll_flag = false;
            clearTimeout(roll_stop);
            roll_index++;
            if (roll_index == 6) {
                setTimeout(function () {
                    $(".roll").css({
                        "transform": "translateX(-" + 800 + "px)",
                        "transition": "all 0s"
                    })
                    roll_index = 1;
                }, 500)
            }
            $(".roll").css({
                "transform": "translateX(-" + (800 * roll_index) + "px)",
                "transition": "all .5s cubic-bezier(.73,.66,.23,.78)"
            })
            roll_auto();
        }
    })
    function roll_auto() {
        roll_stop = setTimeout(function () {
            roll_flag = true;
        }, 500)
    }
    //
    let rotation_index = 0;
    let rotation_stop = null;
    rotation_change();
    rotation_auto();
    //
    $(".rotation-window li").on("mouseover", function () {
        clearInterval(rotation_stop);
        rotation_index = $(this).index();
        rotation_change();
    })
    $(".rotation-window li").on("mouseout", function () {
        rotation_auto();
    })
    //
    function rotation_changeImg() {
        $(".rotation").css({
            "transform": "translateX(-" + (180 * rotation_index) + "px)",
            "transition": "all .5s"
        })
    }
    function rotation_changePoint() {
        $(".rotation-window li").eq(rotation_index).css({
            "background-color": "#e1251b"
        })
        $(".rotation-window li").eq(rotation_index).siblings("li").css({
            "background-color": "#999"
        })
    }
    function rotation_change() {
        rotation_changeImg();
        rotation_changePoint();
    }
    function rotation_auto() {
        rotation_stop = setInterval(function () {
            rotation_index++;
            rotation_change();
            if (rotation_index == $(".rotation a").length - 1) {
                setTimeout(function () {
                    $('.rotation').css({
                        "transform": "translateX(0px)",
                        "transition": "all 0s"
                    })
                }, 500)
                rotation_index = 0;
            }
            rotation_changePoint();
        }, 3000)
    }
    //秒杀end
    //推广
    $(".special-offer .nav li").eq(0).css({
        "border-bottom": "2px solid rgb(225,37,27)"
    })
    $(".special-offer .nav li").find("a").eq(0).css({
        "color": "rgb(225,37,27)"
    })
    $(".special-offer .content").eq(0).css({
        "opacity": 1,
        "z-index": 2
    })
    $(".special-offer .nav li").on("mouseover", function () {
        $(this).css({
            "border-bottom": "2px solid rgb(225,37,27)"
        })
        $(this).siblings("li").css({
            "border-bottom": "2px solid transparent"
        })
        $(".special-offer .nav li").find("a").css({
            "color": "#999"
        })
        $(this).find("a").css({
            "color": "rgb(225,37,27)"
        })
        $(".special-offer .content").css({
            "opacity": 0,
            "z-index": 1
        })
        $(".special-offer .content").eq($(this).index()).css({
            "opacity": 1,
            "z-index": 2
        })
    })
    //推广end
    //走马灯
    let point_down = 0;
    let point_move = 0;
    let max_bar = $(".scroll-bar").width() - $(".scroll-point").width();
    let max_walking = $(".walking-content .content").width() - $(".walking-content").width();
    let walking_stop = null;
    //
    walking_auto();
    $(".scroll-point").on("mousedown", function (e) {
        //
        point_down = e.pageX - $(".scroll-point").offset().left;
        //
        $(document).on("mousemove", function (event) {
            //
            point_move = event.pageX - $(".scroll-bar").offset().left - point_down;
            //
            if (point_move < 0) {
                point_move = 0;
            }
            else if (point_move > max_bar) {
                point_move = max_bar;
            }
            $(".scroll-point").css({
                "transform": "translateX(" + point_move + "px)"
            })
            $(".walking-content .content").css({
                "transform": "translateX(-" + (point_move * max_walking / max_bar) + "px)"
            })
            //
            $(this).on("mouseup", function () {
                $(this).off("mousemove");
            })
            //
        })
    })
    $(".walking-lantern").on("mouseover", function () {
        clearInterval(walking_stop);
        $(".scroll-bar").css({
            "opacity": 1
        })
    })
    $(".walking-lantern").on("mouseout", function () {
        walking_auto();
        $(".scroll-bar").css({
            "opacity": 0
        })
    })
    function walking_run() {
        if (point_move > max_bar) {
            point_move = 0;
        }
        $(".scroll-point").css({
            "transform": "translateX(" + point_move + "px)"
        })
        $(".walking-content .content").css({
            "transform": "translateX(-" + (point_move * max_walking / max_bar) + "px)"
        })
    }
    function walking_auto() {
        walking_stop = setInterval(function () {
            point_move++;
            walking_run();
        }, 35)
    }
    //走马灯end
    //余项
    let new_index = 2;
    let new_stop = null;
    let new_flag = true;
    new_change();
    new_auto();
    $(".new .left-left").on("click", function () {
        if (new_flag == true) {
            new_flag = false;
            clearInterval(new_stop);
            new_index--;
            new_change();
            if (new_index == 1) {
                new_index = $(".new-box-content a").length - 3;
                setTimeout(function () {
                    $(".new-box-content").css({
                        "transform": "translateX(-" + ((new_index - 1) * 130 + 50) + "px)",
                        "transition": "all 0s"
                    })
                    $(".new-box-content a").eq(new_index).css({
                        "transform": "scaleX(1) scaleY(1)",
                        "transition": "all 0s"
                    })
                    $(".new-box-content .new-font").eq(new_index).css({
                        "opacity": 1,
                        "transition": "all 0s"
                    })
                    $(".new-box-content .new-title").eq(new_index).css({
                        "opacity": 1,
                        "transition": "all 0s"
                    })
                }, 400)
            }
            setTimeout(function () {
                new_flag = true;
                new_auto();
            }, 400)
        }
    })
    $(".new .left-right").on("click", function () {
        if (new_flag == true) {
            new_flag = false;
            clearInterval(new_stop);
            new_index++;
            new_change();
            setTimeout(function () {
                new_flag = true;
                new_auto();
            }, 400)
        }
    })
    function new_change() {
        $(".new-box-content").css({
            "transform": "translateX(-" + ((new_index - 1) * 130 + 50) + "px)",
            "transition": "all .4s"
        })
        $(".new-box-content a").css({
            "transform": "scaleX(.8) scaleY(.8)",
            "transition": "all .4s"
        })
        $(".new-box-content .new-font").css({
            "opacity": 0,
            "transition": "all .4s"
        })
        $(".new-box-content .new-title").css({
            "opacity": 0,
            "transition": "all .4s"
        })
        $(".new-box-content a").eq(new_index).css({
            "transform": "scaleX(1) scaleY(1)",
            "transition": "all .4s"
        })
        $(".new-box-content .new-font").eq(new_index).css({
            "opacity": 1,
            "transition": "all .4s"
        })
        $(".new-box-content .new-title").eq(new_index).css({
            "opacity": 1,
            "transition": "all .4s"
        })
        if (new_index >= $(".new-box-content a").length - 2) {
            new_index = 2;
            setTimeout(function () {
                $(".new-box-content").css({
                    "transform": "translateX(-" + ((new_index - 1) * 130 + 50) + "px)",
                    "transition": "all 0s"
                })
                $(".new-box-content a").eq(new_index).css({
                    "transform": "scaleX(1) scaleY(1)",
                    "transition": "all 0s"
                })
                $(".new-box-content .new-font").eq(new_index).css({
                    "opacity": 1,
                    "transition": "all 0s"
                })
                $(".new-box-content .new-title").eq(new_index).css({
                    "opacity": 1,
                    "transition": "all 0s"
                })
            }, 400)
        }
    }
    function new_auto() {
        new_stop = setInterval(function () {
            new_index++;
            new_change();
        }, 5000)
    }
    //
    $(".teb-body").eq(0).css({
        "display": "block",
        "z-index": 2
    })
    $(".tab-header a").eq(0).css({
        "background-color": "rgb(225,37,27)",
        "color": "white"
    })
    $(".tab-header a").on("mouseover", function () {
        $(".tab-header a").css({
            "color": "#999",
            "background-color": "#f6f6f6"
        })
        $(this).css({
            "background-color": "rgb(225,37,27)",
            "color": "white"
        })
        $(".teb-body").css({
            "display": "none",
            "z-index": 1
        })
        $(".teb-body").eq($(this).index()).css({
            "display": "block",
            "z-index": 2
        })
    })
    //余项end
    //为你推荐
    $(".recommend-teb li").on("click",function(){
        $(".recommend-teb li").find("p").removeClass("highlight-one");
        $(".recommend-teb li").find(".recommend-teb-content").removeClass("highlight-two");
        // $(this).find("p").addClass("highlight-one");
        // $(this).find(".recommend-teb-content").addClass("highlight-two");
        //
            $(".recommend-teb li").eq(($(this).index())+6).find("p").addClass("highlight-one");
            $(".recommend-teb li").eq(($(this).index())+6).find(".recommend-teb-content").addClass("highlight-two");
        //
            $(".recommend-teb li").eq(($(this).index())).find("p").addClass("highlight-one");
            $(".recommend-teb li").eq(($(this).index())).find(".recommend-teb-content").addClass("highlight-two");
        //
        $(".recommend-content").css({
            "opacity": 0,
            "z-index": 1
        })
        $(".recommend-content").eq($(this).index()).css({
            "opacity": 1,
            "z-index": 2
        })
        $(document).scrollTop($(".recommend").offset().top);
    })
    //为你推荐end
    //固定导航条&teb
    $(window).on("scroll", function () {
        if ($(document).scrollTop() >= ($(".JD-seckill").offset().top - 80)) {
            $(".fixed-nav").css({
                "position": "fixed",
                "top": "20px"
            })
            $(".fixed-nav .red-i").slideDown(200);
            $(".fixed-nav").css({
                    "transition": "transform .4s",
                    "transform": "translateY(55px)"
            })
        }
        else {
            $(".fixed-nav").css({
                "position": "absolute",
                "top": "752px",
                "transform": "translateY(0px)",
                "transition": "transform 0s",
            });
            $(".fixed-nav .red-i").slideUp(200);
            $(".xl").removeClass("red");
        }
        //
        if($(document).scrollTop() >= ($(".JD-seckill").offset().top - 80)&&$(document).scrollTop() < ($(".JD-extension").offset().top - 90)){
            $(".xl").removeClass("red");
            $(".xl").eq(0).addClass("red");
        }
        else{
            $(".xl").eq(0).removeClass("red");
        }
        //
        if($(document).scrollTop() >= ($(".JD-extension").offset().top - 80)&&$(document).scrollTop() < ($(".channel-square").offset().top - 90)){
            $(".xl").removeClass("red");
            $(".xl").eq(1).addClass("red");
        }
        else{
            $(".xl").eq(1).removeClass("red");
        }
        //
        if($(document).scrollTop() >= ($(".channel-square").offset().top - 80)&&$(document).scrollTop() < ($(".recommend").offset().top - 90)){
            $(".xl").removeClass("red");
            $(".xl").eq(2).addClass("red");
        }
        else{
            $(".xl").eq(2).removeClass("red");
        }
        //
        if($(document).scrollTop() >= ($(".recommend").offset().top - 80)){
            $(".xl").removeClass("red");
            $(".xl").eq(3).addClass("red");
        }
        //
        if($(document).scrollTop()>=($(".recommend").offset().top+100)){
            $(".fixed-recommend").slideDown();
            $(".fixed-nav").css({
                    "transition": "transform .2s",
                    "transform": "translateY(115px)"
            })
        }else{
            $(".fixed-recommend").css({
                "display":"none"
            })
        }
    })
    $(window).scroll();
    $(".fixed-nav .xl").on("click", function () {
        $("body,html").animate({
            scrollTop: ($(".x").eq($(this).index()).offset().top) - 70
        })
    })
    $(".fixed-nav .red-i").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        })
    })
    //固定导航条&teb end
})