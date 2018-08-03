define([
	'hbs!../templates/indexView',
	'book/leftMenu/views/LeftMenu',
	'book/content/timeline/views/TimelineView'
	
], function(mainHtml, LeftMenu, TimelineView){
	
	var IndexView = fish.View.extend({
	    // 视图 Dom 元素
	    el: 'body',
	  	// 视图模板函数
	  	template: mainHtml,
	    // 填充模板数据
	    /*serialize: {
	    	""
	    },*/
	    // 视图事件处理
	    events: {
	    	'click #test1': 'onClick'
	    },
	
	    // 视图初始化
	    initialize: function () {
	  		console.log('enter initialize...');
            this.insertView('#leftMenu', new LeftMenu());
            this.insertView('#timeline', new TimelineView());
        
            
            // this.insertView('.right-content-main',new rightContentMain());
            // fish.on("popupLogin",this.popupLogin)

        },
	  	/* 
	   	* 视图渲染结束处理：
	   	* 	视图初始化之后，子视图已经插入到主视图，可以通过选择器来对渲染结束后的页面进行处理
	   	*/
	  	afterRender: function() {
	    	// do something
	    	console.log('enter afterRender...');
	    	
	    	/* 
	    	 * Widget控件使用：下拉列表
	    	 * 	但之前渲染的没了。events的点击事件处理也不管用了
	    	 */
	    	
	  	},
	  
	  
	  	// 视图移除处理
	  	cleanup: function() {
	    	// do something
	    	console.log('enter cleanup...');
	  	},
		
	
	  	onClick: function() {
	    	alert('click');
	  	}
	});
	
	return IndexView;
});