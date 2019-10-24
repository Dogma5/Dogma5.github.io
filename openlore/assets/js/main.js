function closeAll(){
	$('.isopen').hide().removeClass('isopen');;
}

$( document ).ready(function() {

	// Close all on HTML click
	// ==================================
	$(window).click(function(){
		closeAll();
	});

	// Main manu dropdown
	// ==================================
	$('.dropdown-btn').click(function(){

		mydropdown = $(this).next('.dropdown-box');

		if ( mydropdown.is(":visible") ){
			closeAll();
		} else{
			closeAll();
			mydropdown.show().addClass('isopen');
		}

		event.stopPropagation();
	});

});// end doc ready
