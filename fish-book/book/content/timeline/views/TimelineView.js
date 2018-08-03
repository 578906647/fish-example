define([
	'hbs!../templates/timelineView.hbs',
	
	
], function(mainHtml){
	
	var IndexView = fish.View.extend({
	    // 视图 Dom 元素
	    //el: 'body',
	  	// 视图模板函数
	  	template: mainHtml,
	    // 填充模板数据
	    /*serialize: {
	    	""
	    },*/
	    // 视图事件处理
	    events: {
	    	
	    },
	
	    // 视图初始化
	    initialize: function () {
	  		console.log('enter initialize...');
            // this.insertView('#leftMenu', new LeftMenu());
        
            
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
	    	$(document).ready(function () {
	          	var data = [
	              	{
	                "date":"Apr 2015",
	                "children":[
	                  	{
		                    "title":"Surprising Headline Right Here",
		                    "time":"8/4/2015",
		                    "content":[{"text":"Lorem Ipsum and such.","id":1}]
	                  	},
	                  	{
		                    "title":"Breaking into Spring!",
		                    "time":"10/4/2015",
		                    "content":"Hope the weather gets a bit nicer"
	                  	}
	                ]
	              	},
	              	{
	                "date":"Mar 2015",
	                "children":[
	                  {
	                    "title":"New Apple Device Release Date",
	                    "time":"2/5/2015",
	                    "content":"In memory of Steve Jobs."
	                  },
	                  {
	                    "title":"Some Important Date!",
	                    "time":"19/5/2015",
	                    "content":"Write up a quick summary of the event."
	                  }
	                ]
	              	}
	        	];
		        $('#timeline').timeline({
		           params:data,
		           orientation:'vertical', //horizontal
		           circClickfn:function(target,data){
		              console.log(target)
		              console.log(data)
		              console.log(arguments)
		           },
		           customClass: {   //定制样式
		              date   : "tldate",
		              time   : "tl-time", 
		              circ   : "tl-circ", 
		              panel  : "timeline-panel", 
		              header : "tl-heading", 
		              body   : "tl-body", 
		           },
		           customBody: "<p>{{text}}---{{id}}</p>",//定制content内容
		        }
		        );
		        $('#destroy').click(function(e) {
		            $('#timeline').timeline('destroy');
		        });
		        $('#build').click(function(e) {
		            $('#timeline').timeline({params:data,
		           orientation:'horizontal'});
		        });
	      	}); //end dom ready
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