"use strict"

const $overlay = document.getElementById('overlay')
const $modal = document.getElementById('modal')
const $hideModal = document.getElementById('hide-modal')
const $modalContent = document.getElementById('modal-content')
const $modalSignin = document.getElementById('modal-signin')
const $modalSignup = document.getElementById('modal-signup')
const $body = document.querySelector('body')

function modalTemplate (template, content) {
	let hmtlContent;
	switch(template) {
		case 'services':
			hmtlContent = `
				<div class="modal__service">
					<div class="row">
						<div class="col--12 col--sm-12 col--md-12">
							<div class="modal__name__service">${content.name}</div>
							<img class="modal__img__service" src="assets/temp/${content.src}" />
							<div class="modal__text__service m__b--x-2">${content.text}</div>
						</div>
					</div>
				</div>
			`
			break;
		default:
			hmtlContent = ''
	}

	const html = document.implementation.createHTMLDocument();

	html.body.innerHTML = hmtlContent;

	return html.body.children[0];
}

function showModal(data) {
	$overlay.classList.add('active')
	$modal.style.animation = 'modalIn .8s forwards'
	$body.classList.add('overflow-none')

	const $modalTemplate = modalTemplate(data.template, data)
	$modalContent.innerHTML = $modalTemplate.outerHTML
}

function hideModal() {
	$overlay.classList.add('fadeIn--overlay')
	$modal.style.animation = 'modalOut .8s forwards'
	$body.classList.remove('overflow-none')
	setTimeout(()=>{
		$overlay.classList.remove('active', 'fadeIn--overlay')
	}, 800)
}

let $modalOpen = document.querySelectorAll('.modal__open')

$modalOpen.forEach((btnModal) => {
	btnModal.addEventListener('click', (e) => {
		e.preventDefault()
		if (isEmpty(e.target.dataset)) {
			showModal(e.target.parentElement.dataset)
		} else {
			showModal(e.target.dataset)
		}
	})
})

$hideModal.addEventListener('click', (e) => {
	hideModal()
})