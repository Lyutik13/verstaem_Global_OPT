function modal() {
	const btnsModalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal')

	function openModal() {
		modal.classList.add('show', 'fade')
		modal.classList.remove('hide')
		document.body.style.overflow = 'hidden'
		//убираем повторное открытие модального окна
		clearInterval(modalTimerId)
	}

	function closeModal() {
		modal.classList.add('hide')
		modal.classList.remove('show', 'fade')
		document.body.style.overflow = ''
	}

	btnsModalTrigger.forEach((btn) => {
		btn.addEventListener('click', openModal)
	})

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal()
		}
	})

	// события при нажатии на клавишу esc
	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal()
		}
	})

	// Открытие модального окна по таймеру ф-я setTimeout
	const modalTimerId = setTimeout(openModal, 20000)

	// Открытие модального окна после прокрутки страницы до конца
	// высота клиентского окна + высота скрола >= всей высоте страницы
	function showModalByScroll() {
		if (
			document.documentElement.clientHeight + window.scrollY >=
			document.documentElement.scrollHeight
		) {
			openModal()
			window.removeEventListener('scroll', showModalByScroll)
		}
	}

	window.addEventListener('scroll', showModalByScroll)
}

export default modal
