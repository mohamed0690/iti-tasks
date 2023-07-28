document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>The Second Min Max Values in Array</h1>");

function secondMinMax(arr) {
    var sortArray = arr.slice(0).sort(function (a, b) {
        return a - b;
    });
    return {secondMin : sortArray[1] ,secondMax:sortArray[sortArray.length-2]};
}

function showSecondMinMax(myFun,arg) {
    var obj = myFun(arg);
    document.writeln("<h2 style='color: red; '>The Second Min :  <span style='color: black;'>" + obj.secondMin + "</span></h2>");
    document.writeln("<h2 style='color: red; '>The Second Max :  <span style='color: black;'>" + obj.secondMax + "</span></h2>");

}

showSecondMinMax(secondMinMax, prompt("Enter Your Array : ").split(','));



