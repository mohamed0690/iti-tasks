
document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>Character Game</h1>");
function getIndexs(string, character) {
    var arr = [];
    for (var i = 0; i < string.length; i++)
        if (string[i] == character)
            arr.push(i);
    return arr;
}
var string = prompt("Please, Enter Your String : ")
var character = prompt("Please, Enter character : ")
var indexs = getIndexs(string,character);
document.writeln("<h2 style='color: red; '>The Array   =   <span style='color: black;'>[" + indexs + "]</span></h2>");
