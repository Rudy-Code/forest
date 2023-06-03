const scrollToTopBtn = document.querySelector('.scroll-to-top')
const handleWidthScrollBar = () => {
	const scroll = window.scrollY
	const maxScroll = document.body.offsetHeight - window.innerHeight

	const scrollBarWidth = Math.floor((scroll / maxScroll) * 100)

	if (scrollBarWidth > 75) scrollToTopBtn.classList.add('scroll-to-top--visible')
	else scrollToTopBtn.classList.remove('scroll-to-top--visible')
}

const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	})
}
window.addEventListener('scroll', handleWidthScrollBar)
scrollToTopBtn.addEventListener('click', scrollToTop)
