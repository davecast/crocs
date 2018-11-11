"use strict"
$(window).on("load", ()=>{
    
            const $formQuote = document.getElementById('formQuote')
            const $submit__btn = document.getElementById('submit__btn')
            let $checkboxes = document.getElementById('checkboxes');

            (async function formQuote (){

                $formQuote.addEventListener('submit', (e) => {
                    e.preventDefault();
                    addForm($formQuote)
                })

                $submit__btn.addEventListener('click', (e) => {
                    addForm($formQuote)
                })     

                async function addForm ($form) {
                    let formData = new FormData($form)
                    let warning = []
                    let danger = []
                    let serviceList = []

                    for (var pair of formData.entries()) {
                      
                        if (pair[0] == 'services[]') {
                            serviceList.push(pair[1])
                        } else {
                            let $input = document.getElementById(pair[0])

                            if (validarEmpty(pair[1])) {
                                $input.classList.remove('input--danger')
                                $input.classList.add('input--warning')
                               
                                warning.push(pair[0])

                            } else {
                            
                                $input.classList.remove('input--warning')
                            
                                let valid = validate($input.type, pair[0], pair[1])

                                if ( valid.validation ) {
                                    // $input.parentElement.classList.remove('input-danger')
                                    // $input.parentElement.setAttribute("data-content", ""); 
                                } else {
                                    danger.push(pair[0])
                                    // $input.parentElement.classList.add('input-danger')
                                    // $input.parentElement.setAttribute("data-content", valid.message); 
                                }
                                
                                
                            }
                        }
                        
                    }

                    if (serviceList.length == 0) {
                        $checkboxes.classList.add('input--warning')
                    } else {
                        $checkboxes.classList.remove('input--warning')
                    }
                    if (warning.length > 0) {
                        addMessage('Estos campos son requeridos', 'warning')
                    }

                    /* 
                    if (danger.length == 0 && warning.length == 0) {
                        $save.value = "Grabando...";
                        $save.disabled = true

                        let postData = await setPost(`${API_BASE}/admin/callers/add.php?type=${type}` , formData)
                                                 
                        if (await postData) {
                            if (!postData.error) {
                                location.replace(`${API_BASE}/admin/clasification/?type=${type}&sussess=${postData.name}`)
                            } else {
                                addMessage('Ocurrio un el error al grabar ', 'danger')
                            }
                        }
                    }*/
                }

            })()
        
})




