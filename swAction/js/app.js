function footer(){
	var html = '<div id="footer">QQ：176892990　Email:176892990@qq.com　本代码纯属个人娱乐，如果出错请使用者原地爆炸，谢谢配合！^_^</div>';
	document.write(html);
}
function header(h){
	var html  = '<header><span>SwAction<a href="'+h+'swAction.1.0.1/index.html">看看效果</a></span></header>';
		html += '<div id="banner">';
		
		html += '<img src="'+h+'images/logo.png" width="150">';
		html += '<h2>简洁、直观、迅速、简单。</h2>';
		html += '<a href="'+h+'swAction.1.0.1.zip">SwAction.1.0.1点击下载</a>';
		html += '<p>如果你的页面已经制作完成，或者正在打算制作，不想麻烦又想要一些动画效果，那好吧，来试试swAction！</p>';
		html += '</div>';
		html += '<div id="gg">SwAction.1.0.1，修正了默认隐藏和延迟动画的冲突！</div>';
	document.write(html);
}
