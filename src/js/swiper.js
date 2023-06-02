const mySwiper = new Swiper('.swiper-container', {
	loop: true,
	speed: 1000,
	spaceBetween: 30,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 4000,
	},

	breakpoints: {
		768: {
			allowTouchMove: false,
		},
	},
})
