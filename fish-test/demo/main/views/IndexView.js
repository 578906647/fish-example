define(function(){
	var IndexView = fish.View.extend({
	    // 视图 Dom 元素
	    el: 'body',
	  	// 视图模板函数
	  	template: fish.compile('Hello World'),	// TODO: 要插入的地方为"body"，要插入的内容为"hello world"
	});
	
	return IndexView;
});


// define([
// 	'hbs!../templates/indexView',
// 	'demo/test/views/TestView', 
// 	'demo/test/views/Test1View', 
// 	'demo/test/views/Test2View',
// 	'demo/test/views/Test3View',
// 	'demo/test/views/Test5View',
// 	'demo/testAjaxAndMock/views/TestAjax'
// ], function(mainHtml, TestView, Test1View, Test2View, Test3View, Test5View, TestAjax){
// 	
// 	var IndexView = fish.View.extend({
// 	    // 视图 Dom 元素
// 	    el: 'body',
// 	  	// 视图模板函数
// 	  	template: mainHtml,
// 	    // 填充模板数据
// 	    /*serialize: {
// 	    	""
// 	    },*/
// 	    // 视图事件处理
// 	    events: {
// 	    	'click #test1': 'onClick'
// 	    },
// 	
// 	    // 视图初始化
// 	    initialize: function () {
// 	  		console.log('enter initialize...');
//             this.insertView('#test1', new Test1View());
//             this.insertView('#test', new TestView());
//             this.insertView('#test2', new Test2View());
//             this.insertView('#test3', new Test3View());
//             this.insertView('#test5', new Test5View());
//             this.insertView('#testAjax', new TestAjax());
//             
//             // this.insertView('.right-content-main',new rightContentMain());
//             // fish.on("popupLogin",this.popupLogin)
// 
//         },
// 	  	/* 
// 	   	* 视图渲染结束处理：
// 	   	* 	视图初始化之后，子视图已经插入到主视图，可以通过选择器来对渲染结束后的页面进行处理
// 	   	*/
// 	  	afterRender: function() {
// 	    	// do something
// 	    	console.log('enter afterRender...');
// 	    	
// 	    	/* 
// 	    	 * Widget控件使用：下拉列表
// 	    	 * 	但之前渲染的没了。events的点击事件处理也不管用了
// 	    	 */
// 	    	$('.js-username').combobox({
// 			    value: 1,
// 			    dataSource: [
// 			        {name: 'Apple', value: 0},
// 			        {name: 'Banana', value: 1}
// 			    ]
// 			});
// 	  	},
// 	  
// 	  
// 	  	// 视图移除处理
// 	  	cleanup: function() {
// 	    	// do something
// 	    	console.log('enter cleanup...');
// 	  	},
// 		
// 	
// 	  	onClick: function() {
// 	    	alert('click');
// 	  	}
// 	});
// 	
// 	return IndexView;
// });