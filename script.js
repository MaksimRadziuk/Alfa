$(document).ready(function(){

	$(function(){
	  $.fn.scrollToTop=function(){
	    $(this).hide().removeAttr("href");
	    if($(window).scrollTop()!="0"){
	        $(this).fadeIn("slow")
	  }
	  var scrollDiv=$(this);
	  $(window).scroll(function(){
	    if($(window).scrollTop()<="500"){
	    $(scrollDiv).fadeOut("slow")
	    }else{
	    $(scrollDiv).fadeIn("slow")
	  }
	  });
	    $(this).click(function(){
	      $("html, body").animate({scrollTop:0},"slow")
	    })
	  }
	});
	$(function() {$(".up").scrollToTop();});

	$('.close').click(function(){
		$('.cookieBar').fadeOut("slow");
		$('#background').fadeOut("slow");
		$('.popup').fadeOut("fast");
	})
	$('#background').click(function(){
		$('#background').fadeOut("slow");
		$('.popup').fadeOut("fast");
	})

	$('.enter_lobby').click(function(){
		$('#background').fadeIn("fast");
		$('.popup.access').fadeIn("slow");
	})
	$('.registration_trigger').click(function(){
		$('.popup.access').fadeOut("fast");
		$('#background').fadeIn("fast");
		$('.popup.registration').fadeIn("slow");
	})


});