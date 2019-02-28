$(function() {
	var $container = $("#doughnut");
	var data = [{
			id: 1,
			title: "政府大数据业务领域",
			value: 16,
			color: "#38b7a5",
			content: "",
			data: [{
					id: 11,
					title: "信唐普华大数据平台",
					value: 9,
					color: "#68d8a5",
					content: "信唐普华大数据平台由数据交换中心、大数据融合中心、大数据分析中心、大数据应用中心和大数据管理中心组成支撑政府、经济与民生等业务应用。<br>平台中整合了来自于四大库以及各政府部门的信息资源，同时汇聚了企业的相关信息，随着建设的加速，数据的数量、种类都将快速增长，形成面向政企业务的大数据。<br>平台的业务量增长也将产生更多的企业用户行为数据和运维数据。政府可实时监控企业动态、获取的各项经济指数，预测发展趋势，挖掘潜在规律，并以此作为决策制定的依据。",
				},
				{
					id: 12,
					title: "平台特点",
					value: 5,
					color: "#68d8a5",
					content: "深度挖掘建模分析<br>基于整合的数据，结合研究经验抽象，采用机器学习/非结构化挖掘/统计分析等多种方法进行建模和模型验证，并通过加强学习进行模型优化。<br>大规模分布式计算<br>支持以Spark/Hadoop为主的分布式计算框架，将输入的数据集切分成块后并行处理、排序、再归集的整个过程，可处理 PB级别的数据。<br>海量数据存储/管理<br>实现海量数据的快速处理和存储，支持批处理、实时处理等业务需求，对数据处理，业务开发等方面进行优化。",
				},
				{
					id: 13,
					title: "行业应用",
					value: 17,
					color: "#68d8a5",
					content: "信唐普华专注于安全生产大数据、宏观经济大数据、舆情大数据等几方面的应用，为政府提供决策分析手段，打造出更加透明的政府、更加智慧的政府、更加负责任的政府。",
					data: [{
							id: 131,
							title: "安全生产大数据",
							value: 7,
							color: "#96c16b",
							content: "·企业安全生产 360 度画像<br>·安全生产预警分析<br>·安全生产舆情分析",
						},
						{
							id: 132,
							title: "宏观经济大数据",
							value: 7,
							color: "#d1db75",
							content: "依托各级政府电子政务网络平台，整合统计局、中宏、中经网等多种来源数据。利用政府内部信用数据、决策系统、经济文献系统、固定资产投资系统、价格监管平台等资源。实现纵向各级、横向各行业的政府宏观经济管理部门的互联互通的信息共享，提高宏观分析和决策的科学性。为政府及时、准确、全面地掌握宏观经济运行态势提供信息服务，增强政府调控宏观经济、驾驭市场变化、应对突发事件、总揽经济全局的能力。",
						},
						{
							id: 133,
							title: "其他领域",
							value: 4,
							color: "#d8cc75",
							content: "·政府社会管理大数据<br>·舆情大数据",
						}
					]
				}
			]
		},
		{
			id: 2,
			title: "智慧城市业务领域",
			value: 20,
			color: "#1172bc",
			content: "",
			data: [{
					id: 21,
					title: "智慧民政",
					value: 1,
					color: "#afd1dd",
					content: "智慧民政综合信息平台基于“解决民生、落实民权、维护民利”的业务职责，以满足民政各级部门日常业务需求为根本目标，以服务社会、服务公众、服务民政业务发展为宗旨，依托各类网络资源，通过信息资源共享和业务系统整合，打造覆盖民政基层全业务的应用平台，为建设人民满意的服务型民政提供强有力的技术支持。",
				},
				{
					id: 22,
					title: "智慧网信",
					value: 1,
					color: "#afd1dd",
					content: "2016年4月中共中央总书记、中央网络安全和信息化领导小组组长习近平强调按照创新、协调、绿色、开放、共享的发展理念推动我国经济社会发展，是当前和今后一个时期我国发展的总要求和大趋势，我国网信事业发展要适应这个大趋势，在践行新发展理念上先行一步，推进网络强国建设，让互联网更好地造福国家和人民。",
				},
				{
					id: 23,
					title: "智慧公安",
					value: 1,
					color: "#afd1dd",
					content: "智慧公安高度整合信息共享和高效联动应用两大环节，自带覆盖全面、触角灵敏、反应快捷的情报信息搜集技术，有效整合各类情报信息资源，实现跨区域、跨部门、跨警种信息关联、资源共享；对各类预警信息实行分级、分类发布，对苗头性、倾向性预警信息进行综合分析和动向预测，实现公安工作由事后反应型向事前预警型的转变。",
				},
				{
					id: 24,
					title: "智慧旅游",
					value: 1,
					color: "#afd1dd",
					content: "智慧旅游平台旨在提高城市旅游业各要素（旅行社、酒店、旅游客运、导游、购物等）运营和服务水平、拓展服务模式和手段、强化旅游管理监督能力、促进旅游服务内容、管理方式和运营模式的转变，全面提高城市旅游业竞争力。",
				},
				{
					id: 25,
					title: "智慧安监",
					value: 1,
					color: "#afd1dd",
					content: "信唐普华智慧安监平台采用先进的开发理念，结合物联网、云计算、大数据等技术，实现安全生产风险防控、综合监管、综合决策、公共服务、应急救援五大业务信息共享、数据互通，为安全生产信息化的长远发展打下坚实基础。",
				},
				{
					id: 26,
					title: "智慧民生",
					value: 1,
					color: "#afd1dd",
					content: "智慧民生平台将以市民对政务、公共事业和便民服务等信息消费需求为核心，依托云计算、移动互联网技术架构的城市级市民服务平台，采用云服务的方式聚合政府服务资源、社会公共服务资源和便民服务资源，最终实现城市公共信息服务平台，为整个城市打造一个安全可信的信息消费和信息惠民环境，促进新兴服务发展。",
				},
				{
					id: 27,
					title: "智慧城管",
					value: 1,
					color: "#afd1dd",
					content: "智慧城管平台遵循国家住建部行业标准，采用“9+1+N”的建设模式服务于城市管理工作，通过云计算、物联网、最新一代的无线通信、视频传输等多样化先进技术组合运用，采用网格化、精细化、长效化、智能化城市管理手段，打造“大城管”格局，最终实现从“数字城管”到“智慧城管”的全面升级。",
				}
			]
		}
	];
	var W = $container.width(),
		H = $container.height(),
		centerX = W / 2,
		centerY = H / 2,
		cos = Math.cos,
		sin = Math.sin,
		PI = Math.PI,
		imgPath = "img/diqiu.png",
		settings = {
			segmentShowStroke: true,
			segmentStrokeColor: "#fff",
			segmentStrokeWidth: 0,
			gapAngle: 0.01,
			hasGap: 1,
//			edgeOffset: 10, //offset from edge of $this
			edgeOffset: W / 2 * 0.5 / 3 * 0.5,
			levelTotal: 3,
			doughnutThickness: W / 2 * 0.5 / 3,
			fontColor: "#fff",
			fontSize: 18,
			beforeDraw: function() {},
			afterDrawed: function() {},
			onPathEnter: function(e, data) {},
			onPathLeave: function(e, data) {}
		};

	var $svg = $('<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H +
		'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>').appendTo($container);

	var $defs = $(document.createElementNS('', 'defs')).appendTo($svg);

	var $image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
	var a = Min([H, W]) - settings.edgeOffset * 4 - settings.doughnutThickness * settings.levelTotal * 2;
	$image.setAttribute("x", centerX - a / 2);
	$image.setAttribute("y", centerY - a / 2);

	$image.setAttribute("width", a);
	$image.setAttribute("height", a);
	$image.href.baseVal = "img/globe.png"; //关键一句，设置image的url图片，要用image.href.baseVal
	$svg.append($image);

	drawPath(data, 1, -PI / 2, PI * 2);

	function drawPath(data, level, startAngle, totalAngle) {

		var doughnutRadius = Min([H / 2, W / 2]) - settings.edgeOffset - settings.doughnutThickness * Math.abs(level - settings.levelTotal), //圆环最内环半径（包括最内圆环）
			cutoutRadius = doughnutRadius - settings.doughnutThickness, //圆环最内环半径（不包括最内圆环）
			textRadius = doughnutRadius - settings.doughnutThickness / 2 - 7; //圆环文字坐标

		var segmentTotal = 0;
		var startRadius = startAngle;
		for(var i = 0, len = data.length; i < len; i++) {
			segmentTotal += data[i].value;
		}

		for(var i = 0, len = data.length; i < len; i++) {
			if(level == 2) {
				startRadius += settings.gapAngle * settings.hasGap;
			}

			var cutAngle = 0; //当前段减去的角度
			if(level > 1 && settings.hasGap == 1) {
				cutAngle = settings.gapAngle * 2;
				if(level > 2 && i == len - 1) {
					cutAngle = 0;
				}
			}

			var segmentAngle = (data[i].value / segmentTotal) * (totalAngle) - cutAngle,
				endRadius = startRadius + segmentAngle,
				largeArc = ((endRadius - startRadius) % (totalAngle)) > PI ? 1 : 0,
				startX = centerX + cos(startRadius) * doughnutRadius,
				startY = centerY + sin(startRadius) * doughnutRadius,
				endX2 = centerX + cos(startRadius) * cutoutRadius,
				endY2 = centerY + sin(startRadius) * cutoutRadius,
				endX = centerX + cos(endRadius) * doughnutRadius,
				endY = centerY + sin(endRadius) * doughnutRadius,
				startX2 = centerX + cos(endRadius) * cutoutRadius,
				startY2 = centerY + sin(endRadius) * cutoutRadius,

				textStartX = centerX + cos(startRadius) * textRadius, //tX,tY,tX2,tY2： 绘制文字的path
				textStartY = centerY + sin(startRadius) * textRadius,
				textEndX = centerX + cos(endRadius) * textRadius,
				textEndY = centerY + sin(endRadius) * textRadius;
			
			if(!hasChild){
				//计算最外层的环 鼠标悬浮向外突出的点
				var upRadius = doughnutRadius + settings.doughnutThickness / 3;
				var upTextRadius = upRadius - settings.doughnutThickness / 3 - 7;
				var upStartX = centerX + cos(startRadius) * upRadius,
					upStartY = centerY + sin(startRadius) * upRadius,
					upEndX = centerX + cos(endRadius) * upRadius,
					upEndY = centerY + sin(endRadius) * upRadius,
					upTextStartX = centerX + cos(startRadius) * upTextRadius,
					upTextStartY = centerY + sin(startRadius) * upTextRadius,
					upTextEndX = centerX + cos(endRadius) * upTextRadius,
					upTextEndY = centerY + sin(endRadius) * upTextRadius;
				
			}

			var cmd = [
				'M', startX, startY, //Move pointer
				'A', doughnutRadius, doughnutRadius, 0, largeArc, 1, endX, endY, //Draw outer arc path
				'L', startX2, startY2, //Draw line path(this line connects outer and innner arc paths)
				'A', cutoutRadius, cutoutRadius, 0, largeArc, 0, endX2, endY2, //Draw inner arc path
				'Z' //Cloth path
			];
			
			var hasChild = typeof(data[i].data) != "undefined";
			
			var $g = $(document.createElementNS('http://www.w3.org/2000/svg', 'g')).attr({
				"id": "g" + data[i].id,
				"title" : data[i].title, 
				"content" : data[i].content,
				"has-child" : hasChild ? "true" : "false"
			}).appendTo($svg);
			
			if(!hasChild){
				$g.attr({
					"start-x" : startX,
					"start-y" : startY,
					"end-x" : endX,
					"end-y" : endY,
					"text-start-x" : textStartX,
					"text-start-y" : textStartY,
					"text-end-x" : textEndX,
					"text-end-y" : textEndY,
					
					"up-start-x" : upStartX,
					"up-start-y" : upStartY,
					"up-end-x" : upEndX,
					"up-end-y" : upEndY,
					"up-text-start-x" : upTextStartX,
					"up-text-start-y" : upTextStartY,
					"up-text-end-x" : upTextEndX,
					"up-text-end-y" : upTextEndY
				});
			}
			//$g.attr("test","aaa");

			//文字路径
			var textPath = [
				'M', textStartX, textStartY,
				'A', textRadius, textRadius, 0, largeArc, 1, textEndX, textEndY
			];

			$(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
				.attr({
					"id": "tp" + data[i].id,
					"d": textPath.join(' ')
				})
				.appendTo($defs);

			$(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
				.attr({
					"stroke-width": settings.segmentStrokeWidth,
					"stroke": settings.segmentStrokeColor,
					"fill": data[i].color,
					"data-order": i,
					"d": cmd.join(' '),
					"data-value": data[i].value
				})
				.appendTo($g);
			
			//文字
			var $text = $(document.createElementNS('http://www.w3.org/2000/svg', 'text'))
				.attr({
					"fill": settings.fontColor,
					"font-size": settings.fontSize
				}).appendTo($g);
			var $textPath = $(document.createElementNS('http://www.w3.org/2000/svg', 'textPath'));

			$textPath[0].setAttribute("text-anchor", "middle");
			$textPath[0].setAttribute("startOffset", "50%");
			$textPath[0].href.baseVal = "#tp" + data[i].id;
			//						$textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#tp"+data[i].id );
			$textPath.appendTo($text);

			$textPath.append(data[i].title);

			//$paths[i].attr("d", cmd.join(' '));
			$g.on("mouseenter", function() {
				//								$this = this;
				this.children[0].setAttribute("fill-opacity", "0.5");
				var hasChild = this.getAttribute("has-child");
				if(hasChild == "false"){
					var upStartX = this.getAttribute("up-start-x"),
						upStartY = this.getAttribute("up-start-y"),
						upEndX = this.getAttribute("up-end-x"),
						upEndY = this.getAttribute("up-end-y"),
						
						upTextStartX = this.getAttribute("up-text-start-x"),
						upTextStartY = this.getAttribute("up-text-start-y"),
						upTextEndX = this.getAttribute("up-text-end-x"),
						upTextEndY = this.getAttribute("up-text-end-y");
					
					var path = this.children[0];
					var d = path.getAttribute("d"), arrD = d.split(" ");
					arrD.splice(1, 2, upStartX, upStartY);
					arrD.splice(9, 2, upEndX, upEndY);
					path.setAttribute("d", arrD.join(" "));
					
//					var textPathId = this.id.replace('g','tp');
//					var $textPath = document.getElementById(textPathId);
//					var textD = $textPath.getAttribute("d"), arrTextD = textD.split(" ");
//					arrTextD.splice(1, 2, upTextStartX, upTextStartY);
//					arrTextD.splice(9, 2, upTextEndX, upTextEndY);
//					$textPath.setAttribute("d", arrTextD.join(" "));
				}
				
			}).on("mouseleave", function() {
				this.children[0].removeAttribute("fill-opacity");
				var hasChild = this.getAttribute("has-child");
				if(hasChild == "false"){
					var startX = this.getAttribute("start-x"),
						startY = this.getAttribute("start-y"),
						endX = this.getAttribute("end-x"),
						endY = this.getAttribute("end-y"),
						
						textStartX = this.getAttribute("text-start-x"),
						textStartY = this.getAttribute("text-start-y"),
						textEndX = this.getAttribute("text-end-x"),
						textEndY = this.getAttribute("text-end-y");
					
					var path = this.children[0];
					var d = path.getAttribute("d"), arrD = d.split(" ");
					var aa = '1';
					arrD.splice(1, 2, startX, startY);
					arrD.splice(9, 2, endX, endY);
					path.setAttribute("d", arrD.join(" "));
				}
			}).on("click", function() {
				
				$(".doughnut_title").text(this.getAttribute("title"));
				var content = this.getAttribute("content");
				$(".doughnut_content").text("");
				
				$(".doughnut_title").animatext({
				  	mode: "chars",
				  	speed: 100,
				  	effect: 'zoomInLeft',
					random: true,
//  				infinite: true,
    				onSuccess: function() {
//  					alert('1');
    					$(".doughnut_content").html(content);
    					$(".doughnut_content").animatext({
						  	mode: "chars",
						  	speed: 12,
//						  	effect: 'zoomInLeft',
//						  	random: true
						});
    				}
				});
				
				
//				alert(this.getAttribute("content"));
			});

			if(hasChild) {
//				$g.setAttribute("is-last","false");
				drawPath(data[i].data, level + 1, startRadius, segmentAngle);
			}else{
//				$g.setAttribute("is-last","true");
			}
			startRadius += segmentAngle;
			if(level == 2) {
				startRadius += settings.gapAngle * settings.hasGap;
			} else if(level > 2) {
				startRadius += settings.gapAngle * settings.hasGap * 2;
			}
		}
	}

	function Max(arr) {
		return Math.max.apply(null, arr);
	}

	function Min(arr) {
		return Math.min.apply(null, arr);
	}

	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
});