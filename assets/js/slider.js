'use strict';

$(window).on("load", ()=>{

	let $slider = $('.slider')

	const moveR = (elem) => {
		let $sliderActiveBefore = $(elem).find('.slider__container--active').get(0);
		$($sliderActiveBefore).addClass("slider__container--hidden").delay(600).queue(function(next){
		    $(this).removeClass("slider__container--hidden slider__container--active");
		    next();
		});
		
		let $sliderItem = $(elem).children('.slider__item').get(2);
		
		let $sliderContainer = $($sliderItem).find('.slider__container').get(0);
		
		$($sliderContainer).delay(600).queue(function(next){
		    $(this).addClass('slider__container--active')
		    next();
		});

		$(elem).animate({
			marginLeft: `-${200}%`
		},1000, "linear", function() {
			$(this.firstElementChild).insertAfter(this.lastElementChild)
			$(this).css('margin-left', `-${100}%`)
		})

	}
	const moveL = (elem) => {

		let $sliderActiveBefore = $(elem).find('.slider__container--active').get(0);
		$($sliderActiveBefore).addClass("slider__container--hidden").delay(600).queue(function(next){
		    $(this).removeClass("slider__container--hidden slider__container--active");
		    next();
		});

		let $sliderItem = $(elem).children('.slider__item').get(0);
		let $sliderContainer = $($sliderItem).find('.slider__container').get(0);

		$($sliderContainer).delay(600).queue(function(next){
		    $(this).addClass('slider__container--active')
		    next();
		});


		$(elem).animate({
			marginLeft:0
		} ,1200, "linear", function(){
			$(this.lastElementChild).insertBefore(this.firstElementChild)
			$(this).css('margin-left', `-${100}%`)
		});
	}

	const autoplay = (elem) => {
		let direction = elem.dataset.direction ? elem.dataset.direction : 'right'

		elem.sliderInterval = setInterval(function() {
			direction === 'left' ?
				moveL(elem)
			:
				moveR(elem)
		}, elem.dataset.sliderDelay)
	}
	
	for (let i = 0; i < $slider.length; i++) {
		let $slider__box = $($slider[i]).children('.slider__box')[0]
		let $btns_left = $($slider[i]).children('.slider__btn--left')[0]
		let $btns_right = $($slider[i]).children('.slider__btn--right')[0]

		$($slider__box).css("width", `${$slider__box.childElementCount*100}%`)
		$($slider__box.lastElementChild).insertBefore($slider__box.firstElementChild)
		$($slider__box).css("margin-left", `-${100}%`)

		//autoplay($slider__box)

		$($btns_left).on('click', () => {
			moveL($slider__box)
			clearInterval($slider__box.sliderInterval)
			//autoplay($slider__box)
		})

		$($btns_right).on('click', () => {
			moveR($slider__box)
			clearInterval($slider__box.sliderInterval)
			//autoplay($slider__box)
		})
	}

})