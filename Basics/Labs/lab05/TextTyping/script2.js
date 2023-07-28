var typingDiv = document.querySelector(".write");

var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eius libero animi laboriosam? Officiis totam aliquam accusamus facere fuga rerum!";
var index = 0;
var interval;
function typingEffect() {
    interval = setInterval(() => {
        typingDiv.innerHTML += str[index++];
        if (index == str.length) {
            clearInterval(interval)
            window.close();
        }
    }, 100);
}
typingEffect();