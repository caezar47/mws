
var container=$(".section__grid.is--page-catalog-card"),informer=$(".informer__panel");if(0<container.length){var height_w=$(window).height(),height_d=$(document).outerHeight(!0),offset=container.offset(),width=container.width();767<$(document).width()&&(height_w<height_d?(informer.addClass("is--catalog-fixed"),informer.css({left:offset.left,width:width}),informer.closest("body").addClass("is--informer-fixed")):informer.addClass("is--catalog-card"))}
var nav=$("[data-aside-nav]"),manager=$("[data-aside-manager]"),manager_h=manager.height();console.log(manager_h),1199<$(document).width()?nav.css({height:"calc(100% - "+manager_h+"px)"}):nav.css({height:"auto"});