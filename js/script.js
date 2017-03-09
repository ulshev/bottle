function tweakSlider() {
        var width = $(window).width();
	if (width > 975) {
	    $('.main_menu').css("display", "block");
	    
	    $(".karusel_1").sudoSlider({
		touch: true,
		mouseTouch: true,
		prevNext:false,
		customLink:'.customLink1',
		slideCount: 3,
		continuous: true,
		responsive: false,
	    });
	    
	    if (width > 1250) {
	    
		$(".karusel_2").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.customLink2',
		    slideCount: 6,
		    continuous: true,
		       responsive: false,
	       });
	    }else{
		
		$(".karusel_2").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.customLink2',
		    slideCount: 4,
		    continuous: true,
		       responsive: false,
	       });
	    }
	    
	}else{
	    $('.main_menu').css("display", "none");
	    
	    
	    if (width > 800) {
		$(".karusel_1").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.customLink1',
		    slideCount: 2,
		    continuous: true,
		    responsive: false,
		});
		
		$(".karusel_2").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.customLink2',
		    slideCount: 3,
		    continuous: true,
		       responsive: false,
	       });
	    }else{
		$(".karusel_1").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.customLink1',
		    slideCount: 1,
		    continuous: true,
		    responsive: false,
		});
		
		$(".karusel_2").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.customLink2',
		    slideCount: 1,
		    continuous: true,
		       responsive: false,
	       });
	    }
	}
};



$(document).ready(function() {
     
     $('.menu_batton_mob').click(function(){
	    if ($('.main_menu').css("display") == "block") {
	       $('.main_menu').slideUp(500);
	   }else{
	      $('.main_menu').slideDown(500);
	   }
	});
     $('.a_about').click(function(){
	    if ($('.menu_about').css("display") == "block") {
	       $('.menu_about').slideUp(500);
	   }else{
	      $('.menu_about').slideDown(500);
	   }
	});
     $('.a_production').click(function(){
	    if ($('.menu_production').css("display") == "block") {
	       $('.menu_production').slideUp(500);
	   }else{
	      $('.menu_production').slideDown(500);
	   }
	});
     $('.a_product').click(function(){
	    if ($('.menu_product').css("display") == "block") {
	       $('.menu_product').slideUp(500);
	   }else{
	      $('.menu_product').slideDown(500);
	   }
	});
     $(window).resize(function(){
	tweakSlider();
     });
     
     
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
     
    tweakSlider();
});