
var myForm = document.getElementById('myForm');
var username = document.getElementById('name');
var age = document.getElementById('age');
var male = document.getElementById('male');
var female = document.getElementById('female');
var color = document.getElementById('fav-color');

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var requiredInputs = myForm.querySelectorAll('input[required]');
    var isValid = true;
    requiredInputs.forEach(input => {
        if (!input.value.trim())
            isValid = false;
    });
    if (isValid) {
        myForm.submit();
        goTwoHomePage();

    }
});
function goTwoHomePage() {
    setCookie('username', username.value, 1);
    setCookie('age', age.value, 1);
    setCookie('color', color.value, 1);
    setCookie('gender', male.checked, 1);
    setCookie('visited', 0, 1);
    window.open('./home.html', '_self');
}

