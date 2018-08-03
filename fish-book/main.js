fish.View.configure({manage: true});

require(['book/main/views/IndexView'], function(IndexView){
	
	new IndexView().render();
})