var tree = {
	icon: {
		folderOpened: "glyphicon-folder-open",
		folderClosed: "glyphicon-folder-close",
		_file: "glyphicon-file",
		add: "glyphicon-plus",
		edit: "glyphicon-edit"
	},
	title: "导航树",
	idPrefix:"node",
	rootId:"node0"
}

function initTree(id) {
	$("#"+id).append(getTreeHtml());
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
		$span.find('> i').addClass(tree.icon.folderOpened).removeClass(tree.icon._file);
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
		$(this).attr('title', '打开').find(' > i').addClass(tree.icon.folderClosed).removeClass(tree.icon.folderOpened);
	} else {
		children.show('fast');
		$(this).attr('title', '关闭').find(' > i').addClass(tree.icon.folderOpened).removeClass(tree.icon.folderClosed);
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

function getTreeHtml() {
	return '<ul >'+
		'<li id="'+tree.rootId+'" data-value="0">'+
		'<span><i class="glyphicon '+tree.icon.folderOpened+'"></i> 导航树</span>'+
		' <a href="#" class="add"><i class="glyphicon ' + tree.icon.add + '"></i></a>'+
		'</li>'+
		'</ul>';
}

function getLiHtml(name) {
	return '<span><i class="glyphicon ' + tree.icon._file + '"></i> ' + name + '</span>' +
		' <a href="#" class="edit"><i class="glyphicon ' + tree.icon.edit + '"></i></a>' +
		' <a href="#" class="add"><i class="glyphicon ' + tree.icon.add + '"></i></a>';
}

function getAddHtml(id, value) {
	var str = '<li id="' + id + '" data-value="' + value + '">' +
		'<input type="text" class="form-control input-sm" placeholder="">' +
		'<button class="btn btn-default btn-sm" type="button">Ok</button>' +
		'</li>';
	return str;
}