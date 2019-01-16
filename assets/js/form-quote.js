"use strict"
$(window).on("load", ()=>{
    
    const $formQuote = document.getElementById('formQuote')
    const $submit__btn = document.getElementById('submit__btn')
    let $checkboxes = document.getElementById('checkboxes')
    const $messageQuote = document.getElementById('messageQuote')
    const $date__box = document.getElementById('date__box')
    const $quoteBtn = document.getElementById('quoteBtn')

    let ua = window.navigator.userAgent;
    let sendFormQuote = false
    let iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    let webkit = !!ua.match(/WebKit/i);
    let iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    
    if (iOSSafari) {
        const mq = window.matchMedia( "(max-width: 575.98px)" );
        mq.addListener(widthMedia);
        widthMedia(mq);
        function widthMedia (mq) {
            let inputHtml = "";

            if (mq.matches) {
                inputHtml = `<label class="label__small" for="date">When would you need the service?</label><input class="input" name="date" type="date" id="date" />`
                $date__box.innerHTML = inputHtml 	
            } else {
                inputHtml = `<input class="input" name="date" placeholder="When would you need the service?" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" />`
                $date__box.innerHTML = inputHtml 		
            }
        }
    } else {
        let inputHtml = `<input class="input" name="date" placeholder="When would you need the service?" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" />`
        $date__box.innerHTML = inputHtml 
    }
    

    (async function formQuote (){

        $formQuote.addEventListener('submit', (e) => {
            e.preventDefault();
            addForm($formQuote)
        })

        $submit__btn.addEventListener('click', (e) => {
            if (!sendFormQuote) {
                addForm($formQuote)
                console.log('hola')
            }
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
                    if (pair[0] != 'g-recaptcha-response') {
                        if (validarEmpty(pair[1], pair[0])) {
                            $input.classList.remove('input--danger')
                            $input.classList.add('input--warning')
                            
                            warning.push(pair[0])

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
                }
                
            }

            if (serviceList.length == 0) {
                $checkboxes.classList.add('input--warning')
                warning.push('check')
            } else {
                $checkboxes.classList.remove('input--warning')
            }
            if (warning.length > 0) {
                addMessage('This fields are required', 'warning')
            }
            if (warning.length == 0 && !captchaQuote && danger.length == 0) {
                addMessage('reCAPTCHA are required', 'warning')
            }
            
            if (danger.length == 0 && warning.length == 0 && captchaQuote) {
                $quoteBtn.innerText = 'Loading'
                sendFormQuote = true

                let postData = await setPost(`${API_BASE}/api/add/add.php?type=quote` , formData)
                
                if (await postData) {
                    if (!postData.error) {
                        $form.classList.add('form__hidden')
                        $messageQuote.classList.add('active__quote')
                        $messageQuote.innerHTML = `<p>Hi your quote has be send.</p>`;                            
                    } else {
                        addMessage('Upss.. Some error on database', 'danger')
                    }
                }
            }
        }

    })()
        
})




