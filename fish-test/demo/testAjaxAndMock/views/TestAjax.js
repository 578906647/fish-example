define(['hbs!../templates/testAjax.hbs'], function(template) {
	var TestAjax = fish.View.extend({
		
		template: template,
		
		events: {
			'click #test-title': 'onClick'
		},
		
		/*
		 * 弹窗，页面中弹窗代码，会自动隐藏，当点击触发的时候，才会弹出。
		 */
		onClick: function(){
			
			var $popup = $('#test-popup')
			
			var options = {
						width: 682,
						height: 517,
						modal: true,
						draggable: true,
						content: $popup,
						autoResizable: true
					};
	
			var popup = fish.popup(options);

			
		},
		// className: 'menuArea',
		// translateY: 0,
		
		
		
		afterRender: function() {
			// var that = this
			
			// $.ajax(options);

		},
	
	});
		
		
	return TestAjax;
});