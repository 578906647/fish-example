define([
	'hbs!../templates/test5View',
	
], function(template){
	
	var Test5View = fish.View.extend({
	    // 视图 Dom 元素
	    // el: 'body',
	  	// 视图模板函数
	  	template: template,
	    // 填充模板数据
	    /*serialize: {
	    	""
	    },*/
	    // 视图事件处理
	    events: {
	    	'click #button': 'onClick'
	    },
	
	    // 视图初始化
	    initialize: function () {
	  		console.log('enter test5 initialize...');
            
            
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
	    	
	    	$('#test5-panel-heading').hover(function(){
	    		$('#test5-panel-body').fadeIn(100);
	    	});
	    	
	    	$('#test5-panel-heading').mouseleave(function(){
	    		$('#test5-panel-body').hide();
	    	});
	    	/* 
	    	 * Widget控件使用：下拉列表
	    	 * 	但之前渲染的没了。events的点击事件处理也不管用了
	    	 */
	    	 /*$('.panel').panel({
		        collapsible: true,
		        slideUp: function () {
		            console.log('slideUp', this);
		        },
		        slideDown: function () {
		            console.log('slideDown', this);
		        },
		        beforeClose: function (e) {
		            console.log('beforeClose');
		            return fish.blockedConfirm(e, 'Are you sure to close this panel?');
		            //return false;// 阻止关闭
		        },
		        close: function () {
		            console.log('close');
		        }
		    });*/
		    /*$('#toggle').click(function() {
		        $('.panel').panel('toggle');
		    });
		    $('#expand').click(function() {
		        $('.panel').panel('expand');
		    });
		    $('#collapse').click(function() {
		        $('.panel').panel('collapse');
		    });*/
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
	
	return Test5View;
});