"use strict"
const validate = (type, key, value) => {
    let regex, response
    
    let validationType = `${type}-${key}`

    switch (validationType) {
        case 'text-name':
            regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/i
            response = {
                validation: regex.test(value),
                message: 'Only letters'
            }
            if(regex.test(value) && value.length <= 3) {
                response.validation = false
                response.message = 'First name must be longer to 3 characters'
            }
            return response
        case 'text-firstname':
            regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/i
            response = {
                validation: regex.test(value),
                message: 'Only letters'
            }
            if(regex.test(value) && value.length <= 3) {
                response.validation = false
                response.message = 'First name must be longer to 3 characters'
            }
            return response
        case 'text-lastname':
            regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/i
            response = {
                validation: regex.test(value),
                message: 'Only letters'
            }
            if(regex.test(value) && value.length <= 3) {
                response.validation = false
                response.message = 'Last name must be longer to 3 characters'
            }
            return response
        case 'textarea-description':
            regex = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\.\, ]+$/i
            response = {
                validation: regex.test(value),
                message: 'Only (. or ,) are allowed as special characters'
            }
            /* Reparar esto agregar espacios en blanco */
            if(regex.test(value) && value.length <= 25) {
                response.validation = false
                response.message = 'The description must have more than 25 characters'
            }
            if(regex.test(value) && value.length > 140) {
                response.validation = false
                response.message = 'The description must have more than 140 characters'
            }
            return response
        case 'textarea-descriptionContact':
            regex = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\.\, ]+$/i
            response = {
                validation: regex.test(value),
                message: 'Only (. or ,) are allowed as special characters'
            }
            /* Reparar esto agregar espacios en blanco */
            if(regex.test(value) && value.length <= 25) {
                response.validation = false
                response.message = 'The description must have more than 25 characters'
            }
            if(regex.test(value) && value.length > 140) {
                response.validation = false
                response.message = 'The description must have more than 140 characters'
            }
            return response
        case 'text-fromcity':
            regex = /^[-.?!,;:()# A-Za-z0-9]*$/i
            response = {
                validation: regex.test(value),
                message: 'Only this special char -.?!,;:()#.'
            }
            /* Reparar esto agregar espacios en blanco */
            if(regex.test(value) && value.length <= 10) {
                response.validation = false
                response.message = 'The description must have more than 10 characters'
            }
            if(regex.test(value) && value.length > 140) {
                response.validation = false
                response.message = 'The description must have more than 140 characters'
            }
            return response
        case 'text-tocity':
            regex = /^[-.?!,;:()# A-Za-z0-9]*$/i
            response = {
                validation: regex.test(value),
                message: 'Only this special char'
            }
            /* Reparar esto agregar espacios en blanco */
            if(regex.test(value) && value.length <= 10) {
                response.validation = false
                response.message = 'The description must have more than 10 characters'
            }
            if(regex.test(value) && value.length > 140) {
                response.validation = false
                response.message = 'The description must have more than 140 characters'
            }
            return response
        case 'select-one-size':
            response = {
                validation: value == 'none' ? false: true,
                message: 'You must select one option'
            }
            return response
        case 'email-email':
            regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            response = {
                validation: regex.test(value),
                message: 'Invalid format, try with name@host.com'
            }
            return response
        case 'email-emailContact':
            regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            response = {
                validation: regex.test(value),
                message: 'Invalid format, try with name@host.com'
            }
            return response
        case 'text-primaryphone':
            regex = /^[-+# 0-9]*$/i
            response = {
                validation: regex.test(value),
                message: 'Invalid phone number.'
            }
            return response
        case 'text-phone':
            regex = /^[-+# 0-9]*$/i
            response = {
                validation: regex.test(value),
                message: 'Invalid phone number.'
            }
            return response
        case 'text-secondaryphone':
            regex = /^[-+# 0-9]*$/i
            response = {
                validation: regex.test(value),
                message: 'Invalid phone number.'
            }
            return response
        case 'text-date':
            
            response = {
                validation: true,
                message: ''
            }
            return response
        case 'date-date':
            
            response = {
                validation: true,
                message: ''
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

function verifyCaptchaContact () {
    captchaContact = true
}

function verifyCaptchaQuote () {
    captchaQuote = true
}