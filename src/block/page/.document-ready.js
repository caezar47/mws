$('[data-status="1"]').on('click', function(e) {
    model.active = 1;
    clearSvg()
	$("#rop").attr({"stroke":"url(#rop_linear)"});
	$("[data-rop-first]").attr({"fill":"#fff"});
	$("[data-rop-second]").attr({"fill":""});
	$("[data-rop-third]").attr({"fill":""});
	$("[data-rop-third-cost]").attr({"fill":""});

	$("#rop-arrow").attr({"fill":"url(#rop_arrow_linear)"});
	$("#rop-icon").attr({"fill":"#fff"});
	$("#rop-circle-top").attr({"stroke":"url(#rop_circle_top_linear)"});
	$("#rop-circle-bottom").attr({"stroke":"url(#rop_circle_bottom_linear)"});
	$("#rop-circle-left").attr({"stroke":"url(#rop_circle_left_linear)"});

	$("#spn").attr({"stroke":"url(#spn_linear)", "stroke-width":"8"});
	$("#spn-line").attr({"stroke":"url(#spn_line_linear)"});
	$("#spn-icon").attr({"fill":"url(#spn_linear)"});
	$("#spn-circle-right").attr({"stroke":"#E8852F"});
	$("[data-spn-first]").attr({"fill":"#333333"});
	$("[data-spn-second]").attr({"fill":""});

	$("#ovp").attr({"stroke":"url(#ovp_linear)", "stroke-width":"8"});
	$("#ovp-line").attr({"stroke":"url(#ovp_line_linear)"});
	$("#ovp-icon").attr({"fill":""});
	$(".ovp-marker").attr({"fill":"url(#ovp_linear)"});
	$("#ovp-circle-top-left").attr({"stroke":"#0DB4A7"});
	$("#ovp-circle-top-right").attr({"stroke":"#2492B5"});
	$("[data-ovp-first]").attr({"fill":"#333333"});
	$("[data-ovp-second]").attr({"fill":""});

	$("#lk").attr({"fill":""});
	$("#lk-icon").attr({"fill":""});
	$("[data-lk]").attr({"fill":""});

	$("#fon").attr({"fill":""});
	$("#fon-icon").attr({"fill":""});
	$("[data-fon]").attr({"fill":""});

	$("#deal").attr({"stroke":"url(#deal_linear)", "stroke-width":"8"});
	$("#deal-icon").attr({"fill":"url(#deal_icon_linear)"});
	$("#deal-icon-5").attr({"fill":""});
	$("#deal-circle").attr({"stroke":"#5774C6"});
	$("[data-deal-first]").attr({"fill":"#333333"});
	$("[data-deal-second]").attr({"fill":""});

	$("#rating").attr({"fill":"#B5B5BD"});
	$("[data-rating-first]").attr({"fill":"#fff"});
	$("[data-rating-second]").attr({"fill":""});

	$("#legal").attr({"fill":"#B5B5BD"});
	$("[data-legal-first]").attr({"fill":"#fff"});
	$("[data-legal-second]").attr({"fill":""});

	$("#mortgage").attr({"fill":"#B5B5BD"});
	$("[data-mortgage-first]").attr({"fill":"#fff"});
	$("[data-mortgage-second]").attr({"fill":""});
	
	$("#hrs").attr({"fill":"#B5B5BD"});
	$("[data-hrs-first]").attr({"fill":"#fff"});
	$("[data-hrs-second]").attr({"fill":""});
});
$('[data-status="2"]').on('click', function(e) {
    model.active = 2;
    clearSvg();
	$("#rop").attr({"stroke":"url(#rop_linear)"});
	$("[data-rop-first]").attr({"fill":"#fff"});
	$("[data-rop-second]").attr({"fill":""});
	$("[data-rop-third]").attr({"fill":""});
	$("[data-rop-third-cost]").attr({"fill":""});

	$("#rop-arrow").attr({"fill":"url(#rop_arrow_linear)"});
	$("#rop-icon").attr({"fill":"#fff"});
	$("#rop-circle-top").attr({"stroke":"url(#rop_circle_top_linear)"});
	$("#rop-circle-bottom").attr({"stroke":"url(#rop_circle_bottom_linear)"});
	$("#rop-circle-left").attr({"stroke":"url(#rop_circle_left_linear)"});

	$("#spn").attr({"stroke":"url(#spn_linear)", "stroke-width":"8"});
	$("#spn-line").attr({"stroke":"url(#spn_line_linear)"});
	$("#spn-icon").attr({"fill":"url(#spn_linear)"});
	$("#spn-circle-right").attr({"stroke":"#E8852F"});
	$("#spn-circle-left").attr({"stroke":"#F8BE44"});
	$("[data-spn-first]").attr({"fill":"#333333"});
	$("[data-spn-second]").attr({"fill":""});

	$("#lk").attr({"fill":""});
	$("#lk-icon").attr({"fill":""});
	$("[data-lk]").attr({"fill":""});

	$("#fon").attr({"fill":""});
	$("#fon-icon").attr({"fill":""});
	$("[data-fon]").attr({"fill":""});

	$("#ovp").attr({"stroke":"url(#ovp_linear)", "stroke-width":"8"});
	$("#ovp-line").attr({"stroke":"url(#ovp_line_linear)"});
	$("#ovp-icon").attr({"fill":""});
	$(".ovp-marker").attr({"fill":"url(#ovp_linear)"});
	$("#ovp-circle-top-left").attr({"stroke":"#0DB4A7"});
	$("#ovp-circle-top-right").attr({"stroke":"#2492B5"});
	$("[data-ovp-first]").attr({"fill":"#333333"});
	$("[data-ovp-second]").attr({"fill":""});

	$("#deal").attr({"stroke":"url(#deal_linear)", "stroke-width":"8"});
	$("#deal-icon").attr({"fill":"url(#deal_icon_linear)"});
	$("#deal-icon-5").attr({"fill":""});
	$("#deal-circle").attr({"stroke":"#5774C6"});
	$("[data-deal-first]").attr({"fill":"#333333"});
	$("[data-deal-second]").attr({"fill":""});

	$("#call").attr({"stroke":"url(#call_linear)", "stroke-width":"8"});
	$("#call-icon").attr({"fill":"url(#call_linear)"});
	$("#call-circle-top").attr({"stroke":"#F3AB3D"});
	$("#call-line-to-spn").attr({"stroke":"#FF8E26"});

	$("#rating").attr({"fill":"#B5B5BD"});
	$("[data-rating-first]").attr({"fill":"#fff"});
	$("[data-rating-second]").attr({"fill":""});

	$("#legal").attr({"fill":"#B5B5BD"});
	$("[data-legal-first]").attr({"fill":"#fff"});
	$("[data-legal-second]").attr({"fill":""});

	$("#mortgage").attr({"fill":"#B5B5BD"});
	$("[data-mortgage-first]").attr({"fill":"#fff"});
	$("[data-mortgage-second]").attr({"fill":""});
	
	$("#hrs").attr({"fill":"#B5B5BD"});
	$("[data-hrs-first]").attr({"fill":"#fff"});
	$("[data-hrs-second]").attr({"fill":""});
});
$('[data-status="3"]').on('click', function(e) {
    model.active = 3;
    clearSvg();
	$("#rop").attr({"stroke":"url(#rop_linear)"});
	$("[data-rop-second]").attr({"fill":"#fff"});
	$("[data-rop-first]").attr({"fill":""});
	$("[data-rop-third]").attr({"fill":""});
	$("[data-rop-third-cost]").attr({"fill":""});

	$("#rop-arrow").attr({"fill":"url(#rop_arrow_linear)"});
	$("#rop-icon").attr({"fill":"#fff"});
	$("#rop-circle-top").attr({"stroke":"url(#rop_circle_top_linear)"});
	$("#rop-circle-bottom").attr({"stroke":"url(#rop_circle_bottom_linear)"});
	$("#rop-circle-left").attr({"stroke":"url(#rop_circle_left_linear)"});

	$("#spn").attr({"stroke":"url(#spn_linear)", "stroke-width":"8"});
	$("#spn-line").attr({"stroke":"url(#spn_line_linear)"});
	$("#spn-icon").attr({"fill":"url(#spn_linear)"});
	$("#spn-circle-right").attr({"stroke":"#E8852F"});
	$("#spn-circle-left").attr({"stroke":"#F8BE44"});
	$("[data-spn-first]").attr({"fill":"#333333"});
	$("[data-spn-second]").attr({"fill":""});

	$("#ovp").attr({"stroke":"url(#ovp_linear)", "stroke-width":"8"});
	$("#ovp-line").attr({"stroke":"url(#ovp_line_linear)"});
	$("#ovp-line-to-manager").attr({"stroke":"url(#ovp_line_to_manager_linear)"});
	$("#ovp-icon").attr({"fill":""});
	$(".ovp-marker").attr({"fill":"url(#ovp_linear)"});
	$("#ovp-circle-top-left").attr({"stroke":"#0DB4A7"});
	$("#ovp-circle-top-right").attr({"stroke":"#2492B5"});
	$("#ovp-circle-bottom-left").attr({"stroke":"#19A3AE"});
	$("[data-ovp-first]").attr({"fill":"#333333"});
	$("[data-ovp-second]").attr({"fill":""});

	$("#deal").attr({"stroke":"url(#deal_linear)", "stroke-width":"8"});
	$("#deal-icon").attr({"fill":"url(#deal_icon_linear)"});
	$("#deal-icon-5").attr({"fill":""});
	$("#deal-circle").attr({"stroke":"#5774C6"});
	$("[data-deal-first]").attr({"fill":"#333333"});
	$("[data-deal-second]").attr({"fill":""});

	$("#call").attr({"stroke":"url(#call_linear)", "stroke-width":"8"});
	$("#call-icon").attr({"fill":"url(#call_linear)"});
	$("#call-circle-top").attr({"stroke":"#F3AB3D"});
	$("#call-circle-bottom").attr({"stroke":"#E8852F"});
	$("#call-line-to-spn").attr({"stroke":"#FF8E26"});
	$("#call-line-to-crm").attr({"stroke":"url(#call_line_to_crm_linear)"});

	$("#hr").attr({"stroke":"#D43F3A"});
	$("[data-hr-arrow]").attr({"fill":"#D43F3A"});
	$("#hr-icon").attr({"fill":"#D43F3A"});
	$("#hr-icon-5").attr({"fill":""});
	$("[data-hr-first]").attr({"fill":"#333333"});
	$("[data-hr-second]").attr({"fill":""});

	$("#lk").attr({"fill":""});
	$("#lk-icon").attr({"fill":""});
	$("[data-lk]").attr({"fill":""});

	$("#fon").attr({"fill":""});
	$("#fon-icon").attr({"fill":""});
	$("[data-fon]").attr({"fill":""});

	$("#manager").attr({"stroke":"url(#manager_linear)", "stroke-width":"8"});
	$("#manager-icon").attr({"fill":"url(#manager_linear)"});
	$("#manager-icon-5").attr({"fill":""});
	$("#manager-circle-top").attr({"stroke":"#FBC747"});
	$("#manager-circle-right").attr({"stroke":"#F2A93C"});
	$("#manager_line_to_crm").attr({"stroke":"url(#manager_line_to_crm_linear)"});
	$("[data-manager-first]").attr({"fill":"#333333"});
	$("[data-manager-second]").attr({"fill":""});

	$("#crm").attr({"stroke":"url(#crm_linear)", "stroke-width":"8"});
	$("#crm-circle-top").attr({"stroke":"#98CD41"});
	$("#crm-circle-bottom").attr({"stroke":"#4FD967"});
	$("#crm-circle-left").attr({"stroke":"#9ECC3F"});

	$("#rating").attr({"fill":"#B5B5BD"});
	$("[data-rating-first]").attr({"fill":"#fff"});
	$("[data-rating-second]").attr({"fill":""});

	$("#legal").attr({"fill":"#B5B5BD"});
	$("[data-legal-first]").attr({"fill":"#fff"});
	$("[data-legal-second]").attr({"fill":""});

	$("#mortgage").attr({"fill":"#B5B5BD"});
	$("[data-mortgage-first]").attr({"fill":"#fff"});
	$("[data-mortgage-second]").attr({"fill":""});
	
	$("#hrs").attr({"fill":"#B5B5BD"});
	$("[data-hrs-first]").attr({"fill":"#fff"});
	$("[data-hrs-second]").attr({"fill":""});
});
$('[data-status="4"]').on('click', function(e) {
	model.active = 4;
	clearSvg();
	$("#rop").attr({"stroke":"url(#rop_linear)"});
	$("[data-rop-second]").attr({"fill":"#fff"});
	$("[data-rop-first]").attr({"fill":""});
	$("[data-rop-third]").attr({"fill":""});
	$("[data-rop-third-cost]").attr({"fill":""});

	$("#rop-arrow").attr({"fill":"url(#rop_arrow_linear)"});
	$("#rop-icon").attr({"fill":"#fff"});
	$("#rop-circle-top").attr({"stroke":"url(#rop_circle_top_linear)"});
	$("#rop-circle-bottom").attr({"stroke":"url(#rop_circle_bottom_linear)"});
	$("#rop-circle-left").attr({"stroke":"url(#rop_circle_left_linear)"});

	$("#spn").attr({"stroke":"url(#spn_linear)", "stroke-width":"8"});
	$("#spn-line").attr({"stroke":"url(#spn_line_linear)"});
	$("#spn-icon").attr({"fill":"url(#spn_linear)"});
	$("#spn-circle-right").attr({"stroke":"#E8852F"});
	$("#spn-circle-left").attr({"stroke":"#F8BE44"});
	$("[data-spn-first]").attr({"fill":"#333333"});
	$("[data-spn-second]").attr({"fill":""});

	$("#ovp").attr({"stroke":"url(#ovp_linear)", "stroke-width":"8"});
	$("#ovp-line").attr({"stroke":"url(#ovp_line_linear)"});
	$("#ovp-line-to-manager").attr({"stroke":"url(#ovp_line_to_manager_linear)"});
	$("#ovp-icon").attr({"fill":""});
	$(".ovp-marker").attr({"fill":"url(#ovp_linear)"});
	$("#ovp-circle-top-left").attr({"stroke":"#0DB4A7"});
	$("#ovp-circle-top-right").attr({"stroke":"#2492B5"});
	$("#ovp-circle-bottom-left").attr({"stroke":"#19A3AE"});
	$("[data-ovp-first]").attr({"fill":"#333333"});
	$("[data-ovp-second]").attr({"fill":""});

	$("#deal").attr({"stroke":"url(#deal_linear)", "stroke-width":"8"});
	$("#deal-icon").attr({"fill":"url(#deal_icon_linear)"});
	$("#deal-icon-5").attr({"fill":""});
	$("#deal-circle").attr({"stroke":"#5774C6"});
	$("[data-deal-first]").attr({"fill":"#333333"});
	$("[data-deal-second]").attr({"fill":""});

	$("#call").attr({"stroke":"url(#call_linear)", "stroke-width":"8"});
	$("#call-icon").attr({"fill":"url(#call_linear)"});
	$("#call-circle-top").attr({"stroke":"#F3AB3D"});
	$("#call-circle-bottom").attr({"stroke":"#E8852F"});
	$("#call-line-to-spn").attr({"stroke":"#FF8E26"});
	$("#call-line-to-crm").attr({"stroke":"url(#call_line_to_crm_linear)"});

	$("#hr").attr({"stroke":"#D43F3A"});
	$("[data-hr-arrow]").attr({"fill":"#D43F3A"});
	$("#hr-icon").attr({"fill":"#D43F3A"});
	$("#hr-icon-5").attr({"fill":""});
	$("[data-hr-first]").attr({"fill":"#333333"});
	$("[data-hr-second]").attr({"fill":""});

	$("#manager").attr({"stroke":"url(#manager_linear)", "stroke-width":"8"});
	$("#manager-icon").attr({"fill":"url(#manager_linear)"});
	$("#manager-icon-5").attr({"fill":""});
	$("#manager-circle-top").attr({"stroke":"#FBC747"});
	$("#manager-circle-right").attr({"stroke":"#F2A93C"});
	$("#manager_line_to_crm").attr({"stroke":"url(#manager_line_to_crm_linear)"});
	$("[data-manager-first]").attr({"fill":"#333333"});
	$("[data-manager-second]").attr({"fill":""});

	$("#crm").attr({"stroke":"url(#crm_linear)", "stroke-width":"8"});
	$("#crm-circle-top").attr({"stroke":"#98CD41"});
	$("#crm-circle-bottom").attr({"stroke":"#4FD967"});
	$("#crm-circle-left").attr({"stroke":"#9ECC3F"});

	$("#rating").attr({"fill":"#D43F3A"});
	$("[data-rating-first]").attr({"fill":"#fff"});
	$("[data-rating-second]").attr({"fill":""});

	$("#lk").attr({"fill":""});
	$("#lk-icon").attr({"fill":""});
	$("[data-lk]").attr({"fill":""});

	$("#fon").attr({"fill":""});
	$("#fon-icon").attr({"fill":""});
	$("[data-fon]").attr({"fill":""});

	$("#legal").attr({"fill":"#F24F00"}); 
	$("[data-legal-first]").attr({"fill":"#fff"});
	$("[data-legal-second]").attr({"fill":""});

	$("#mortgage").attr({"fill":"#FF8E26"}); 
	$("[data-mortgage-first]").attr({"fill":"#fff"});
	$("[data-mortgage-second]").attr({"fill":""});

	$("#hrs").attr({"fill":"#FFB931"}); 
});
$('[data-status="5"]').on('click', function(e) {
    model.active = 5;
    clearSvg();
    //rop
	$("#rop").attr({"stroke":"url(#rop_linear)"});
	$("[data-rop-first]").attr({"fill":""});
	$("[data-rop-second]").attr({"fill":""});
	$("[data-rop-third]").attr({"fill":"#fff"});
	$("[data-rop-third-cost]").attr({"fill":"#F24F00"});
	$("#rop-icon").attr({"fill":""});
	$("#rop-arrow").attr({"fill":"url(#rop_arrow_linear)"});
	$("#rop-circle-top").attr({"stroke":"url(#rop_circle_top_linear)"});
	$("#rop-circle-bottom").attr({"stroke":"url(#rop_circle_bottom_linear)"});
	$("#rop-circle-left").attr({"stroke":"url(#rop_circle_left_linear)"});

	$("#spn").attr({"stroke":"url(#spn_linear)", "stroke-width":"8"});
	$("#spn-line").attr({"stroke":"url(#spn_line_linear)"});
	$("#spn-icon").attr({"fill":"url(#spn_linear)"});
	$("#spn-circle-right").attr({"stroke":"#E8852F"});
	$("#spn-circle-left").attr({"stroke":"#F8BE44"});
	$("[data-spn-first]").attr({"fill":""});
	$("[data-spn-second]").attr({"fill":"#333333"});

	$("#ovp").attr({"stroke":"url(#ovp_linear)", "stroke-width":"8"});
	$("#ovp-icon").attr({"fill":"url(#ovp_linear)"});
	$("#ovp-line").attr({"stroke":"url(#ovp_line_linear)"});
	$("#ovp-line-to-manager").attr({"stroke":"url(#ovp_line_to_manager_linear)"});
	$(".ovp-marker").attr({"fill":""});
	$("#ovp-circle-top-left").attr({"stroke":"#0DB4A7"});
	$("#ovp-circle-top-right").attr({"stroke":"#2492B5"});
	$("#ovp-circle-bottom-left").attr({"stroke":"#19A3AE"});
	$("[data-ovp-first]").attr({"fill":""});
	$("[data-ovp-second]").attr({"fill":"#333333"});

	$("#deal").attr({"stroke":"url(#deal_linear)", "stroke-width":"8"});
	$("#deal-icon").attr({"fill":""});
	$("#deal-icon-5").attr({"fill":"url(#deal_icon_linear)"});
	$("#deal-circle").attr({"stroke":"#5774C6"});
	$("[data-deal-first]").attr({"fill":""});
	$("[data-deal-second]").attr({"fill":"#333333"});

	$("#call").attr({"stroke":"url(#call_linear)", "stroke-width":"8"});
	$("#call-icon").attr({"fill":"url(#call_linear)"});
	$("#call-circle-top").attr({"stroke":"#F3AB3D"});
	$("#call-circle-bottom").attr({"stroke":"#E8852F"});
	$("#call-line-to-spn").attr({"stroke":"#FF8E26"});
	$("#call-line-to-crm").attr({"stroke":"url(#call_line_to_crm_linear)"});

	$("#hr").attr({"stroke":"#D43F3A"});
	$("[data-hr-arrow]").attr({"fill":"#D43F3A"});
	$("#hr-icon").attr({"fill":""});
	$("#hr-icon-5").attr({"fill":"#D43F3A"});
	$("[data-hr-first]").attr({"fill":""});
	$("[data-hr-second]").attr({"fill":"#333333"});

	$("#manager").attr({"stroke":"url(#manager_linear)", "stroke-width":"8"});
	$("#manager-icon").attr({"fill":""});
	$("#manager-icon-5").attr({"fill":"url(#manager_linear)"});
	$("#manager-circle-top").attr({"stroke":"#FBC747"});
	$("#manager-circle-right").attr({"stroke":"#F2A93C"});
	$("#manager_line_to_crm").attr({"stroke":"url(#manager_line_to_crm_linear)"});
	$("[data-manager-first]").attr({"fill":""});
	$("[data-manager-second]").attr({"fill":"#333333"});

	$("#crm").attr({"stroke":"url(#crm_linear)", "stroke-width":"8"});
	$("#crm-circle-top").attr({"stroke":"#98CD41"});
	$("#crm-circle-bottom").attr({"stroke":"#4FD967"});
	$("#crm-circle-left").attr({"stroke":"#9ECC3F"});

	$("#rating").attr({"fill":"#D43F3A"});
	$("#rating-icon").attr({"fill":""});
	$("#rating-icon-5").attr({"fill":"#fff"});
	$("[data-rating-first]").attr({"fill":""});
	$("[data-rating-second]").attr({"fill":"#fff"});

	$("#lk").attr({"fill":""});
	$("#lk-icon").attr({"fill":""});
	$("[data-lk]").attr({"fill":""});

	$("#fon").attr({"fill":""});
	$("#fon-icon").attr({"fill":""});
	$("[data-fon]").attr({"fill":""});

	$("#legal").attr({"fill":"#F24F00"}); 
	$("#legal-icon").attr({"fill":""});
	$("#legal-icon-5").attr({"fill":"#fff"});
	$("[data-legal-first]").attr({"fill":""});
	$("[data-legal-second]").attr({"fill":"#fff"});

	$("#mortgage").attr({"fill":"#FF8E26"}); 
	$("#mortgage-icon").attr({"fill":""});
	$("#mortgage-icon-5").attr({"fill":"#fff"});
	$("[data-mortgage-first]").attr({"fill":""});
	$("[data-mortgage-second]").attr({"fill":"#fff"});
	
	$("#hrs-wrap").attr({"display":"none"}); 
});
$('[data-status="6"]').on('click', function(e) {
    model.active = 6;
    clearSvg();
    //rop
	$("#rop").attr({"stroke":"url(#rop_linear)"});
	$("[data-rop-first]").attr({"fill":""});
	$("[data-rop-second]").attr({"fill":""});
	$("[data-rop-third]").attr({"fill":"#fff"});
	$("[data-rop-third-cost]").attr({"fill":"#F24F00"});
	$("#rop-icon").attr({"fill":""});
	$("#rop-arrow").attr({"fill":"url(#rop_arrow_linear)"});
	$("#rop-circle-top").attr({"stroke":"url(#rop_circle_top_linear)"});
	$("#rop-circle-bottom").attr({"stroke":"url(#rop_circle_bottom_linear)"});
	$("#rop-circle-left").attr({"stroke":"url(#rop_circle_left_linear)"});

	$("#spn").attr({"stroke":"url(#spn_linear)", "stroke-width":"8"});
	$("#spn-line").attr({"stroke":"url(#spn_line_linear)"});
	$("#spn-icon").attr({"fill":"url(#spn_linear)"});
	$("#spn-circle-right").attr({"stroke":"#E8852F"});
	$("#spn-circle-left").attr({"stroke":"#F8BE44"});
	$("[data-spn-first]").attr({"fill":""});
	$("[data-spn-second]").attr({"fill":"#333333"});

	$("#ovp").attr({"stroke":"url(#ovp_linear)", "stroke-width":"8"});
	$("#ovp-icon").attr({"fill":"url(#ovp_linear)"});
	$("#ovp-line").attr({"stroke":"url(#ovp_line_linear)"});
	$("#ovp-line-to-manager").attr({"stroke":"url(#ovp_line_to_manager_linear)"});
	$(".ovp-marker").attr({"fill":""});
	$("#ovp-circle-top-left").attr({"stroke":"#0DB4A7"});
	$("#ovp-circle-top-right").attr({"stroke":"#2492B5"});
	$("#ovp-circle-bottom-left").attr({"stroke":"#19A3AE"});
	$("[data-ovp-first]").attr({"fill":""});
	$("[data-ovp-second]").attr({"fill":"#333333"});

	$("#deal").attr({"stroke":"url(#deal_linear)", "stroke-width":"8"});
	$("#deal-icon").attr({"fill":""});
	$("#deal-icon-5").attr({"fill":"url(#deal_icon_linear)"});
	$("#deal-circle").attr({"stroke":"#5774C6"});
	$("[data-deal-first]").attr({"fill":""});
	$("[data-deal-second]").attr({"fill":"#333333"});

	$("#call").attr({"stroke":"url(#call_linear)", "stroke-width":"8"});
	$("#call-icon").attr({"fill":"url(#call_linear)"});
	$("#call-circle-top").attr({"stroke":"#F3AB3D"});
	$("#call-circle-bottom").attr({"stroke":"#E8852F"});
	$("#call-line-to-spn").attr({"stroke":"#FF8E26"});
	$("#call-line-to-crm").attr({"stroke":"url(#call_line_to_crm_linear)"});

	$("#hr").attr({"stroke":"#D43F3A"});
	$("[data-hr-arrow]").attr({"fill":"#D43F3A"});
	$("#hr-icon").attr({"fill":""});
	$("#hr-icon-5").attr({"fill":"#D43F3A"});
	$("[data-hr-first]").attr({"fill":""});
	$("[data-hr-second]").attr({"fill":"#333333"});

	$("#manager").attr({"stroke":"url(#manager_linear)", "stroke-width":"8"});
	$("#manager-icon").attr({"fill":""});
	$("#manager-icon-5").attr({"fill":"url(#manager_linear)"});
	$("#manager-circle-top").attr({"stroke":"#FBC747"});
	$("#manager-circle-right").attr({"stroke":"#F2A93C"});
	$("#manager_line_to_crm").attr({"stroke":"url(#manager_line_to_crm_linear)"});
	$("[data-manager-first]").attr({"fill":""});
	$("[data-manager-second]").attr({"fill":"#333333"});

	$("#crm").attr({"stroke":"url(#crm_linear)", "stroke-width":"8"});
	$("#crm-circle-top").attr({"stroke":"#98CD41"});
	$("#crm-circle-bottom").attr({"stroke":"#4FD967"});
	$("#crm-circle-left").attr({"stroke":"#9ECC3F"});

	$("#rating").attr({"fill":"#D43F3A"});
	$("#rating-icon").attr({"fill":""});
	$("#rating-icon-5").attr({"fill":"#fff"});
	$("[data-rating-first]").attr({"fill":""});
	$("[data-rating-second]").attr({"fill":"#fff"});

	$("#lk").attr({"fill":"#8ED433"});
	$("#lk-icon").attr({"fill":"#fff"});
	$("[data-lk]").attr({"fill":"#fff"});

	$("#fon").attr({"fill":"#E3C41D"});
	$("#fon-icon").attr({"fill":"#fff"});
	$("[data-fon]").attr({"fill":"#fff"});

	$("#legal").attr({"fill":"#F24F00"}); 
	$("#legal-icon").attr({"fill":""});
	$("#legal-icon-5").attr({"fill":"#fff"});
	$("[data-legal-first]").attr({"fill":""});
	$("[data-legal-second]").attr({"fill":"#fff"});

	$("#mortgage").attr({"fill":"#FF8E26"}); 
	$("#mortgage-icon").attr({"fill":""});
	$("#mortgage-icon-5").attr({"fill":"#fff"});
	$("[data-mortgage-first]").attr({"fill":""});
	$("[data-mortgage-second]").attr({"fill":"#fff"});
	
	$("#hrs-wrap").attr({"display":"none"}); 
});


var model = {
	active:0,
};

var serviceSvg = $(document).find('svg.content-block__svg').clone();

function clearSvg(){
    $(document).find('div.content-block__svg-wrap').empty();
    $(document).find('div.content-block__svg-wrap').append(serviceSvg.clone());
}

$(document).on('click','.tabs__link.is--services-model', function(){
	$('.tabs__link.is--services-model').each(function(index, item){
		$(item).removeClass('is--active');
	});
	$(this).addClass('is--active');
});


$(document).on('click','[data-tooltip-close]',function(e) {
	$('[data-tooltip]').attr({"style":"opacity: 0; visibility: hidden;"});
	$('[data-tooltip-bg]').removeAttr("style");	
});

$(document).on('click', "[data-tooltip-block]",function() {
	$('[data-tooltip]').attr({"style":"opacity: 0; visibility: hidden;"});
	$('[data-tooltip-bg]').removeAttr("style");
	var toggle_tooltip = $(this).data("tooltip-block");
	if($(toggle_tooltip + "_" + model.active).length){
        $(toggle_tooltip + "_" + model.active).attr({"style":"opacity: 1; visibility: visible"});
        $(this).siblings('[data-tooltip-bg]').attr({"style":"stroke-width:8; stroke:#FF8E26"});
	}else{
        $(toggle_tooltip).attr({"style":"opacity: 1; visibility: visible"});
        $(this).siblings('[data-tooltip-bg]').attr({"style":"stroke-width:8; stroke:#FF8E26"});
	}
	
});