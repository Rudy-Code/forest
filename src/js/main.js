const nav = document.querySelector('nav')
const navBtn = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav__links')
const allNavLinksMobile = navLinks.querySelectorAll('.nav__link')
const navLinksDesktop = document.querySelector('.nav__links-desktop')
const allNavLinksDesktop = navLinksDesktop.querySelectorAll('.nav__link')

// spy scroll
const sections = document.querySelectorAll('.section')
const headerSection = document.querySelector('.header')

//  menu
const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navLinks.classList.toggle('nav__links--active')

	if (navLinks.classList.contains('nav__links--active')) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}

	allNavLinksMobile.forEach(item => {
		item.addEventListener('click', () => {
			navBtn.classList.remove('is-active')
			navLinks.classList.remove('nav__links--active')
			document.body.classList.remove('sticky-body')
		})
	})
}

navBtn.addEventListener('click', handleNav)

const options = {
	threshold: [0.5, 0.9],
	rootMargin: '-80px',
}

const handleScrollspy = entries => {
	let isFirstSectionVisible = true

	entries.forEach(entry => {
		const activeNav = navLinksDesktop.querySelector(`.nav__link[href='#${entry.target.id}']`)

		if (entry.isIntersecting && isFirstSectionVisible) {
			allNavLinksDesktop.forEach(link => {
				link.classList.remove('active')
			})
			activeNav.classList.add('active')
			isFirstSectionVisible = false
		}
	})
}

const observer = new IntersectionObserver(handleScrollspy, options)

sections.forEach(section => {
	observer.observe(section)
})