"use strict"

$(window).on("load", ()=>{
	
	$('#loading').addClass('loading--hidden')

	setTimeout(()=>{
		$('#loading').remove()
	},1000)

})