(function(){
addEvent(window,'load',function(){
	var len = $("#scrollUl li").length;
	function getHeight(){
		winWidth = document.documentElement.clientWidth;
		imgWidth = winWidth>=640?640:winWidth;
		$("#scrollUl img").css({"width":imgWidth+"px","height":"auto"});
		imgHeight = $("#scrollUl img").height();
		$("#slideShow").css({'max-height':320,'height':imgHeight,'width':imgWidth})
		$("#scrollUl").css({'max-height':320,'height':imgHeight,'width':imgWidth*len});
	};
	getHeight();
	fnSlider();
	addEvent(window,'resize',function(){
		getHeight();
	})
})
function onBridgeReady(){
     document.addEventListener('WeixinJSBridgeReady', function onBridgeReady()     
{  WeixinJSBridge.call('hideToolbar');
 });
}

if (typeof WeixinJSBridge == "undefined"){
    if( document.addEventListener ){
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    }else if (document.attachEvent){
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
}else{
    onBridgeReady();
}

var winWidth;
var imgHeight;
var imgWidth;
function fnSlider(){
	clearInterval(timer);
	var n=0;
	var ui=$('#scrollUl');
	$("#indicator li").each(function(i){
		$(this).mouseover(function() {
			ui.css("-webkit-transition","left 0.5s");
			ui.css("left",-imgWidth*i);
			$(this).addClass("active").siblings().removeClass("active");
			n=i
		})
	});
	var starX=0,starY=0,endX=0,endY=0,sleft=0,touch,numb=$("#indicator li").length-1,bol=false;
	ui[0].addEventListener('touchstart',function(event){
		clearInterval(timer);
		if(event.targetTouches.length == 1){
			ui.css("-webkit-transition-property","none");
			touch = event.targetTouches[0];
			starX=touch.pageX;
			starY=touch.pageY;
			sleft=parseInt(ui.css("left"));
		}
	});
	ui[0].addEventListener('touchmove',function(event){
		if(event.targetTouches.length == 1){
			touch = event.targetTouches[0];
			endX=touch.pageX;
			endY=touch.pageY;
			bol=true;
			if(Math.abs(endX-starX)>Math.abs(endY-starY)){
				event.preventDefault();
				if(endX<starX&&$("#indicator .active").next().length>0){
					ui.css("left",sleft+(endX-starX));
				}else if(endX>starX&&$("#indicator .active").prev().length>0){
					ui.css("left",sleft+(endX-starX));
				}else{
					bol=false;
				}
			}
		} 
	});
	ui[0].addEventListener('touchend',function(){
		if(bol){
			ui.css("-webkit-transition","left 0.5s");
			if(Math.abs(endX-starX)>50){
				endX>starX?fnPre():fnNext();
			}else{
				ui.css("left",-imgWidth*n);
			}
			bol=false;
		}
		timer = setInterval(function(){
			fnNext();	
		},5000);
	});
	var timer = setInterval(function(){
		fnNext();	
	},5000);
}
function fnNext(){
	if($("#indicator .active").next().length>0){
		$("#indicator .active").next().mouseover();
	}else{
		$("#indicator li:first").mouseover();	
	}
};
function fnPre() {
	if($("#indicator .active").prev().length>0){
		$("#indicator .active").prev().mouseover();
	}else{
		$("#indicator li:last").mouseover();	
	}
}
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);	
	}else{
		obj.attachEvent('on'+sEv,fn);
	}		
}	
})()