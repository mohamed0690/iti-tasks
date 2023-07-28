var btn_success = document.querySelector('.btn-success');
var btn_error = document.querySelector('.btn-error');
var div_message = document.querySelector('.message');
var message_header = document.querySelector('.message-header')
var message_body = document.querySelector('.message-body')
var message_icon = document.querySelector('.message-icon')
function getMessage(msg, icon) {
    div_message.style.opacity = "1";

    message_header.innerHTML = msg;
    message_body.innerHTML = "This is  a " + msg + " Message"
    message_icon.classList.add(icon);
    var color = (msg == "Success") ? "green" : "red"
    message_header.style['color'] = message_body.style['color'] = message_icon.style['color'] = color;
}
btn_success.addEventListener('click', function () {
    getMessage("Success", "fa-circle-check");
})
btn_error.addEventListener('click', function () {
    getMessage("Error", "fa-circle-xmark");
})
