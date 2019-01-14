

window.onscroll = function() {
	onScrollAction()
}

var header = document.getElementById('header')
const $headerMenu = document.getElementById('header__menu')
const $burguerMenu = document.getElementById('burguer__menu')


function onScrollAction () {
	
	if (window.pageYOffset >= 100) {
		header.classList.add("header-fixed")
	} else {
		header.classList.remove("header-fixed")
	}

	
}


$burguerMenu.addEventListener('click', (e) => {
	
	$headerMenu.classList.toggle('header__menu--active')
	$burguerMenu.classList.toggle('fa-times')
	$burguerMenu.classList.toggle('fa-bars')
})