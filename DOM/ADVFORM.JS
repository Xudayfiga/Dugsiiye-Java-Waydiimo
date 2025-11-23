// const form = document.querySelector('#registrationForm')



// const username = document.querySelector('#username').value;
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
//     const confirmPassword = document.querySelector('#confirmPassword').value;
//     const error = document.querySelector('#error');const form = document.querySelector('#advancedRegistrationForm');

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const error = document.querySelector('#error');
const success = document.querySelector('#success');

// Event listeners for real-time validation
username.addEventListener('input', validateUsername);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    error.textContent = '';
    success.textContent = '';

    // Validate fields
    const isUsernameValid = validateUsername();
   
  

    // Focus on the first invalid field
    if (!isUsernameValid) {
        username.focus();
        return;
    } else if (!isEmailValid) {
        email.focus();
        return;}
  

    // If all fields are valid
    success.textContent = 'Registration successful!';
});

// Validation functions
function validateUsername() {
    if (username.value.trim() === '') {
        setError(username, 'Username is required.');
        return false;
    } else {
        setSuccess(username);
        return true;
    }
}



// Helper functions for setting error and success
function setError(element, message) {
    element.classList.add('invalid');
    element.classList.remove('valid');
    error.textContent = message;
}

function setSuccess(element) {
    element.classList.add('valid');
    element.classList.remove('invalid');
}
