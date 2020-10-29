var container = $('.section__grid.is--page-catalog-card');
var informer = $(".informer__panel");
//console.log(container.length);
if(container.length > 0) {	
	var height_w = $(window).height();
	var height_d = $(document).outerHeight(true);
	var offset = container.offset();
	var width = container.width();
	if($(document).width() > 767) {	
		if(height_d > height_w){
			informer.addClass('is--catalog-fixed');
			informer.css({"left": offset.left, "width": width});
			informer.closest('body').addClass('is--informer-fixed');
		} else {
			informer.addClass('is--catalog-card');
		}
	} 
} 