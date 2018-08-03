define(['hbs!../templates/testView.hbs'], function(template) {

	var TestView = fish.View.extend({
		manage: true,
		// el: 'body',
		template: template,
		// 事件处理函数
		events: {
			'click .btn': 'onClick'
		},

		onClick: function() {
			// Console.log("点击事件处理函数");
			alert("点击事件处理函数");
			/*
			 * 改变label标签的值，用text()函数。
			 * 改变输入框中的值用val()函数。
			 */
			this.$('#username').text('用户名');
		}
	});

	return TestView;
});