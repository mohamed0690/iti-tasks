document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>A Circle Area</h1>");
function getCircleArea(radius) {
    return isNaN(radius) ? -1 : Math.PI * (radius ** 2);
}
function getCirclePerimeter(radius) {
    return isNaN(radius) ? -1 : Math.PI * radius * 2;
}
var input = Number(prompt("Please, Enter the Circle Radius: "));
var area = getCircleArea(input);
var perimeter = getCirclePerimeter(input);

document.writeln("<h2 style='color: red; '>The Area of your Circle  =   <span style='color: black;'>" + area + "</span></h2>");
document.writeln("<h2 style='color: red; '>The perimeter of your Circle  =   <span style='color: black;'>" + perimeter + "</span></h2>");
//------------------------------------------------------------------------------------------------------

document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>A Square Root</h1>");
function getSquareRoot(num) {
    return isNaN(num) ? -1 : Math.sqrt(num);
}
var sqrt = getSquareRoot(Number(prompt("Please, Enter Number to Calculate Square Root : ")));
alert("The Square Root of your Number  = " + sqrt)
document.writeln("<h2 style='color: red; '>The Square Root of your Number  =   <span style='color: black;'>" + sqrt + "</span></h2>");
//------------------------------------------------------------------------------------------------------


document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>A cos of Angle</h1>");
function getCosOfAngle(angle) {
    return isNaN(angle) ? -1 : Math.cos((angle * Math.PI) / 180);
}
var angle = Number(prompt("Please, Enter Angle to Calculate cos : "))
var cos = getCosOfAngle(angle);
document.writeln("<h2 style='color: red; '>The cos of " + angle + "º" + "  =   <span style='color: black;'>" + cos.toFixed(2) + "</span></h2>");
//------------------------------------------------------------------------------------------------------
