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
	rootId:"node0",
	currentSelectedId:""
}

function initTree(id) {
	$("#"+id).append(getTreeHtml());
	$('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
	$('.tree li.parent_li > span').on('click', treeNodeClick);

	$('.tree a.add').on('click', add);

	$('.tree a.edit').on('click', function(e) {

	});
}

function add() {
	var $p = $(this).parent();
	var id = $p.attr("id");
	var value = $p.data("value");
	var name = $p.text();
	
	tree.currentSelectedId = id;
	$("#ParentValue").val(value);
	
	var info = "【"+name+"】 添加子节点 ";
	$("#div_info").html(getInfo(info));
}

function save(){
	if(tree.currentSelectedId==""){
		alert("请选择树节点");
		return false;
	}
	
	var name = $("#Name").val().trim();
	if(name.length==0){
		alert("名称不能为空");
		return false;
	}
	var value = name+"val";
	var id = tree.idPrefix+value;
	var $p = $("#"+tree.currentSelectedId);
	var $ul = $p.find(' > ul');
	if($ul.length==0){
		$p.addClass('parent_li');
		var $span = $p.find(' > span');
		$span.find('> i').addClass(tree.icon.folderOpened).removeClass(tree.icon._file);
		$span.on('click', treeNodeClick);
		$p.append("<ul></ul>");
		$ul = $p.find(' > ul');
	}
	$ul.append(getLiHtml(id,name,value));
	$ul.find(' > li:last').find('a.add').on('click', add);
	return true;
}

function saveAndClear(){
	var result = save();
	if(result){
		clear();
	}
}

function getInfo(info){
	return '<strong>操作提示：</strong>'+info;
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


function getTreeHtml() {
	return '<ul >'+
		'<li id="'+tree.rootId+'" data-value="0">'+
		'<span><i class="glyphicon '+tree.icon.folderOpened+'"></i> 导航树</span>'+
		' <a href="#" class="add"><i class="glyphicon ' + tree.icon.add + '"></i></a>'+
		'</li>'+
		'</ul>';
}

function getLiHtml(id,name,value) {
	return str = '<li id="' + id + '" data-value="' + value + '">' +
		'<span><i class="glyphicon ' + tree.icon._file + '"></i> ' + name + '</span>' +
		' <a href="#" class="edit"><i class="glyphicon ' + tree.icon.edit + '"></i></a>' +
		' <a href="#" class="add"><i class="glyphicon ' + tree.icon.add + '"></i></a>'+
		'</li>';
}

function getAddHtml(id, value) {
	var str = '<li id="' + id + '" data-value="' + value + '">' +
		'<input type="text" class="form-control input-sm" placeholder="">' +
		'<button class="btn btn-default btn-sm" type="button">Ok</button>' +
		'</li>';
	return str;
}