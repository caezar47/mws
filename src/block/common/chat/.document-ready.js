var res = 'noname-browser';
var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf('msie') != -1) res = 'is--msie';
if (userAgent.indexOf('trident') != -1) res = 'is--msie';
//if (userAgent.indexOf('konqueror') != -1) res = 'konqueror';
if (userAgent.indexOf('firefox') != -1) res = 'is--firefox';
//if (userAgent.indexOf('safari') != -1) res = 'safari';
//if (userAgent.indexOf('chrome') != -1) res = 'chrome';
//if (userAgent.indexOf('chromium') != -1) res = 'chromium';
//if (userAgent.indexOf('opera') != -1) res = 'opera';
//if (userAgent.indexOf('yabrowser') != -1) res = 'yabrowser';
//if (userAgent.indexOf('iphone') != -1) res = res + 'iphone';
//if (userAgent.indexOf('ipad') != -1) res = res + 'ipad';

$('.chat__block').addClass(res);

$(".chat__textarea").focusout(function(){
    var element = $(this);        
    if (!element.text().replace(" ", "").length) {
        element.empty();
    }
});