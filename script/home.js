document.addEventListener('DOMContentLoaded', () => {
	const haircutBtn = document.querySelector('.haircutBtn')
	const shavingBtn = document.querySelector('.shavingBtn')
	const servicesBtn = document.querySelector('.servicesBtn')
	const careBtn = document.querySelector('.careBtn')
	const buttons = [haircutBtn, shavingBtn, servicesBtn, careBtn]
	const contentHaircut = document.getElementById('content-haircut')
	const contentShaving = document.getElementById('content-shaving')
	const contentServices = document.getElementById('content-services')
	const contentCare = document.getElementById('content-care')
	const contents = [
		contentHaircut,
		contentShaving,
		contentServices,
		contentCare,
	]

	buttons.forEach((button, index) => {
		button.addEventListener('click', () => {
			buttons.forEach(btn => btn.classList.remove('active'))
			button.classList.add('active')
			contents.forEach(content => content.classList.remove('active'))
			contents[index].classList.add('active')
		})
	})

	const modal = document.getElementById('modal')
	const closeModal = document.querySelector('.close')
	const orderButton = document.querySelector('.order button')
	const serviceType = document.getElementById('serviceType')
	const serviceOption = document.getElementById('serviceOption')
	const totalCost = document.getElementById('totalCost')
	const phoneNumber = document.getElementById('phoneNumber')
	const appointmentForm = document.getElementById('appointmentForm')

	const serviceOptions = {
		haircut: [
			{ name: 'Мужская стрижка', price: 1000 },
			{ name: 'Стрижка машинкой/fade', price: 900 },
			{ name: 'Стрижка машинкой', price: 600 },
			{ name: 'Діти до 14 років', price: 900 },
		],
		shaving: [{ name: 'Гоління бороди', price: 500 }],
		services: [
			{ name: 'Комплексна послуга 1', price: 1500 },
			{ name: 'Комплексна послуга 2', price: 2000 },
			{ name: 'Комплексна послуга 3', price: 3000 },
		],
		care: [
			{ name: 'Догляд за бородою', price: 400 },
			{ name: 'Догляд за волоссям', price: 500 },
			{ name: 'Повний догляд', price: 800 },
		],
	}

	orderButton.addEventListener('click', () => {
		modal.style.display = 'block'
		populateServiceOptions(serviceType.value)
		calculateTotalCost()
	})

	closeModal.addEventListener('click', () => {
		modal.style.display = 'none'
	})

	window.onclick = event => {
		if (event.target === modal) {
			modal.style.display = 'none'
		}
	}

	serviceType.addEventListener('change', e => {
		populateServiceOptions(e.target.value)
		calculateTotalCost()
	})

	serviceOption.addEventListener('change', calculateTotalCost)

	function populateServiceOptions(service) {
		const options = serviceOptions[service]
		serviceOption.innerHTML = ''
		options.forEach(option => {
			const opt = document.createElement('option')
			opt.value = option.price
			opt.textContent = option.name
			serviceOption.appendChild(opt)
		})
	}

	function calculateTotalCost() {
		const selectedOption = serviceOption.options[serviceOption.selectedIndex]
		if (selectedOption) {
			totalCost.value = selectedOption.value + ' грн'
		}
	}

	appointmentForm.addEventListener('submit', e => {
		e.preventDefault()
		if (!validatePhoneNumber(phoneNumber.value)) {
			alert(
				'Будь ласка, введіть дійсний номер телефону в форматі +380XXXXXXXXX'
			)
		} else {
			// Proceed with form submission or further processing
			alert('Вас записано')
		}
	})

	function validatePhoneNumber(number) {
		const regex = /^\+380\d{9}$/
		return regex.test(number)
	}

	const scrollToTopBtn = document.getElementById('scrollToTopBtn')

	window.onscroll = function () {
		toggleScrollToTopBtn()
	}

	scrollToTopBtn.addEventListener('click', scrollToTop)

	function toggleScrollToTopBtn() {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			scrollToTopBtn.style.display = 'block'
		} else {
			scrollToTopBtn.style.display = 'none'
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
})
