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
		$('.catalog_sidebar-wrap').removeClass("active");
	})
	$('#background').click(function(){
		$('#background').fadeOut("slow");
		$('.popup').fadeOut("fast");
	})
	$('#transparentBackground').click(function(){
		$('#transparentBackground').fadeOut("slow");
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

	$('.sidebar_trigger').click(function(){
		$('.catalog_sidebar-wrap').addClass("active");
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
		if ($(window).innerWidth()<641) {
			$('.filter__tab').removeClass('active');
			$('#filterFirst').addClass('active');
			let toFilter = $('#filterFirst').offset().top;
			$("html, body").scrollTop(toFilter);
		}
		else{
			$('.filter__tab').removeClass('active');
			$('#filterFirst').addClass('active');
		}
	})
	$('#filterSecondTrigger').click(function(){
		if ($(window).innerWidth()<641) {
			$('.filter__tab').removeClass('active');
			$('#filterSecond').addClass('active');
			let toFilter = $('#filterSecond').offset().top;
			$("html, body").scrollTop(toFilter);
		}
		else{
			$('.filter__tab').removeClass('active');
			$('#filterSecond').addClass('active');
		}
	})
	$('#filterThirdTrigger').click(function(){
		if ($(window).innerWidth()<641) {
			$('.filter__tab').removeClass('active');
			$('#filterThird').addClass('active');
			let toFilter = $('#filterThird').offset().top;
			$("html, body").scrollTop(toFilter);
		}
		else{
			$('.filter__tab').removeClass('active');
			$('#filterThird').addClass('active');
		}
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


	$('.disassemble_filter-block').click(function(){
		$('.disassemble_filter-block').removeClass('active');
		$(this).addClass('active');
	})
	$('.product_qrcode-trigger').click(function(){
		$('#background').fadeIn("fast");
		$('.popup.qr').fadeIn("slow");
	})
	$('.product_gallery-wrap').click(function(){
		$('#background').fadeIn("fast");
		$('.popup.gallery').fadeIn("slow");
	})

	$('#tabDescriptionTrigger').click(function(){
		$('.tab_content').removeClass('active');
		$('#tabDescription').addClass('active');
	})
	$('#tabDeliveryTrigger').click(function(){
		$('.tab_content').removeClass('active');
		$('#tabDelivery').addClass('active');
	})
	$('#tabChangeTrigger').click(function(){
		$('.tab_content').removeClass('active');
		$('#tabChange').addClass('active');
	})
	$('#tabDonorsTrigger').click(function(){
		$('.tab_content').removeClass('active');
		$('#tabDonors').addClass('active');
	})

	$('.mobile_tab-trigger').click(function(){
		$(this).parent('.tab_content').toggleClass('active');
	});

	$('.navbar_basket-wrap').click(function(){
		$('.quick__review').fadeToggle();
		$('#transparentBackground').fadeToggle();
	})
	$('.delete_item-button').click(function(){
		$(this).parent('.basket_table-row, .quick__review-row').remove();
	})

	$('.option_block').click(function(){
		if ($(this).hasClass('active')) {

		}
		else {
			$('.option_block').removeClass('active');
			$(this).addClass('active');
			$('.option_content').slideUp();
			$(this).next('.option_content').slideDown();
		}		
	})

	$('#byuerDataSend').click(function(){
		$('#byuerData').removeClass('active');
		$('#deliveryOption').addClass('active');
		$('.process_graph-second').addClass('active');
	})
	$('#deliveryOptionSend').click(function(){
		$('#deliveryOption').removeClass('active');
		$('#paymentOption').addClass('active');
		$('.process_graph-third').addClass('active');
	})
	$('#backToByuerData').click(function(){
		$('#deliveryOption').removeClass('active');
		$('#byuerData').addClass('active');
		$('.process_graph-second').removeClass('active');
	})
	$('#backToDeliveryOption').click(function(){
		$('#paymentOption').removeClass('active');
		$('#deliveryOption').addClass('active');
		$('.process_graph-third').removeClass('active');
	})
	$('#paymentOptionSend').click(function(){
		$('#paymentOption').removeClass('active');
		$('#orderClosure').addClass('active');
		$('.process_graph-forth').addClass('active');
	})

	if ($(window).innerWidth()<781) {
		$('#byuerDataSend').click(function(){
			$('#byuerData').removeClass('active');
			$('#deliveryOption').addClass('active');
			$('.process_graph-second').addClass('active');
			let transformLeft = $('.process_graph').width();
			$('.process_line-graphs').css('left', -transformLeft);
		})
		$('#deliveryOptionSend').click(function(){
			$('#deliveryOption').removeClass('active');
			$('#paymentOption').addClass('active');
			$('.process_graph-third').addClass('active');
			let transformLeft = $('.process_graph').width();
			$('.process_line-graphs').css('left', -transformLeft*2);
		})
		$('#backToByuerData').click(function(){
			$('#deliveryOption').removeClass('active');
			$('#byuerData').addClass('active');
			$('.process_graph-second').removeClass('active');
			$('.process_line-graphs').css('left', '0');
		})
		$('#backToDeliveryOption').click(function(){
			$('#paymentOption').removeClass('active');
			$('#deliveryOption').addClass('active');
			$('.process_graph-third').removeClass('active');
			let transformLeft = $('.process_graph').width();
			$('.process_line-graphs').css('left', -transformLeft);
		})
		$('#paymentOptionSend').click(function(){
			$('#paymentOption').removeClass('active');
			$('#orderClosure').addClass('active');
			$('.process_graph-forth').addClass('active');
			let transformLeft = $('.process_graph').width();
			$('.process_line-graphs').css('left', -transformLeft*3);
		})
	}
	if ($(window).innerWidth()>=781) {
		$('.process_line-graphs').css('left', '0');
		$('#byuerDataSend').click(function(){
			$('#byuerData').removeClass('active');
			$('#deliveryOption').addClass('active');
			$('.process_graph-second').addClass('active');
		})
		$('#deliveryOptionSend').click(function(){
			$('#deliveryOption').removeClass('active');
			$('#paymentOption').addClass('active');
			$('.process_graph-third').addClass('active');
		})
		$('#backToByuerData').click(function(){
			$('#deliveryOption').removeClass('active');
			$('#byuerData').addClass('active');
			$('.process_graph-second').removeClass('active');
		})
		$('#backToDeliveryOption').click(function(){
			$('#paymentOption').removeClass('active');
			$('#deliveryOption').addClass('active');
			$('.process_graph-third').removeClass('active');
		})
		$('#paymentOptionSend').click(function(){
			$('#paymentOption').removeClass('active');
			$('#orderClosure').addClass('active');
			$('.process_graph-forth').addClass('active');
		})
	}
	else{}

	$(window).resize(function(){
		if ($(window).innerWidth()<781 && $('#deliveryOption').hasClass('active')) {
			let transformLeft = $('.process_graph').width();
			$('.process_line-graphs').css('left', -transformLeft);
		}
		if ($(window).innerWidth()<781 && $('#paymentOption').hasClass('active')) {
			let transformLeft = $('.process_graph').width();
			$('.process_line-graphs').css('left', -transformLeft*2);
		}
		if ($(window).innerWidth()<781 && $('#orderClosure').hasClass('active')) {
			let transformLeft = $('.process_graph').width();
			$('.process_line-graphs').css('left', -transformLeft*3);
		}
		if ($(window).innerWidth()>=781) {
			$('.process_line-graphs').css('left', '0');
		}
		else {
			let wrapWidth = $('.select2-container').parent('.select_wrap').innerWidth();
			$('.select2-container').css({width: "wrapWidth"})
		}
	})

	$('#aboutFirstSlider, #disassembleSlder, #carChoose, #avaliabilitySlder, #complexSlider').slick({
	  dots: true,
	  arrows: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 1001,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        dots:false,
	        arrows:false
	      }
	    }
	  ]
	});

	$('.tab_header-block').click(function(){
		$('.tab_header-block').removeClass('active');
		$(this).addClass('active');
	})
	$('#webSiteFeedbackTrigger').click(function(){
		$('.tab_content-block').removeClass('active');
		$('#webSiteFeedback').addClass('active');
	})
	$('#dromSiteFeedbackTrigger').click(function(){
		$('.tab_content-block').removeClass('active');
		$('#dromSiteFeedback').addClass('active');
	})


	$('.tab_button').click(function(){
		$('.tab_button').removeClass('active');
		$(this).addClass('active');
	})
	$('#lobbyTrigger').click(function(){
		$('.lobby_content-wrap').removeClass('active');
		$('#lobby').addClass('active');
	})
	$('#historyTrigger').click(function(){
		$('.lobby_content-wrap').removeClass('active');
		$('#history').addClass('active');
	})



	$('.js-example-basic-single').select2({width: 'resolve'});

});

var input = document.querySelector("#phone");
  window.intlTelInput(input, {
  initialCountry: "auto",
  separateDialCode: true,
  autoPlaceholder: "aggressive",
  geoIpLookup: function(success, failure) {
    $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "ru";
      success(countryCode);
    });
  },
});