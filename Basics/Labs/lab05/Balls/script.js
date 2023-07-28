var imgs = document.images;
var interval = null;
var imagesDiv = document.querySelector('.images');
var index = 0;
function pervIndex(index, start, end) {
    if (index == end)
        return start;
    else if (index == start)
        return end - 1;
    return index - 1;
}

imagesDiv.addEventListener("mouseenter", () => {
    clearInterval(interval)
})

imagesDiv.addEventListener("mouseleave", () => {
    start();

})
function start() {
    imgs[pervIndex(index, 0, imgs.length)].src = './marbels/marble1.jpg';
    index = (index == imgs.length - 1) ? 0 : ++index;
    index--;
    interval = setInterval(() => {
        imgs[index].src = './marbels/marble3.jpg';
        imgs[pervIndex(index, 0, imgs.length)].src = './marbels/marble1.jpg';
        index = (index == imgs.length - 1) ? 0 : ++index;
    }, 500);
}
start();