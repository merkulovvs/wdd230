const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const ermsg = document.querySelector("#errorMsg");

pass2.addEventListener('focusout', checkMsg)

function checkMsg() {
    if (pass1.value !== pass2.value) {
        pass1.value=""
        pass2.value=""
        pass1.focus()
        ermsg.textContent="Passwords do not match. Please re-enter your password"
    } else {
        ermsg.textContent=""
    }
}

const rangevalue = document.querySelector("#range");
const range = document.querySelector("#r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}