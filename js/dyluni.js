/**
*	Custom Javascript functions
*
*/

$(function($){
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 100);
	
	// Keyboard shortcuts	
	$(document).bind("keypress", function(evt){
		switch(evt.which){
			case 98: $("body").toggleClass("grid");
					break;
		}
	});

});
