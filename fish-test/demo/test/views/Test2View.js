define(['hbs!../templates/test2View.hbs'], function(template) {

	var Test2View = fish.View.extend({
		manage: true,
		// el: 'body',
		template: template,

		serialize: {
			title: '3. 加入弹窗的子视图'
		},
		// 事件处理函数
		events: {
			'click #btnOpen': 'onClick'
		},

		afterRender: function() {
			// do something
			console.log('enter afterRender...');

			/* 
			 * 
			 */

		},

		// 视图移除处理
		cleanup: function() {
			// do something
			console.log('enter cleanup...');
		},

		/* 
		 * 点击按钮(btnOpen)，触发弹窗事件
		 */
		onClick: function() {

			$.ajax('demo/test/templates/RequireAddDlgView.hbs').then(function(content) {

				var $popup = $(content);

				// 设置弹出框的属性（大小）style="width:530px; height: 857px;"
				var options = {
					width: 682,
					height: 517,
					modal: true,
					draggable: true,
					content: $popup,
					autoResizable: true
				};

				var popup = fish.popup(options);

				popup.result.then(function(message) {
					alert(message);
				});

				$popup.on('click', '#save-button', function() {
					popup.close('save button click');
				});
			});

		}
	});

	return Test2View;
});