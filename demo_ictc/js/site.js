var mySwiper1 = new Swiper('.swiper1', {
	direction: 'horizontal',
	loop: true,
	pagination: '.swiper-pagination',
});
var mySwiper2 = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
});
//返回顶部
$(document).ready(function() {
	$(".icon-back-to-top").on('click', function(e) {
		$("html, body").animate({
			scrollTop: 0
		}, 500);
		//						$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); // 这行是 Opera 的补丁, 少了它 Opera 是直接用跳的而且画面闪烁 by willin
		//						$body.animate({
		//							scrollTop: 0
		//						}, 1000);
		return false; // 返回false可以避免在原链接后加上#
	});

	$(".icon-contact").on("click", function() {
		$(".contact-model").show();
	});
	$("#contact-model-close").on("click", function() {
		$(".contact-model").hide();
	});
});