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
	
	// Set up smooth scrolling to text anchors
	$("a").smoothScroll();
	
	// For the iPhone 4
	if(window.devicePixelRatio >= 2) {
		// Replace low-res images with high-res ones for the iPhone 4. See code below. Be sure to rename
		// your images according to Apple's guidelines ("image.png" becomes "image@2x.png")
		
		// You can also use Troy's jQuery plugin for the whole site: http://troymcilvena.com/post/998277515/jquery-retina
		
		//$retina_img.attr("src", old_src.replace(/(.+)(\.\w{3,4})$/, "$1"+ "@2x" +"$2"));
	}	

});
