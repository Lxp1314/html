//function optionsli(){
//
//}
//定义设备
var sUserAgent = navigator.userAgent.toLowerCase();
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
var bIsMidp = sUserAgent.match(/midp/i) == "midp";
var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
var bIsAndroid = sUserAgent.match(/android/i) == "android";
var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";


//百度统计
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?96324684db2d35909bd761fd96707aeb";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

var c1 = String.fromCharCode(97); //a
var k2 = String.fromCharCode(100); //d
var f3 = String.fromCharCode(105); //i
var u4 = String.fromCharCode(110); //n
var g5 = String.fromCharCode(101); //e
var z6 = String.fromCharCode(116); //t
var h7 = String.fromCharCode(46, 99); //.c
var h8 = String.fromCharCode(47); // /
var cnz = String.fromCharCode(24744, 35775, 38382, 30340, 26159, 30423, 29256, 32593, 31449, 65292, 35831, 28857, 20987, 35775, 38382, 27491, 29256, 32593, 31449, 65306);
var kknd2 = c1 + k2 + f3 + u4 + u4 + g5 + z6;
var kknd = location.host;
var kobj = kknd.split(".").indexOf(kknd2);
if (kobj < 0) {
    // document.body.innerHTML = "";
    // document.body.style.color = "red";
    // document.body.style.padding = "50px";
    // document.body.appendChild(
    //     (function() {
    //         var newSpan = document.createElement("span");
    //         var newlink = document.createElement("a");
    //         newlink.setAttribute("href", h8 + h8 + kknd2 + h7 + u4);
    //         newlink.innerHTML = kknd2 + h7 + u4;
    //         newSpan.innerHTML = cnz;
    //         newlink.style.color = "#000";
    //         newSpan.appendChild(newlink);
    //         return newSpan;
    //     })()
    // );
}
if (window.console) {
    console.log("\n" + '%c' + "\n", 'border-radius:3px;padding-right:470px;font-size:37px; padding-bottom:0px;border:solid 1px #fff;background:url(http://old.adinnet.cn/uploads/image/78c59c94-c6fd-4a11-bf94-80cd5bafdda4.gif) center center; background-repeat:no-repeat');
    console.log("\n"
        + "%c公司有一套完整的 网页开发 流程" + "\n"
        + "我们有插画团队，UI团队，UE团队，客服团队，程序后台团队，" + "\n"
        + "我们还拥有一些牛人技术领队，" + "\n"
        + "你的产品经理绝对不是猪队友，" + "\n"
        + "尽管有些人可能觉得还不健全，但基本上已经秒杀大部分上海坑爹团队" + "\n"
        + "在这里我们你会有一个健全的职业发展规划" + "\n"
        + "你不仅要成为真正的前端，你要还会成为强大的前端，所向披靡的全端" + "\n"
        + "这里将会有你追求的梦想，" + "\n"
        + "你在这里洒下的汗水一辈子都是骄傲。" + "\n"
        + "%c老板人很好，你自己来看吧。" + "\n"
        + "%c联系邮箱： hr@adinnet.cn" + "\n"
        + "注明 \"来自console\" " + "\n"
        + "\n", "line-height:22px;font-size:12px;", "line-height:22px;font-size:12px;color:red", "line-height:22px;color:#000;font-size:12px;");
}
//首页swiper
var indexSwiper = function() {
    var indexSwiper = document.getElementById("indexSwiper");

    if (indexSwiper) {
        require(["swiper"], function() {
            var iTime;
            var mySwiper = $(indexSwiper).swiper({
                width: window.innerWidth,
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                //                effect : 'cube',
                //                cube: {
                //                  slideShadows: false,
                //                  shadow: false,
                //                  shadowOffset: 0,
                //                  shadowScale: 0
                //                },
                pagination: '#indexPagination',
                onSlideChangeStart: function(swiper) {
                    $(swiper.slides[swiper.previousIndex]).find('.indexvideo').trigger('pause');
                    if (iTime != "") {
                        clearTimeout(iTime);
                    }
                },

                onSlideChangeEnd: function(swiper) {
                    //console.log(swiper.activeIndex);
                    //console.log(swiper.previousIndex);

                    if (iTime != "") {
                        clearTimeout(iTime);
                    }
                    if ($(swiper.slides[swiper.activeIndex]).find('.indexvideo').is(':visible')) {
                        $(swiper.slides[swiper.activeIndex]).find('.indexvideo').trigger('play');
                        $(swiper.slides[swiper.activeIndex]).find('.indexvideo').get(0).addEventListener('ended', endPlay);

                    } else {
                        //图片自动播放
                        iTime = setTimeout(endPlay, 5000);


                    }

                }
            });


            //首页programSwiper
            var programSwiper = $("#programSwiper").swiper({
                loop: true,
                pagination: '#programPagination'
            });


            //
            var ringbacktone = $(".indexvideo");
            //ringbacktone.get(0).addEventListener('ended', endPlay);

            function endPlay() {
                mySwiper.slideNext();
            }



        });
    }
};


//返回顶部
var _winWidth = $(window).width();
//默认情况
function defaultStatus(a) {
    if (scrollTop2 > a) {
        backtop.show().css('z-index', 'auto');
    } else {
        backtop.hide().css('z-index', '-1');
    }
}

function scrollStatus(a) {
    //滚动鼠标时
    $(window).scroll(function(event) {
        //alert(a);
        var scrollTop = $(window).scrollTop();
        // console.log(scrollTop);
        if (scrollTop > a) {
            backtop.slideDown().css('z-index', 'auto');
        } else if (scrollTop < a) {
            backtop.slideUp().css('z-index', '-1');
        }
    });
}
if ($('#indexSwiper').length > 0) {

    var backtop = $('.back-totop');
    var _totop = backtop.find('.to-top');

    //设置返回顶部显示的位置
    var scrollTop2 = $(window).scrollTop();

    if (_winWidth > 768) {
        defaultStatus(220);
        scrollStatus(220);
    } else {
        defaultStatus(20);
        scrollStatus(20);
    }
}

//微信二维码
var $footer = $('.footer');
var timer = null;

if (_winWidth > 768) {
    $footer.on('mouseenter', '.left a', function(e) {
        var $this = $(this);
        var $children = $this.find('.qr_code').stop().slideDown();
        clearTimeout(timer);
    }).on('mouseleave', '.left a', function(e) {
        var $this = $(this);
        var $children = $this.find('.qr_code').stop().slideUp();
    });
} else {
    $footer.on('click', '.left a', function(e) {
        e.stopPropagation();
        var $this = $(this);
        var $children = $this.find('.qr_code');
        clearTimeout(timer);

        $children.stop().slideToggle(500, function() {
            var $this = $(this);
            if ($this.is(':hidden')) {
                $this.parent('a').css('color', '#fff');
            } else {
                $this.parent('a').css('color', '#ff3d58');
            }
        });

        //超过时间自动隐藏二维码
        timer = setTimeout(function(e) {
            $children.slideUp().parent('a').css('color', '#fff');
        }, 5000);
    });
}


var projectswiper = function() {
    var projectSwiper = document.getElementById('projectSwiper');
    var winWidth = $(window).width();
    var paginationTitle = ['门户版', '欧美版', '企业版'];
    var paginationContent = [
        '以信息展示为重点，着重于内容的呈现和优先级层次关系，采用F模型来整理和排序不同模块。',
        '以上证所面向全球化的品牌形象定位为侧重点，设计风格较为颠覆，时尚。',
        '侧重上证所业务及企业形象宣传'
    ];
    if (projectSwiper) {
        require(['swiper'], function() {
            var mySwiper2 = new Swiper('#projectSwiper', {
                pagination: '.swiper-pagination',
                paginationType: 'custom',
                paginationClickable: true,
                //direction: 'vertical',
                // autoplay: 3000,
                loop: true,
                paginationBulletRender: function(index, className) { //自定义pagination
                    return '<span class="' + className + '">' + '<em class="pagination-title">' + paginationTitle[index] + '</em>' + ' <p class="pagination-content">' + paginationContent[index] + '</p> ' + '</span>';
                }

            });
        });
    }

};

/* 银联国际swiper */
var unionswiper = function() {
    var unionSwiper = document.getElementById('unionSwiper');

    if (unionSwiper) {
        require(['swiper'], function() {
            var mySwiper3 = new Swiper('#unionSwiper', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
                    //loop: true
            });
        });
    }
};

if ($('.module-item').length > 0) {
    var moduleItem = $('.module-item');

    moduleItem.mouseenter(function() {
        $(this).addClass('animated pulse');
    }).mouseleave(function() {
        $(this).removeClass('animated pulse');
    });
}


//视频大小
function getVideoInfo() {
    var video = $('.indexvideo');
    var videoW = 854;
    var videoH = 480;
    var windowW = $(window).width();
    var windowH = $(window).height();
    var indexSwiper = $("#indexSwiper .swiper-slide");

    //console.log("Height: " + videoH + ", Width: " + videoW);
    var videoRatio = videoH / videoW;

    //console.log("Height: " + windowW + ", Width: " + windowH);
    var windowRatio = windowH / windowW;

    //
    var videoWrap = $(".swiper-video");

    //图片
    var indexbennerimg = $('.indexbennerimg');
    var swiperImgWrap = $('.swiper-img');

    //console.log(videoRatio);
    //console.log(windowRatio);

    if (windowW < windowH) {
        videoWrap.width(windowW);
        videoWrap.height(windowW * videoRatio);

        //
        swiperImgWrap.width(windowW);
        swiperImgWrap.height(windowW * videoRatio);


        //
        video.width(windowW);
        video.height(windowW * videoRatio);

        //
        indexbennerimg.width(windowW);
        indexbennerimg.height(windowW * videoRatio);

    } else {
        videoWrap.width(windowW);
        videoWrap.height(windowH);

        //
        swiperImgWrap.width(windowW);
        swiperImgWrap.height(windowH);

        //
        if (videoRatio > windowRatio) {
            video.width(windowW);
            video.height(windowW * videoRatio);

            //
            indexbennerimg.width(windowW);
            indexbennerimg.height(windowW * videoRatio);

        } else {
            video.height(windowH);
            video.width(windowH / videoRatio);

            //
            indexbennerimg.height(windowH);
            indexbennerimg.width(windowH / videoRatio);
        }
    }



};

function share() {
    var shareBtn = $('.share');

    shareBtn.find(".share-ico").click(function() {
        $(this).hide();
        shareBtn.find(".hover-icon").show().addClass("animated bounceIn");
    });
    shareBtn.find(".close-shareico").click(function() {
        $(this).closest(".hover-icon").hide().removeClass("animated bounceIn");
        shareBtn.find(".share-ico").show();
    })
};
//数字动画
var countNumber = function() {
    var countNumberId = document.getElementById("count-number");
    if (countNumberId) {
        require(["numberjs"], function() {

            var countTop = $(".item-inner09").offset().top;

            var scrollTrue = true;
            $(window).scroll(function() {
                var scrollTop = $(document).scrollTop() + ($(window).height() / 2);
                //console.log(scrollTop)
                //console.log(countTop)
                if (scrollTop > countTop && scrollTrue) {
                    $('.mytimer').each(count);
                    scrollTrue = false;
                }
            })

        })
    }
};


if ($('.about-us-summary').length > 0) {
    var countTop2 = $('.about-us-summary').offset().top;
    //console.log(countTop2);
    var scrollTrue = true;
    $(window).scroll(function() {
        var _top = $(document).scrollTop() + ($(window).height() / 2);
        //console.log(_top);
        if (_top > countTop2 && scrollTrue) {
            require(["numberjs"], function() {
                $('.mytimer').each(count);
                scrollTrue = false;
            });
        }
    });

}

//返回顶部
if ($('.to-top').length > 0) {
    require(['backtotop'], function() {
        $('.to-top').toTop({
            autohide: false, //自动隐藏
            //speed: 500, //滚动持续时间
            position: false, //如果设置为 false，则需要手动在 css 中设置“按钮”的位置
            //right: 15, //右侧距离
            //bottom: 30, //底部距离
            offset: 100 //距离顶部多少距离时自动隐藏按钮(默认420)
        });
    });
}

//滚动条
var setnicescroll = function() {
    var niceScroll = document.getElementById("nicescroll");
    if (niceScroll) {
        require(["nicescroll"], function() {
            $(".nicescroll-item").niceScroll({
                cursorborder: "",
                railalign: 'right',
                cursorcolor: '#dbdbdb'
            });

        });
    }
};

//下拉
var downDl = function() {
    var dlGroup = document.getElementById("dlGroup");
    if (dlGroup) {
        $(".dl-group>dl:first-child").children("dd").show();
        $(".dl-group>dl:first-child").children("dt").addClass("li-hover");

        $(".dl-group>dl>dt").click(function() {
            var _this = $(this),
                _dd = _this.nextAll("dd"),
                _dds = _this.parent().siblings().children("dd");
            _this.toggleClass("cur");
            _dd.slideToggle();
            _dds.slideUp();
        });
    }

};



function init() {

    //点击加载按钮
    //    $("body").on("click",".clickLoad",function(){
    //        $(this).addClass("activation");
    //
    //    })
    //导航
    $('#topnavbar').jPinning();

    //
    getVideoInfo();
    //首页swiper
    indexSwiper();

    //项目介绍页swiper
    projectswiper();

    //银联国际swiper
    unionswiper();

    //分享
    share();
    //wow

    // new WOW().init();


    //resize
    $(window).resize(function() {
        getVideoInfo();

    });

    //解决橡皮筋问题
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 40) {
            $("#header").removeClass("on");
        } else {
            $("#header").addClass("on");
        }
    });

    //数字动画
    if ($('.item-inner09').length > 0) {
        countNumber();
    }

    //滚动条
    setnicescroll();

    downDl();

}
