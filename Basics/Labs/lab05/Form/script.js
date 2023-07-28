var submit = document.getElementById('submit');
var nameInput = document.getElementById('name');
var password = document.getElementById('password');
var email = document.getElementById('email');
var country = document.getElementById('country');
var datalistOptions = document.getElementById("counties").getElementsByTagName("option");
var male = document.getElementById('male');
var female = document.getElementById('female');
var tennis = document.getElementById('tennis');
var running = document.getElementById('running');
var football = document.getElementById('football');
var nameRegex = new RegExp('^[a-zA-Z]{2,10}[ ]{0,1}[a-zA-Z]{2,10}$');
var passwordRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$");
var emailRegex = new RegExp("^[A-Za-z0-9+_.-]{3,20}@[a-z]{3,6}[\.]{1}[a-z]{3,6}$");
var spans = document.querySelectorAll('span');
var flag = false;

nameInput.addEventListener("input", function () {
  validation(spans[0], nameInput, nameRegex.test(nameInput.value));
  checkValidation();
});

password.addEventListener("input", function () {
  validation(spans[1], password, passwordRegex.test(password.value));
  checkValidation();
});

email.addEventListener("input", function () {
  validation(spans[2], email, emailRegex.test(email.value));
  checkValidation();
});

male.addEventListener("change", function () {
  validation(spans[4], null, male.checked || female.checked);
  checkValidation();
});

female.addEventListener("change", function () {
  validation(spans[4], null, male.checked || female.checked);
  checkValidation();
});

tennis.addEventListener("change", function () {
  validationCheck(spans[5]);
  checkValidation();
});

running.addEventListener("change", function () {
  validationCheck(spans[5]);
  checkValidation();
});

football.addEventListener("change", function () {
  validationCheck(spans[5]);
  checkValidation();
});

country.addEventListener("input", function () {
  for (var i = 0; i < datalistOptions.length; i++) {
    if (datalistOptions[i].value.toLowerCase() === country.value.toLowerCase()) {
      validation(spans[3], country, true);
      checkValidation();
      break;
    } else {
      validation(spans[3], country, false);
      checkValidation();
    }
  }
});

submit.addEventListener('click', function (e) {
  e.preventDefault();
  document.writeln("<h1>Your Form is Valid</h1>");
});

function validation(span, element, validator) {
  if (validator) {
    span.style.opacity = '0';
    if (element) {
      element.style.border = '2px solid green';
    }
    return true && elementValue();
  } else {
    if (element) {
      element.style.border = '2px solid red';
    }
    span.style.opacity = '1';
    return false;
  }
}

function validationCheck(span) {
  var counter = tennis.checked + running.checked + football.checked;
  span.style.opacity = counter >= 2 ? "0" : "1";
}

function checkValidation() {
  for (var i = 0; i < spans.length && elementValue(); i++) {
    if (!spans[i].style.opacity === '1') {
      submit.disabled = true;
      break;
    }
    submit.disabled = false;
  }
}
function elementValue() {

  if (!nameInput.value || !password.value || !country.value || (!male.checked && !female.checked))
    return false;

  if ((tennis.checked + football.checked + running.checked) < 2)
    return false;
  return true
}
