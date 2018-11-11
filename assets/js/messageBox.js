"use strict"

let $message__box = document.getElementById('message__box')

/*Metodo para agregar mensajes al navegador*/
const addMessage = (content, type='normal') => {

	/* Se crea elemento div que sera el elemento principal */
	let $elem = document.createElement('div');
	/* Se crea elemento que sera contenedor del mensaje */
	let $elemChild = document.createElement('div')

	if (type === 'sussess') {
		$($elem).addClass('message message--sussess')
	} else if(type === 'warning') {
		$($elem).addClass('message message--warning')
	} else if(type === 'danger') {
		$($elem).addClass('message message--danger')
	}
	
	/* Se agregan clases */
	$($elem).addClass('message')
	$($elemChild).addClass('message__text')
	$($elemChild).text(content)
	$($elem).html($elemChild)

	/* Se agregan al click a cada mensaje para elminarlo con el click */
	$($elem).on('click', function (e) {
		$(this).addClass('message--hidden')
		setTimeout(()=>{
			$(this).remove()
		},350)
	})

	/* Se agregan al contenedor de los mensajes */
	$message__box.appendChild($elem)

	/* Se agregan temporalizadores para que realizen sierta accion cuando pase dicho tiempo */
	setTimeout(()=>{
		$($elem).addClass('message--active')
	},50)

	setTimeout(()=>{
		$($elem).addClass('message--hidden')
	},5000)

	setTimeout(()=>{
		$($elem).remove()
	},5450)
}