/**
*	Custom Javascript functions
*
*/

$(function($){
	
	// Hide the address bar on iPhone
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 100);
	
	
	// Make a new grid overlay. See js/jquery.hashgrid.js for additional options
	var grid = new hashgrid();
	
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
