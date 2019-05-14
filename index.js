const nameInput = document.getElementById('name');
const zipcodeInput = document.getElementById('zipcode');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

nameInput.addEventListener('blur', validateName);
zipcodeInput.addEventListener('blur', validateZipcode);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);

function validateHelper(re, input) {
  if(!re.test(input.value)) {
    input.classList.add('is-invalid');
  } else {
    input.classList.remove('is-invalid');
  }
}

function validateName() {
  const re = /^[a-zA-Z]{2,10}$/;
  validateHelper(re, nameInput);
}

function validateZipcode() {
  const re =/^[0-9]{5}(-[0-9]{4})?$/;
  validateHelper(re, zipcodeInput);
}

function validateEmail() {
  const re =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,5})$/;
  validateHelper(re, emailInput);
}

function validatePhone() {
  const re =/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  validateHelper(re, phoneInput);
}
