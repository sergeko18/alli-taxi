"use strict"

document.addEventListener('DOMContentLoaded' , function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        let messageData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone')
        }

        console.log(messageData);
        
        
        if (error === 0) {
            form.classList.add('_sending');
            let responce = await fetch('index.php', {
                method: 'POST',
                body: formData
            });
            if (responce.ok) {
                let result = await responce.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка')
                form.classList.remove('_sending');
            }
        } else {
            alert('Заполните обязательные поля')
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email') ) {
                if (!validateEmail(input)) {
                    formAddError(input);
                    error++;
                }                
            } 

            if (input.value === "") {
                formAddError(input);
                error++;
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //Email test
    function validateEmail(email) {
        let re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        return re.test(email.value);
    }

    
    

    
    

})
