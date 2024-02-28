function nombre() {
    var name = document.getElementById("name")
    var error = document.getElementById("nameError")

    if (name.value == "") {
        error.textContent = "Campo por rellenar"
        name.classList.add("backgroundError")
        name.classList.remove("backgroundCorrect")
        return false
    } 
    else {
        error.textContent = ""
        name.classList.remove("backgroundError")
        name.classList.add("backgroundCorrect")
        return true
    }
}

function validateEmail(){
    var email = document.getElementById("email")
    var error = document.getElementById("emailError")

    if (validadorCorreo(email.value)) {
        email.classList.remove("backgroundError")
        email.classList.add("backgroundCorrect")
        error.textContent = ""
        return true
    } 
    else {
        email.classList.add("backgroundError")
        email.classList.remove("backgroundCorrect")
        error.textContent = "Correo electronico no valido"
        return false
    }
}

function validadorCorreo(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    else{
        return false;
    }
}


document.getElementById("password").addEventListener("input", function () {
    var passwordInput = document.getElementById("password");
    var passwordInputValue = password.value;
    var passwordErrorMessage = document.getElementById("passwordError");

    var requirements = [
        /[a-z]/, // Letra minúscula
        /[A-Z]/, // Letra mayúscula
        /[0-9]/, // Dígito numérico
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ // Carácter especial
    ];

    var fulfilledRequirements = requirements.filter(function (requirement) {
        return requirement.test(passwordInputValue);
    });

    if (passwordInputValue.length < 8 || passwordInputValue.length > 15 || fulfilledRequirements.length !== 4) {
        passwordInput.style.backgroundColor = "red";
        passwordErrorMessage.style.color = "red";
        var missingRequirements = [];
        if (passwordInputValue.length < 8 || passwordInputValue.length > 15) {
            missingRequirements.push("Debe tener entre 8 y 15 caracteres")
        }
        if (!/[a-z]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos una letra minúscula")
        }
        if (!/[A-Z]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos una letra mayúscula")
        }
        if (!/[0-9]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos un dígito numérico")
        }
        if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passwordInputValue)) {
            missingRequirements.push("Debe contener al menos un carácter especial")
        }
        passwordErrorMessage.textContent = "Requisitos insuficientes: " + missingRequirements.join(', ')
    } else {
        passwordInput.style.backgroundColor = "green"
        passwordErrorMessage.textContent = ""
    }
});

function validateConfirmPassword() {
    var passwordInput = document.getElementById("password")
    var confirmPasswordInput = document.getElementById("confirmPassword")
    var confirmPasswordError = document.getElementById("confirmPasswordError")

    var password = passwordInput.value
    var confirmPassword = confirmPasswordInput.value

    if (password !== confirmPassword) {
        confirmPasswordInput.classList.remove("success")
        confirmPasswordInput.classList.add("error")
        confirmPasswordError.textContent = "Las contraseñas no coinciden."
        return false
    } 
    else {
        confirmPasswordInput.classList.remove("error")
        confirmPasswordInput.classList.add("success")
        confirmPasswordError.textContent = ""
        return true
    }
}

function validateAddress() {
    var address = document.getElementById("address")
    var error = document.getElementById("addressError")

    if (address.value == "") {
        error.textContent = "Campo por rellenar"
        address.classList.add("backgroundError")
        address.classList.remove("backgroundCorrect")
        return false
    } 
    else {
        error.textContent = ""
        address.classList.remove("backgroundError")
        address.classList.add("backgroundCorrect")
        return true
    }
}

function validateForm() {
    var errorEnviar = document.getElementById("address")
    if(nombre()){
        if(validateEmail()){
            if(validateConfirmPassword()){
                if(validateAddress()){
                    errorEnviar.textContent = ""
                    return true
                }
                else{
                    errorEnviar.textContent = "Error en el formulario"
                    return false
                }
            }
            else{
                errorEnviar.textContent = "Error en el formulario"
                return false
            }
        }
        else{
            errorEnviar.textContent = "Error en el formulario"
            return false
        }
    }
    else{
        errorEnviar.textContent = "Error en el formulario"
        return false
    }
}
