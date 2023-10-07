function swiper() {
	var swiper = new Swiper('.mySwiper', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		rewind: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
			stretch: -200,
			depth: 500,
			modifier: 1.4,
			slideShadows: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
		},
	})

	var swiper = new Swiper('.promoSwiper', {
		autoHeight: true,
		rewind: true,
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	})
}

export default swiper
