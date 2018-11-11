"use strict"
const validate = (type, value) => {
    let regex, response
    
    let validationType = `${type}-${content}`

    switch (validationType) {
        case 'text':
            regex = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\.\, ]+$/i
            response = {
                validation: regex.test(value),
                message: 'Solo se permiten (. or ,) como carateres especiales.'
            }
            /* Reparar esto agregar espacios en blanco */
            if(regex.test(value) && value.length <= 25) {
                response.validation = false
                response.message = 'La descripción debe tener mas de 25 caracteres.'
            }
            if(regex.test(value) && value.length > 140) {
                response.validation = false
                response.message = 'La descripción debe tener menos de 140 caracteres.'
            }
            return response
        case 'select-one':
            response = {
                validation: value == 'none' ? false: true,
                message: 'Debe seleccionar un usuario'
            }
            return response
        case 'email-correo':
            regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            response = {
                validation: regex.test(value),
                message: 'Formato invalido pruebe con name@host.com'
            }
            return response
        case 'text':
            regex = /^\+?0?(\d{1,2}\s?\-?[^\da-zA-Z,])?(\d{1,3}\s?\-?[^\da-zA-Z,]){2,2}\d{4,4}[#pe]?\d*$/
            response = {
                validation: regex.test(value),
                message: 'Formato invalido pruebe +58 424 682 5418 o +58 424-682-5418'
            }
            return response
        default:
            return false
    }
    
}

const validarEmpty = (value) => {
    /*
        Validate if one input type file is empty
    */
    if (typeof(value) == "object") {
        if ( value.type == "application/octet-stream" ) {
            return value.name === ''
        }
    }
    /*
        Validate if one input type select it no selected
    */
    if (value == 'none') {
        return true
    }
    return value === ''
}

const clearForm = (form) => {

    for(let i = 0; i < form.length; i++) {
        let field = form[i]
         if(field.type != 'submit') { 
            $(field).removeClass('input--visible input--sussess')
            field.value = ''
         } 
    }
}