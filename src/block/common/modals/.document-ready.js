/*var basketOpen = $('.informer__modal .btn__item');
basketOpen.on('click', function(e) {
	var btn = $(this);	
	var modal = btn.attr("data-target");	
	btn.closest('.modals').modal('hide');
	$(modal).modal();
	console.log(btn.attr("data-target"));
});*/
$('.informer__panel.visible--md').closest('.modals').addClass('is--informer')
$('#modal-add-basket').on('hidden.bs.modal', function (e) {
	//if()
	$('body').find('.modals.is--catalog.in').closest('body').addClass('modal-open');
});
/*var modal_btn_show = $('.informer__modal .btn__item');
/*var modal_btn_show = $('[data-toggle="modal"]');
modal_btn_show.on('click', function(e) {

	var modal = $(this).attr('data-target');
	var modal_heading = $(modal).find("[data-modal-heading]");
	var modal_heading_value = $(this).attr('data-modal-heading');

	var modal_heading_small = $(modal).find("[data-modal-heading-small]");
	var modal_heading_small_value = $(this).attr('data-modal-heading-small');

	var modal_form_heading = $(modal).find("[data-form-heading]");

	var modal_btn_heading = $(modal).find("[data-btn-heading]");
	var modal_btn_heading_value = $(this).attr('data-btn-heading');

	modal_heading.text(modal_heading_value);
	modal_heading_small.text(modal_heading_small_value);
	modal_form_heading.attr({'value':modal_heading_value});
	modal_btn_heading.text(modal_btn_heading_value);
});*/