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

let options = {
	threshold: [0.6, 0.95],
	rootMargin: '-100px',
}

const screenWidth = window.innerWidth

if (screenWidth < 900) {
	// Opcje dla urządzeń o szerokości mniejszej niż 768px
	options = {
		threshold: [0.5, 0.95],
		rootMargin: '-50px',
	}
// } else if(screenWidth > 768) {
// 	// Opcje dla większych urządzeń
// 	const options = {
// 		// ...
// 	}
}

const handleScrollspy = entries => {
	let isFirstSectionVisible = true

	entries.forEach(entry => {
		if (entry.target.id === 'home') {
			console.log(entry.target.id)
		}
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

// !offers

const offersBox = document.querySelector('.offers__box')
const offersCards = document.querySelectorAll('.offers__card')
const offersBtn = document.querySelectorAll('.offers__card-btn')

const handleOffers = e => {
	const btn = e.querySelector('.offers__card-btn')
	offersCards.forEach(card => {
		card.classList.remove('offers__card--special')
	})
	offersBtn.forEach(btn => {
		btn.classList.remove('offers__card-btn--special')
	})

	btn.classList.add('offers__card-btn--special')
	e.classList.add('offers__card--special')
}

offersCards.forEach(card => {
	card.addEventListener('mouseenter', () => handleOffers(card))
	card.addEventListener('mouseleave', () => handleOffers(offersCards[1]))
})
