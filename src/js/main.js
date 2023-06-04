const nav = document.querySelector('nav')
const navBtn = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav__links')
const allNavLinksMobile = navLinks.querySelectorAll('.nav__link')
const navLinksDesktop = document.querySelector('.nav__links-desktop')
const allNavLinksDesktop = navLinksDesktop.querySelectorAll('.nav__link')

// spy scroll
const sectionsSpy = document.querySelectorAll('.section')
const headerSection = document.querySelector('.header')

// offers
const offersBox = document.querySelector('.offers__box')
const offersCards = document.querySelectorAll('.offers__card')
const offersBtn = document.querySelectorAll('.offers__card-btn')

//  ** menu
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

// ** scrollspy

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		sectionsSpy.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 90) {
				sections.push(section)

				const activeSection = navLinksDesktop.querySelector(`.nav__link[href*="${sections[0].id}"]`)
				allNavLinksDesktop.forEach(item => item.classList.remove('active'))

				activeSection.classList.add('active')
			}
		})
	}
}

// ** offers

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

// ** form

if (document.body.classList.contains('contact-page')) {
	const handleLabelText = e => {
		e.value != '' ? e.classList.add('text') : e.classList.remove('text')
	}

	const resetForm = () => {
		inputs.forEach(input => input.classList.remove('text'))
	}

	const inputs = document.querySelectorAll('.input')
	const reset = document.querySelector('#reset')

	inputs.forEach(input => {
		input.addEventListener('focus', () => {
			handleLabelText(input)
		})
		input.addEventListener('input', () => {
			handleLabelText(input)
		})
	})

	reset.addEventListener('click', resetForm)
}

// ** animations on scroll - intersection observer

const animationsElements = document.querySelectorAll('.animate-on-scroll, .animate-top-down, .animate-down-top')

const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate')
				if (entry.target.classList.contains('animate-down-top--special')) entry.target.classList.add('animate--special')

				// delete classes and observer after animation
				setTimeout(() => {
					entry.target.classList.remove(
						'animate',
						'animate--special',
						'animate-on-scroll',
						'animate-top-down',
						'animate-down-top',
						'animate-down-top--special'
					)
					observer.unobserve(entry.target)
				}, 1000)
			}
		})
	},
	// computer threshold
	{
		threshold: numberThreshold,
	}
)

const numberThreshold = window.matchMedia('(max-width: 768px)').matches ? 0.1 : 0.5

animationsElements.forEach(el => observer.observe(el))

navBtn.addEventListener('click', handleNav)

window.addEventListener('scroll', handleScrollSpy)
handleScrollSpy()
