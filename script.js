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

	$('.enter_lobby, .topbar_block img').click(function(){
		$('#background').fadeIn("fast");
		$('.popup.access').fadeIn("slow");
	})
	$('.registration_trigger').click(function(){
		$('.popup.access').fadeOut("fast");
		$('#background').fadeIn("fast");
		$('.popup.registration').fadeIn("slow");
	})

	$('.phone_trigger').click(function(){
		$('.popup.phone').fadeIn("fast");
	})
	$('.hamburger').click(function(){
		$('.popup.menu').fadeIn("fast");
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
	      breakpoint: 1680,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 2,
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
	      breakpoint: 1110,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 831,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        dots:false,
	        arrows:false
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
	      breakpoint: 1701,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 1381,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 901,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        dots:false,
	        arrows:false
	      }
	    }
	  ]
	});




	$('.filter__tab-trigger').click(function(){
		$('.filter__tab-trigger').removeClass('active');
		$(this).addClass('active');
	})
	$('.view_trigger-button').click(function(){
		$('.view_trigger-button').removeClass('active');
		$(this).addClass('active');
	})
	$('#filterFirstTrigger').click(function(){
		$('.filter__tab').removeClass('active');
		$('#filterFirst').addClass('active');
	})
	$('#filterSecondTrigger').click(function(){
		$('.filter__tab').removeClass('active');
		$('#filterSecond').addClass('active');
	})
	$('#filterThirdTrigger').click(function(){
		$('.filter__tab').removeClass('active');
		$('#filterThird').addClass('active');
	})

	$('#tabSecondStep1 .filter_step2-block').click(function(){
		$('#tabSecondStep1').removeClass('active');
		$('#tabSecondStep2').addClass('active');
	})
	$('#tabSecondStep2 ul li').click(function(){
		$('#tabSecondStep2').removeClass('active');
		$('#tabSecondStep3').addClass('active');
	})
	$('#tabSecondStep3 .car_model-block').click(function(){
		$('#tabSecondStep3').removeClass('active');
		$('#tabSecondStep4').addClass('active');
	})



	$('.result_block-slider').slick({
		dots: true,
	    arrows: false,
	    infinite: true,
	    speed: 300,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	});

	$('.view_trigger-button').click(function(){
		$('.view_trigger-button').removeClass('active');
		$(this).addClass('active');
	})
	$('#tileViewFilter').click(function(){
		$('.filter_result-wrap').removeClass('rows');
		$('.result_block-slider').slick();
	})
	$('#rowViewFilter').click(function(){
		$('.filter_result-wrap').addClass('rows');
		$('.result_block-slider').slick();
	})

	if($(window).innerWidth()<700) {
		$('.filter_result-wrap').removeClass('rows');
			$('#tileViewFilter').addClass('active');
			$('#rowViewFilter').removeClass('active');
	}
	else {}

	$(window).resize(function(){
		if($(window).innerWidth()<700) {
			$('.filter_result-wrap').removeClass('rows');
			$('#tileViewFilter').addClass('active');
			$('#rowViewFilter').removeClass('active');
		}
		else {}
	})

});