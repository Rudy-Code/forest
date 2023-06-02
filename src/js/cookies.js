const cookieBox = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie__btn')


const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')

	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()
