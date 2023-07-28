document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>Random Items From Array</h1>");

function getRandomItemsFromArray(arr) {
    if (arr.length < 2) {
        return -1;
    }
    var firstIndex = Math.floor(Math.random() * arr.length);
    var secondIndex = Math.floor(Math.random() * arr.length);
    while (secondIndex === firstIndex) {
        secondIndex = Math.floor(Math.random() * arr.length);
    }
    return [arr[firstIndex], arr[secondIndex]];
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var randomItems = getRandomItemsFromArray(arr);
document.writeln("<h2 style='color: red; '>The Array   =   <span style='color: black;'>[" + randomItems + "]</span></h2>");

