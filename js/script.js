$(document).ready(function() {
    
    $(".slider").sudoSlider({
         continuous: true,
         touch: true,
         mouseTouch: true,
         //touchHandle: "> * :not(a)",
         prevNext: true,
         numeric: true,
	 effect: "fadeOutIn",
         pause: 3000,
         auto:true,
    });
    
    
    
    
});