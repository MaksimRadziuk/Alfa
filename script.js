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


	$('#autoparsingSlider').slick({
	  dots: true,
	  arrows: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 1440,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 1380,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 680,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('#youtubeSlider').slick({
	  dots: true,
	  arrows: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 1440,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 1380,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 680,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});



});