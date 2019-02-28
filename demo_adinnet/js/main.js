require.config({
    baseUrl: 'js/',
    paths: {
        modernizr: "lib/modernizr.custom",
        jquery: 'lib/jquery-1.11.1.min',
        bootstrap: 'lib/bootstrap.min',
        swiper: 'lib/swiper.min',
        nicescroll: 'lib/jquery.nicescroll.min',
        wow: 'lib/wow.min',
        backtotop: 'lib/jquery.toTop.min',
        numberjs: 'lib/number',
        common: 'common',
        addjs: "add-js",
        application: "application"
    },
    waitSeconds: 10,
    shim: { //模块依赖关系
        bootstrap: {
            deps: ['jquery']
        },
        swiper: {
            deps: ['jquery']
        },
        nicescroll: {
            deps: ['jquery']
        },
        backtotop: {
            deps: ['jquery']
        },
        numberjs: {
            deps: ['jquery']
        },
        common: {
            deps: ['jquery']
        },
        application: {
            deps: ['jquery']
        },
        addjs: {
            deps: ['jquery']
        }
    }
});
//浏览器判断
require(['modernizr'], function(modernizr) {
    !Modernizr.rgba ? window.location = "np.html" : '';
});
//配置页面加载模块
require(['jquery', 'bootstrap', 'wow', 'common', 'backtotop', 'application','addjs'], function($) {
    $(function() {
        init();

        //设置左右相同高度
        function setHeight(){
            //判断控制页面初始时左右的高度一致
            var hl = $(".left-text").outerHeight(); //获取左侧left层的高度
            var hr = $(".right-img").outerHeight(); //获取右侧right层的高度
            var mh = Math.max(hl,hr); //比较hl与hr的高度，并将最大值赋给变量mh
            //console.log(hr);
            //console.log(hl);
            $(".left-text").height(mh); //将left层高度设为最大高度mh
            $(".right-img").height(mh); //将right层高度设为最大高度
        }

        var _winWidth = $(window).width();
        //当窗口大于767px
        if( _winWidth > 767 && $('.left-text').length > 0 ){
           //初始化设置高度
            setHeight();

            //窗口缩放时重置
            $(window).resize(function(){
                setHeight();
            });
        }


    });
});

