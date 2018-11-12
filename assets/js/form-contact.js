"use strict"
$(window).on("load", ()=>{
    
    const $formContact = document.getElementById('formContact')
    const $submit__contact = document.getElementById('submit__contact')
    const $messageContact = document.getElementById('messageContact');
    
    (async function formContact (){

        $formContact.addEventListener('submit', (e) => {
            e.preventDefault();
            addFormContact($formContact)
        })

        $submit__contact.addEventListener('click', (e) => {
            addFormContact($formContact)
        })     

        async function addFormContact ($form) {
            let formData = new FormData($form)
            let warning = []
            let danger = []
            let serviceList = []

            for (var pair of formData.entries()) {
                
                let $input = document.getElementById(pair[0])
                
                if (validarEmpty(pair[1])) {
                    $input.classList.remove('input--danger')
                    $input.classList.add('input--warning')
                    
                    warning.push(pair[0])
                    console.log(pair[0], pair[1])
                } else {

                    $input.classList.remove('input--warning')
                
                    let valid = validate($input.type, pair[0], pair[1])
                    
                    if ( valid.validation ) {
                        $input.classList.remove('input--danger')
                        $input.parentElement.classList.remove("input__error"); 
                        $input.parentElement.setAttribute("data-error", ""); 
                    } else {
                        danger.push(pair[0])
                        $input.classList.add('input--danger')
                        $input.parentElement.classList.add("input__error"); 
                        $input.parentElement.setAttribute("data-error", valid.message); 
                    }
                    
                }    
            }

            if (warning.length > 0) {
                addMessage('This fields are required', 'warning')
            }
            
            if (danger.length == 0 && warning.length == 0) {

                let postData = await setPost(`${API_BASE}/api/add/add.php?type=contact` , formData)
                
                if (await postData) {
                    if (!postData.error) {
                        $form.classList.add('form__hidden')
                        $messageContact.classList.add('active_contact')
                        $messageContact.innerHTML = `Hi <strong>${postData.name},</strong> we will be in touch with you soon.`;                            
                    } else {
                        addMessage('Upss.. Some error on database', 'danger')
                    }
                }
            }
        }

    })()
        
})



