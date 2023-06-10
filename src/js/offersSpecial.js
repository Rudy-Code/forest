const popupSpecial = document.querySelector('.special')
const offersBtnSpecial = document.querySelector('.offers__card-btn--special')
const specialCloseBtn = document.querySelector('.special__close-btn')

// music file to play
const music = new Audio('../music/fortnite.mp3')

const open = () => {
	music.play()
	popupSpecial.classList.add('show-special')
}
const close = () => {
	music.pause()
	popupSpecial.classList.remove('show-special')

}

offersBtnSpecial.addEventListener('click', open)

specialCloseBtn.addEventListener('click', close)
