define(['hbs!../templates/test3View.hbs'], function(template) {

	var Test2View = fish.View.extend({
		manage: true,
		// el: 'body',
		template: template,

		serialize: {
			title: '4. 测试各种Widget控件'
		},
		// 事件处理函数
		events: {
			'click #btnOpen': 'onClick'
		},

		/* 
		 * 点击按钮(btnOpen)，触发弹窗事件
		 */
		onClick: function() {

		},

		afterRender: function() {
			// 下拉列表控件初始化
			this.$('.js-gender').combobox({
				dataSource: [{
						name: 'Male'
					},
					{
						name: 'Female'
					},
					{
						name: 'Unknown'
					}
				]
			});

			// 日期控件初始化
			this.$('.js-birthday').datetimepicker();

			this.$("#accordion").accordion({
				active: false,
				multiple: false,
				animate: {},
				collapsible: true,
				event: "click",
				header: ".panel-heading",
				heightSytle: "content"
			});

		},
	});

	return Test2View;
});