const username = document.querySelector('#name')
const surname = document.querySelector('#surname')
const policy = document.querySelector('#privacy-policy')
const message = document.querySelector('#message')

const email = document.querySelector('#email')
const sendBtn = document.querySelector('#send')
const clearBtn = document.querySelector('#reset')
//
const popup = document.querySelector('.popup')
const allInput = document.querySelectorAll('.contact__form input, .contact__form textarea')

// ** form

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

// ** validate form

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')

	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.dataset.errorText)
		} else {
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		console.log(input)
		console.log(input.parentElement.querySelector('.error-text'))
		showError(input, `${input.dataset.errorText} musi składa się z min. ${min} znaków`)
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest nieprawidłowy')
	}
}

const checkErrors = () => {
	const allFormBox = document.querySelectorAll('.contact__form-box')
	let errorCount = 0

	allFormBox.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add('show-popup')
	}
}

const checkPolicy = policy => {
	if (!policy.checked) {
		showError(policy, policy.dataset.errorText)
	} else {
		clearError(policy)
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm(allInput)
	checkLength(username, 2)
	checkLength(surname, 3)
	checkMail(email)
	checkLength(message, 10)
	checkPolicy(policy)
	checkErrors()
})

clearBtn.addEventListener('click', e => {
	e.preventDefault()

	allInput.forEach(el => {
		el.value = ''
		clearError(el)
	})
})
