const popupSpecial = document.querySelector('.special')
const offersBtnSpecial = document.querySelector('.offers__card-btn--special')
const specialCloseBtn = document.querySelector('.special__close-btn')
const video = document.querySelector('.video')

// music file to play
const music = new Audio('/music/fortnite.mp3')

const open = () => {
	music.play()
	popupSpecial.classList.add('show-special')
	video.play()
}
const close = () => {
	music.pause()
	popupSpecial.classList.remove('show-special')
	video.pause()
}

offersBtnSpecial.addEventListener('dblclick', open)

specialCloseBtn.addEventListener('click', close)
