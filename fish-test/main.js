// 视图配置统一设置，避免视图定义都要书写 `manage: true`，才可以使用扩展视图功能

fish.View.configure({manage: true});

// 加载主视图，进行页面渲染初始化 'modules/main/views/IndexView', 

/* 
 * 加载测试视图
 * 
 * 要使用mock，还需要添加rule依赖
 */
require(['demo/main/views/IndexView'], function(IndexView) {
	
	var indexView = new IndexView();
	/*var testView = new TestView();*/
	
	indexView.render();
	// testView.render();
	
	
});