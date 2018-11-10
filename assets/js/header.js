

window.onscroll = function() {
	onScrollAction()
	
}

var header = document.getElementById('header')
const $headerMenu = document.getElementById('header__menu')
const $burguerMenu = document.getElementById('burguer__menu')
let $home = document.getElementById('slider')
let $about = document.getElementById('about')
// let $services = document.getElementById('services')

function onScrollAction () {
	
	if (window.pageYOffset >= 100) {
		header.classList.add("header-fixed")
	} else {
		header.classList.remove("header-fixed")
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

watcherHome = scrollMonitor.create($home)
watcherAbout = scrollMonitor.create($about)
// watcherServices = scrollMonitor.create($services)

watcherHome.fullyEnterViewport(function() {
	activeMenu('#slider')
});
watcherAbout.fullyEnterViewport(function() {
	activeMenu('#about')
});
// watcherServices.fullyEnterViewport(function() {
// 	activeMenu('#services')
// });