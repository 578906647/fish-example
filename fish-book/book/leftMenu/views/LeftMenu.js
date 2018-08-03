define([
	'hbs!../templates/leftMenu',
	
], function(template){
	
	var IndexView = fish.View.extend({
	    
	    // 视图 Dom 元素
	    // el: 'body',
	  	
	  	// 视图模板函数
	  	template: template,
	    
	    // 填充模板数据
	    serialize: {
	    	
	    },
	    // 视图事件处理
	    events: {
	    	
	    },
	
	    // 视图初始化
	    initialize: function () {
	  		console.log('enter initialize LeftMenu...');
            
            
            

        },
	  	/* 
	   	* 视图渲染结束处理：
	   	* 	视图初始化之后，子视图已经插入到主视图，可以通过选择器来对渲染结束后的页面进行处理
	   	*/
	  	afterRender: function() {
	    	// do something
	    	console.log('enter afterRender LeftMenu...');
	    	
	    	/*
	    	 * expand
	    	 */
	    	
	    	
	    	$.getJSON('data/leftMenu.json', function(data){
	    			
	    			console.log("enter leftMenu.json");
	    			
	    			var list = data.list;
	    			var parentNode = $('#menu-list')
	    			$.each(list, function(index, opt) {
						
						
						parentNode.append("<li><a data-url='" + opt.menu_url + "' href='javascript:void(0)'><i></i>" + opt.menu_name + "</a></li>")
						if(opt.children && opt.children.length !== 0) {
					
							
							parentNode.append("<li><a data-url='" + opt.menu_url + "' href='javascript:void(0)'><i></i>" + opt.menu_name + "</a></li>")
							
							parentNode.children('li:last-child').append("<ul class='menu-list'>" +
								"<li class='list-title'><a href='javascript:void(0)'>" + opt.menu_name + "</a></li>" +
								"</ul>")
							// that.initMenu(opt.children, parentNode.children('li:last-child').children("ul"), false)
						} else {
							
							parentNode.append("<li><a data-url='" + opt.menu_url + "' href='#" + opt.menu_url + "'><i></i>" + opt.menu_name + "</a></li>")
							
						}
								
						
					})
	    		}
	    	
	    	);
	    	
	    	
	    	/*
	    	 * 
	    	 */
	    	
	    	
	    	
	    	/*
	    	 * pagesidebar
	    	 */
	    	$.getJSON('data/menus.json', function (data) {
		        
		        console.log("enter menus.json");
		        
		        $('#sidebarTest').pagesidebar({
		            data: data,
		            width:200,
		            openFirst: true,
		            
		            expand: function () {
		                $("#consolelog").html($("#consolelog").html() + "\n" + " expand");
		            },
		            slideUp: function () {
		                $("#consolelog").html($("#consolelog").html() + "\n" + " slideup");
		            },
		            slideDown: function () {
		                $("#consolelog").html($("#consolelog").html() + "\n" + " sllideDown");
		            },
		            
		            select: function (e,data) {
		                $("#consolelog").html($("#consolelog").html() + "\n" + " select： " + data);
		            }
		        });
		    });
	    		
		    
		

		
	
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