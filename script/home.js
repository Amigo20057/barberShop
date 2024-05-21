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
})
