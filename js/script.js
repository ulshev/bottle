function tweakSlider() {
        var width = $(window).width();
	if (width < 975) {
	    $('.main_menu').css("display", "none");
	    
	 $('.a_about').click(function(){
		$(arguments).get(0).preventDefault();
	    });
	 $('.a_production').click(function(){
		$(arguments).get(0).preventDefault();
	    });
	 $('.a_product').click(function(){
		$(arguments).get(0).preventDefault();
	    });
	    
	    if (width > 800) {
		$(".karusel_1").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.customLink1',
		    slideCount: 2,
		    continuous: true,
		    responsive: false,
		    speed: 800,
		});
		
		$(".karusel_2").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.customLink2',
		    slideCount: 3,
		    continuous: true,
		    responsive: false,
		    speed: 600,
	       });
		$(".photo_slider ul").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.photo_slider_link',
		    slideCount: 3,
		    continuous: true,
		    responsive: false,
		    speed: 800,
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
		    speed: 800,
		});
		
		$(".karusel_2").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.customLink2',
		    slideCount: 1,
		    continuous: true,
		    responsive: false,
		    speed: 600,
	       });
		$(".photo_slider ul").sudoSlider({
		    touch: true,
		    mouseTouch: true,
		    prevNext:false,
		    customLink:'.photo_slider_link',
		    slideCount: 1,
		    continuous: true,
		    responsive: false,
		    speed: 800,
		 });
	    }
	    
	}else{
	    $('.main_menu').attr('style', '');
	    $('.a_about').attr('style', '');
	    $('.a_production').attr('style', '');
	    $('.a_product').attr('style', '');
	    
	    $(".karusel_1").sudoSlider({
		touch: true,
		mouseTouch: true,
		prevNext:false,
		customLink:'.customLink1',
		slideCount: 3,
		continuous: true,
		responsive: false,
		speed: 800,
	    });
	    $(".photo_slider ul").sudoSlider({
	touch: true,
	mouseTouch: true,
	prevNext:false,
	customLink:'.photo_slider_link',
	slideCount: 4,
	continuous: true,
	responsive: false,
	speed: 800,
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
		    speed: 600,
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
		    speed: 600,
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
         pause: 2000,
	 speed: 1100,
         auto:true,
    });
    
    
    
    
    

    $('input,textarea').focus(function(){
	$(this).data('placeholder',$(this).attr('placeholder'))
	$(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
    });

    
     
    tweakSlider();
});