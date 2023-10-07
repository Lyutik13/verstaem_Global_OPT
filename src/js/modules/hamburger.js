function hamburger() {
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closse = document.querySelector('.menu__close')

	hamburger.addEventListener('click', () => {
		menu.classList.add('active')
	})

	closse.addEventListener('click', () => {
		menu.classList.remove('active')
	})
}

export default hamburger
