

const fnames = document.forms['form']['fname'];
const lname = document.forms['form']['lname'];
const password1 = document.forms['form']['password'];
const address1 = document.forms['form']['address'];
const email = document.forms['form']['mail'];
const phone = document.forms['form']['phone'];
const minimo = 3;
const maximo = 8;
const patternLetra = new RegExp('^[A-Z]+$', 'i');
const patternNumero = new RegExp('[0-9]+');
const patternContraseña = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
const patternDireccion = new RegExp('[A-Za-z0-9]{3,40}');
const patternEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

// Exercise 8
function validate() {
    let isValid = true;
    if (!email.value) {
        isValid = false;
        email.style.borderColor = 'red';
        document.getElementById("feedback-email").style.display = "";
    } else {
        if (email.value.length < minimo) {
            isValid = false;
            email.style.borderColor = 'red';
        } else {
            if (!patternEmail.test(email.value)) {
                isValid = false;
                email.style.borderColor = 'red';
            } else {
               email.style.borderColor = 'palegreen';
                document.getElementById("feedback-email").style.display = "none";
            }
        }
    }



    if (!fnames.value) {
        isValid = false;
        fnames.style.borderColor = 'red';
        document.getElementById("feedback-fname").style.display = "";
    } else {
        if (fnames.value.length < minimo) {
            isValid = false;
            fnames.style.borderColor = 'red';
        } else {
            if (!patternLetra.test(fnames.value)) {
                isValid = false;
                fnames.style.borderColor = 'red';
            } else {
                fnames.style.borderColor = 'palegreen';
                document.getElementById("feedback-fname").style.display = "none";
            }
        }
    }

    if (!lname.value) {
        isValid = false;
        lname.style.borderColor = 'red';
        document.getElementById("feedback-lname").style.display = "";
    } else {
        if (lname.value.length < minimo) {
            isValid = false;
            lname.style.borderColor = 'red';
        } else {
            if (!patternLetra.test(lname.value)) {
                isValid = false;
                lname.style.borderColor = 'red';
            } else {
                lname.style.borderColor = 'palegreen';
                document.getElementById("feedback-lname").style.display = "none";
            }
        }
    }

    if (!phone.value) {
        isValid = false;
        phone.style.borderColor = 'red';
        document.getElementById("feedback-phone").style.display = "";
    } else {
        if (phone.value.length < minimo) {
            isValid = false;
            phone.style.borderColor = 'red';
        } else {
            if (!patternNumero.test(phone.value)) {
                isValid = false;
                phone.style.borderColor = 'red';
            } else {
                phone.style.borderColor = 'palegreen';
                document.getElementById("feedback-phone").style.display = "none";
            }
        }
    }

    if (!address1.value) {
        isValid = false;
        address1.style.borderColor = 'red';
        document.getElementById("feedback-address").style.display = "";
    } else {
        if (address1.value.length < minimo) {
            isValid = false;
            address1.style.borderColor = 'red';
        } else {
            if (!patternDireccion.test(address1.value)) {
                isValid = false;
                address1.style.borderColor = 'red';
            } else {
                address1.style.borderColor = 'palegreen';
                document.getElementById("feedback-address").style.display = "none";
            }
        }
    }

    if (!password1.value) {
        isValid = false;
        password1.style.borderColor = 'red';
        document.getElementById("feedback-password").style.display = "";
    } else {
        if ((password1.value.length < minimo) && (password1.value.length > maximo)) {
            isValid = false;
            password1.style.borderColor = 'red';
        } else {
            if (!patternContraseña.test(password1.value)) {
                isValid = false;
                password1.style.borderColor = 'red';
            } else {
                password1.style.borderColor = 'palegreen';
                document.getElementById("feedback-password").style.display = "none";
            }
        }
    }

    return isValid;
}

function verificar() {
    const valido = validate();
    if (!valido) {
        console.log('Hay algun campo erroneo');
    } else {
        console.log('Todos los campos son correctos');
    }
}

