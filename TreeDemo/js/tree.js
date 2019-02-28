function initTree() {
	$('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
	$('.tree li.parent_li > span').on('click', treeNodeClick);

	$('.tree a.add').on('click', addNodeClick);

	$('.tree a.edit').on('click', function(e) {

	});
}

function addNodeClick() {
	var $p = $(this).parent();
	var $ul = $p.find(' > ul');
	if ($ul.length == 0) {
		$p.addClass('parent_li');
		var $span = $p.find(' > span');
		$span.find('> i').addClass('glyphicon-minus-sign').removeClass('glyphicon-leaf');
		$span.on('click', treeNodeClick);
		$p.append("<ul></ul>");
		$ul = $p.find(' > ul');
	}
	
	$ul.append(getAddHtml());
	$ul.find(' > li:last').find('button').on('click', saveNodeClick);
}

function treeNodeClick(e) {
	var children = $(this).parent('li.parent_li').find(' > ul > li');
	if (children.is(':visible')) {
		children.hide('fast');
		$(this).attr('title', '打开').find(' > i').addClass('glyphicon-plus-sign').removeClass('glyphicon-minus-sign');
	} else {
		children.show('fast');
		$(this).attr('title', '关闭').find(' > i').addClass('glyphicon-minus-sign').removeClass('glyphicon-plus-sign');
	}
	e.stopPropagation();
}

function saveNodeClick(e) {
	var val = $(this).prev().val();
	if (val.length == 0) {
		alert('请输入名称');
		return;
	}
	var $p = $(this).parent();
	$p.html(getLiHtml(val));
	$p.find('a.add').on('click', addNodeClick);
}

function getLiHtml(name) {
	return '<span><i class="glyphicon glyphicon-leaf"></i> ' + name + '</span>' +
		' <a href="#" class="edit"><i class="glyphicon glyphicon-edit"></i></a>' +
		' <a href="#" class="add"><i class="glyphicon glyphicon-plus"></i></a>';
}

function getAddHtml() {
	var str = '<li>' +
		'<input type="text" class="form-control input-sm" placeholder="">' +
		'<button class="btn btn-default btn-sm" type="button">Ok</button>' +
		'</li>';
	return str;
}