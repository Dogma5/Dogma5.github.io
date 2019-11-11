// ==================================
// Functions
// ==================================

// Hide any items with '.isopen'
// ------------------------------
function closeAll(){
	$('.isopen').hide().removeClass('isopen');;
}



// ==================================
// Doc ready
// ==================================
$( document ).ready(function() {


	// Close all on HTML click
	// ------------------------------
	$(window).click(function(){
		closeAll();
	});

	// Main manu dropdown
	// ------------------------------
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


	// Add heading links
	$('.content h1[id], .content h2[id]').each(function( i ) {
		string = '<a class="anchor" aria-hidden="true" href="#' + $(this).attr('id') + '">&sect;</a>'
		$(this).prepend(string);
	});


});// end doc ready
