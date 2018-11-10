"use strict"
const validate = (value, type, content) => {
    let regex, response
    
    let validationType = `${type}-${content}`

    switch (validationType) {
        case 'text-description':
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
        case 'text-address':
            regex = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\.\,\/\\\-\# ]+$/i
            response = {
                validation: regex.test(value),
                message: 'Solo se permiten (#/\.,-) como carateres.'
            }
            /* Reparar esto agregar espacios en blanco */
            if(regex.test(value) && value.length <= 25) {
                response.validation = false
                response.message = 'La dirección debe tener mas de 25 caracteres.'
            }
            if(regex.test(value) && value.length > 150) {
                response.validation = false
                response.message = 'La dirección debe tener menos de 140 caracteres.'
            }
            return response
        case 'text-name':
            regex = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z\s]+$/i
            response = {
                validation: regex.test(value),
                message: 'Solo letras.'
            }
            /* Reparar esto agregar espacios en blanco */
            if(regex.test(value) && value.length <= 2) {
                response.validation = false
                response.message = 'Debe usar más de dos caracteres.'
            }
            return response
        case 'text-lastname':
            regex = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z\s]+$/i
            response = {
                validation: regex.test(value),
                message: 'Solo letras.'
            }
            /* Reparar esto agregar espacios en blanco */
            if(regex.test(value) && value.length <= 2) {
                response.validation = false
                response.message = 'Debe usar más de dos caracteres.'
            }
            return response
        case 'text-username':
            regex = /^[^0-9][a-z0-9]+$/
            response = {
                validation: regex.test(value),
                message: 'Formato debe ser alex56 o alexamart'
            }
            /* Reparar esto agregar espacios en blanco */
            if(regex.test(value) && value.length <= 2) {
                response.validation = false
                response.message = 'Debe usar más de dos caracteres.'
            }
            return response
        case 'text-nametype':
            regex = /^[a-z]+$/
            response = {
                validation: regex.test(value),
                message: 'Solo letras minusculas.'
            }
            /* Reparar esto agregar espacios en blanco */
            if(regex.test(value) && value.length <= 2) {
                response.validation = false
                response.message = 'Debe usar más de dos caracteres.'
            }
            return response
        case 'number-price':
            regex = /^[0-9\.]+([\.]?([0-9]){0,2})+$/i

            response = {
                validation: regex.test(value),
                message: 'Formato debe ser 00.00.'
            }
            return response
        case 'file-image':
            let imageSet, message; 
            if ( value.type == 'image/jpeg' || value.type == 'image/png' || value.type == 'image/jpg' ) {
                imageSet = true
                message = ""
            } else {
                imageSet = false
                message = 'Formatos permitidos son jpeg, jpg, png.'
            }
            if (value.size > 1000000) {
                imageSet = false
                message = 'Tamaño de la imagen es superiro a 1mb.'
            }
            response = {
                validation: imageSet,
                message: message
            }
            return response
        case 'select-one-users':
            response = {
                validation: value == 'none' ? false: true,
                message: 'Debe seleccionar un usuario'
            }
            return response
        case 'select-one-user_type':
            response = {
                validation: value == 'none' ? false: true,
                message: 'Debe seleccionar una tipo de usuario'
            }
            return response
        case 'email-correo':
            regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            response = {
                validation: regex.test(value),
                message: 'Formato invalido pruebe con name@host.com'
            }
            return response
        case 'text-phone':
            regex = /^\+?0?(\d{1,2}\s?\-?[^\da-zA-Z,])?(\d{1,3}\s?\-?[^\da-zA-Z,]){2,2}\d{4,4}[#pe]?\d*$/
            response = {
                validation: regex.test(value),
                message: 'Formato invalido pruebe +58 424 682 5418 o +58 424-682-5418'
            }
            return response
        case 'password-password':
            regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/

            response = {
                validation: regex.test(value),
                message: 'Debe contener un minuscula, mayuscula y número'
            }

            if(regex.test(value) && value.length < 8) {
                response.validation = false
                response.message = 'Debe usar más de dos caracteres.'
            }

            return response
        case 'password-repassword':
            var validation, passmessage;
            let $password = document.getElementById('password')
            if ($password) {
                if ($password.value == value) {
                    validation = true
                    passmessage = ""
                } else {
                    validation = false
                    passmessage = "Contraseñas no son iguales"
                }
            } else {
                validation = true
                passmessage = ""
            }
            response = {
                validation: validation,
                message: passmessage
            }
            return response
        // case 'email':
        //     regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        //     response = {
        //         validation: regex.test(value),
        //         message: 'Correo no permitido'
        //     }
        //     return response
        // case 'tel':
        //     regex = /^([+|#][0-9])+(\s*[0-9]*){8}$/
        //     response = {
        //         validation: regex.test(value),
        //         message: 'Solo un numero permitido'
        //     }
        //     return response
        // 
        // case 'password':
        //     response = {
        //         validation: true,
        //         message: 'contraseña'
        //     }
        //     return response
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