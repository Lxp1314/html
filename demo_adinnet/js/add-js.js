var _winWidth = $(window).width();
if(_winWidth > 768){
    $('.share-item-mobile').hover(function(){
        $(this).find('.tel-slider').toggleClass('active');
    });
}else{
   $('.share-item-mobile').attr('href','tel:400-021-8655');
}


//智能设备APP
var deviceSwiper = function(){
    if( $('.device-swiper').length > 0 ){
        require(['swiper'],function(){
            var mySwiper06 = new Swiper('.device-swiper',{
                pagination: '.pagi01',
                autoplay: 3000,
                paginationClickable: true,
                grabCursor: true,
                autoplayDisableOnInteraction: false,
                loop: true
            });
            var mySwiper07 = new Swiper('.device-swiper2',{
                pagination: '.pagi02',
                autoplay: 3000,
                paginationClickable: true,
                grabCursor: true,
                loop: true
            });
            var mySwiper08 = new Swiper('.device-swiper3',{
                pagination: '.pagi03',
                autoplay: 3000,
                paginationClickable: true,
                grabCursor: true,
                loop: true
            });
            var mySwiper09 = new Swiper('.device-swiper4',{
                pagination: '.pagi04',
                autoplay: 3000,
                paginationClickable: true,
                grabCursor: true,
                loop: true
            });
            var mySwiper10 = new Swiper('.device-swiper5',{
                pagination: '.pagi05',
                autoplay: 3000,
                paginationClickable: true,
                grabCursor: true,
                loop: true
            });
        });
    }
};
deviceSwiper();

//tab切换时重新调用swiper
if( $('.device-swiper').length > 0 ){
    $('.device .edu-tab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        deviceSwiper();
    });
}


//调整subnav在active时的位置
//var subA = $('.subnav').find('a');

// subA.click(function(){
//     var $this = $(this);
//     var $index = $this.index();
//     var selfWidth = $this.outerWidth(true);
//     var scrollL = $index * selfWidth;
//     var $winW = $(window).width();
//
//     $(this).addClass('active').siblings().removeClass('active');
//     if(scrollL > $winW){
//       //alert(scrollL);
//       $('.subnav').scrollLeft( scrollL );
//     }
//     console.log(scrollL);
// });
//
//
// subA.each(function(index,ele){
//    if($(this).hasClass('active')){
//        //console.log(index);
//        var selfWidth = $(this).outerWidth(true);
//        $('.subnav').scrollLeft( index * selfWidth );
//    }
// });
