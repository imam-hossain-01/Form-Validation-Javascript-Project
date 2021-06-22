// Initial Selector
let form = document.getElementById('form_submit');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm-password');


// Form Validation
let formSubmit = function(e)
{
    e.preventDefault();

    nameValidation(name.value);
    emailValidation(email.value);
    phoneValidation(phone.value);
    passwordValidation(password.value, confirm_password.value);
}


// Name Validation
let nameValidation = function(input_value)
{
    let number = input_value.match(/[0-9]/g);
    let special_character = input_value.match(/[!@#$%^&*(){}_.+-]/g);
    let len = input_value.length;

    if(number == null && special_character == null && len >= 6){
        name.classList.add('is-valid');
        name.classList.remove('is-invalid');
    }
    else {
        name.classList.add('is-invalid');
        name.classList.remove('is-valid');
    }
}


// Email Validation
let emailValidation = function(input_value)
{
    let result = input_value.match(/(\w+\@)+(\w+\.)+\w+/g);

    if(result != null && input_value != '')
    {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
    }
    else {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    }

}


// Phone Validation
let phoneValidation = function(input_value)
{
    let result = input_value.match(/[^0-9]/g);

    if(result == null && input_value != '' && input_value.length == 11)
    {
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
    }
    else {
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
    }

}


// Password Validation
let passwordValidation = function(value_1, value_2)
{
    let check_pass = value_1.match(/[a-z][A-Z][0-9]/g);

    if(value_1 == '')
    {
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
    }
    else if(value_1.length < 8 && check_pass == null)
    {
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
    }
    else if(value_1 !== value_2)
    {
        confirm_password.classList.add('is-invalid');
        confirm_password.classList.remove('is-valid');
    }
    else {
        password.classList.add('is-valid');
        password.classList.remove('is-invalid');
        confirm_password.classList.add('is-valid');
        confirm_password.classList.remove('is-invalid');
    }
}


// Call Function
form.addEventListener('submit', formSubmit);