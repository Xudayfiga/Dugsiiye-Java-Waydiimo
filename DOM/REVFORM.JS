const form = document.querySelector('#registrationForm')

// 

form.addEventListener ('submit', function(event){

    event.preventDefault()
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;
    const error = document.querySelector('#error');
    // 

    if (username === ''){
        error.textContent = 'username is required'
        console.log ('nooo')
        return
    }

    if (password.length < 7 ){
        error.textContent = 'password is reuired'
        console.log('noaosdofoasdf')
        return
    }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailPattern)) {
        error.textContent = 'Please enter a valid email address.';
        return;
    }


})
