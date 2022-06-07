$(document).ready(function(){
	$(".b_btn").click(function() {
		$(this).toggleClass("play");
		if ($(this).hasClass("play")) {
			isPause = true;
			$(this).css('background-image', 'url("../img/btn-stop.png")');
			$('#visual').addClass('paused');
			$('.sub_imgbox').slick('slickPause');
			$bar.css({
				width: 100 + "%"
			});
		} else {
			isPause = false;
			$(this).css('background-image', 'url("../img/btn-play.png")');
			$('#visual').removeClass('paused');
			$('.sub_imgbox').slick('slickPlay');
		}
	});
});

(function($){
	$(window).on('scroll', function() {
		$('.ani_effect').each(function(index, elem) {
			if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 1.4)) {
				var $this = $(this);
				$this.addClass("action");
			}	
			if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 1.4)) {
				var $this = $(this);
				$this.addClass("action");
			}else{
				var $this = $(this);
			}	
		});
	});
})(jQuery);

$(document).ready(function(){
	var slider = $('.price_slick');  	
	var slickOptions = { 		
		infinite: false, 		
		slidesToShow: 1, 		
		slidesToScroll: 1,
		initialSlide : 2,
		dots:true, 		
		arrows:false 	
	};
	$(window).on('load resize', function() { 		
		if($(window).width() < 680) { 			
			slider.not('.slick-initialized').slick(slickOptions); 		
		}else{ 			
			//slider.slick('unslick'); 		
		} 
	});
});

$(document).ready(function(){
	function sliderSet(slickfor,slicknav){
			slickfor.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			//autoplay: true,
			pauseOnFocus:false,
			pauseOnHover:false,
			speed:10,
			zIndex:50,
			autoplaySpeed: 4000,
			fade: true,
			infinite:true,
			arrows: true,
			asNavFor:slicknav
		});
			slicknav.slick({
			slidesToShow: 6,
			slidesToScroll:6,
			zIndex:50,
			focusOnSelect: true,
			accessibility: false,
			draggable: false,
			dots: false,
			swipe:true,
			arrows:false,
			infinite:false,
			asNavFor: slickfor,
			responsive: [
				{
				  breakpoint: 980,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: true,
					infinite:true,
					rows: 1,
					swipeToSlide: true
				  }
				}
			  ]
		});
	}

	$('.serviceWrap').each(function(i,el){ 
		i+=1;	
		var slickfor = $(el).find('.service-for').addClass('for'+ i) 
		var slicknav = $(el).find('.slick-nav').addClass('nav'+ i) 
		sliderSet(slickfor,slicknav);
	});

	/*var slideTimer;
	$('.slick-nav').on('mouseenter', '.slick-slide', function (e) {
		var $currTarget = $(e.currentTarget);
		$('.slick-nav .slick-slide').removeClass('slick-current');
		$currTarget.addClass('slick-current');

		slideTimer = setTimeout(function () {
			var index = $('.slick-nav').find('.slick-current').data('slick-index');
			var slickObj = $('.service-for').slick('getSlick');
			slickObj.slickGoTo(index);
		}, 20);
		}).on('mouseleave', '.slick-slide', function (e) {
			clearTimeout(slideTimer);
	});*/


});