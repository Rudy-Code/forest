const popupSpecial = document.querySelector('.special')

const openBtn = document.querySelector('.open-btn')
const music = new Audio('/music/fortnite.mp3')

const open = () => {
	openBtn.style.display = 'none'
	music.play()
	popupSpecial.classList.add('show-special')
	video.play()
	document.body.style.overflow = 'hidden'
}

openBtn.addEventListener('click', open)
