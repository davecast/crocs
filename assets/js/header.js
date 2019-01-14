

window.onscroll = function() {
	onScrollAction()
}

var header = document.getElementById('header')
const $headerMenu = document.getElementById('header__menu')
const $burguerMenu = document.getElementById('burguer__menu')

let $home = document.getElementById('slider')
let $about = document.getElementById('about')
let $services = document.getElementById('services')
let $contact = document.getElementById('contact')
let $quote = document.getElementById('quote')

function onScrollAction () {
	
	if (window.pageYOffset >= 100) {
		header.classList.add("header-fixed")
	} else {
		header.classList.remove("header-fixed")
	}

	if ( (window.pageYOffset > $home.offsetTop - 150) && (window.pageYOffset < ($home.offsetHeight + $home.offsetTop - 150) ) ) {
		activeMenu('#slider')
	}
	else if ( (window.pageYOffset > $about.offsetTop - 150) && (window.pageYOffset < ($about.offsetHeight + $about.offsetTop - 150) ) ) {
		activeMenu('#about')
	} else if ( (window.pageYOffset > $services.offsetTop - 150) && (window.pageYOffset < ($services.offsetHeight + $services.offsetTop - 150) ) ) {
		activeMenu('#services')
	} else if ( (window.pageYOffset > $quote.offsetTop - 150) && (window.pageYOffset < ($quote.offsetHeight + $quote.offsetTop - 150) ) ) {
		activeMenu('#quote')
	} else if ( (window.pageYOffset > $contact.offsetTop - 150) && (window.pageYOffset < ($contact.offsetHeight + $contact.offsetTop - 150) ) ) {
		activeMenu('#contact')
	}
}
function activeMenu (id) {
	let $beforeElement = document.querySelector('.menu--active')
	if ($beforeElement) {
		$beforeElement.classList.remove('menu--active')
	}
	
	let $nextElement = document.querySelector(`a[href='${id}']`)
	$nextElement.classList.add('menu--active')
}

$burguerMenu.addEventListener('click', (e) => {
	
	$headerMenu.classList.toggle('header__menu--active')
	$burguerMenu.classList.toggle('fa-times')
	$burguerMenu.classList.toggle('fa-bars')
})