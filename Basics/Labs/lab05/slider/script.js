var slider = document.querySelector('.slider');
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var startBtn = document.querySelector('.start-btn');
var stopBtn = document.querySelector('.stop-btn');

var img = document.getElementById('my-img')
var images = ['./imgs/chefs-1.jpg', './imgs/chefs-2.jpg', './imgs/chefs-3.jpg'];
var slideIndex = 0;
var  interval;
startBtn.addEventListener("click",function(){
  interval= setInterval(function(){
    for (var i = 0; i < images.length; i++) {
      if (String(img.src).includes(images[i].replace('.', ''))) {
        index = i;
      }
    }
    img.src = images[pervIndex(index, 0, 3)];
  }
  ,1000)  
})
stopBtn.addEventListener("click",()=>{
  console.log(interval);
clearInterval(interval);
})
var index = 0;
prevBtn.addEventListener("click", function () {
  for (var i = 0; i < images.length; i++) {
    if (String(img.src).includes(images[i].replace('.', ''))) {
      index = i;
    }
  }
  img.src = images[pervIndex(index, 0, 3)];
})
nextBtn.addEventListener("click", function () {
  for (var i = 0; i < images.length; i++)
    if (String(img.src).includes(images[i].replace('.', '')))
      index = i;
  img.src = images[nextIndex(index, 0, 2)];
})
function pervIndex(index, start, end) {
  if (index == end)
    return start;
  else if (index == start)
    return end - 1;
  return index - 1;
}
function nextIndex(index, start, end) {
  if (index == end)
    return start;
  else if (index == start)
    return end - 1;
  return index + 1;
}