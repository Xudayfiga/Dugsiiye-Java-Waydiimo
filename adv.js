const form = document.querySelector("#registrationForm");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const error = document.querySelector("#error");
const success = document.querySelector("#success");



// 

form.addEventListener('submit', function (event) {

    event.preventDefault();
    const kaydin = validateUser()
})

// shaqada wa al kala qyabbinayaa,hal function ayaan samayn karnay se ..




// username


function validateUser() {
    if (username.value === '') {

        // error
        setError(username, 'is Qabo');
        return false


    } else {
        // success77

        setSuccess(username)
        return true
    }
}

function setError(element, message) {
    element.classList.add('invalid');
    element.classList.remove('valid');
}


function setSuccess(element) {
    element.classList.add('valid')
    element.classList.remove('invalid')
}