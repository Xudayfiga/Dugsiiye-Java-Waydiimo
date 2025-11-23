const form = document.querySelector('#registrationForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const error = document.querySelector('#error');
const succ = document.querySelector('#succ');

form.addEventListener("submit", function (event) {

    event.preventDefault()
    error.textContent=""
    succ.textContent=""

    // run
// user
    const isValidateUser = validUsername()
    const isValidateEmail = validateEmail()
    const isvalidatePass = validatePass()
    const isvalidateConfirm =validateConfirm()
if (!isValidateUser){
    username.focus()
    return
} else if (!isValidateEmail){
    email.focus()
    return
} else if (!isvalidatePass){
    password.focus()
    return
} else if (!isvalidateConfirm){
    confirmPassword.focus()
    return
}



// 
succ.textContent = 'registration successfull'
})

// username

function validUsername() {
    if (username.value.trim() === '') {

        // errr
        setError(username, 'username is required')
        return false
    } else {
        // succ
        setSucc(username)
        return true
    }
}

// email

function validateEmail(){
       const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       if (!email.value.match(emailPattern)){
        setError(email, "please enter a valid email")
        return false
       }
       else{
        setSucc(email)
        return true
       }

}
// password

function validatePass(){
    if(password.value.length<8){
        setError(password, 'password must be at least 8 character long')
        return false
    }else{
        setSucc(password)
        return true
    }
}
// confirm=[]

function validateConfirm(){
    if (password.value !== confirmPassword.value){
        setError(confirmPassword, "must be match")
        return false
    } else{
        setSucc(confirmPassword)
      return true
    }
}

// 






// functionkii aan diyarsaday


function setError(element, massege) {
    element.classList.add('invalid')
    element.classList.remove('valid')
    error.textContent = massege
}

function setSucc(element) {
    element.classList.add('valid')
        element.classList. remove('invalid')

}