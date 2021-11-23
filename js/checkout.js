var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');
var email = document.querySelector(".mail");
// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');
var errorMail = document.getElementById('errorMail');


// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    errorName.style.display = 'none';
    errorPhone.style.display = 'none';
    errorPassword.style.display = 'none';
    errorMail.style.display = 'none';
    name1.classList.remove('is-invalid');
    last.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    password.classList.remove('is-invalid');
    address.classList.remove('is-invalid');
    phone.classList.remove('is-invalid');

    
    const regEx = /^[A-Za-z]+$/;
    const numbers = /^[0-9]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    
    // Validación nombre
    if (name1.value == '' || name1.value.length < 3 || !name1.value.match(regEx)) {
        name1.classList.add('is-invalid');
        errorName.style.display = 'block';
    }
    // Validación last name
    if (last.value == '' || last.value.length < 3 || !last.value.match(regEx)) {
        last.classList.add('is-invalid');
        errorName.style.display = 'block';
    }
    // Validación Email
    if (email.value == '' || email.value.length < 3 || !email.value.match(mailRegex)) {
        email.classList.add('is-invalid');
        errorMail.style.display = 'block';
    }
    // Validación Password 
    if (password.value == '' || password.value.length < 3 || !password.value.match(passwordRegex)) {
        password.classList.add('is-invalid');
        errorPassword.style.display = 'block';
    }
    // Validación Address   
    if (address.value == '' || address.value.length < 3) {
        address.classList.add('is-invalid');
    }
    // Validación Phone
    if (phone.value == '' || phone.value.length < 3 || !phone.value.match(numbers)) {
        phone.classList.add('is-invalid');
        errorPhone.style.display = 'block';
    } else {
        return true;
    }
    alert('Todos los campos son requeridos y han de tener un mínimo de 3 caracteres');
}




