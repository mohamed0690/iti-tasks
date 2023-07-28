document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>Adding -- Multplying -- and dividing 3 values</h1>");

function arrMathOprerations(arr) {
    var sum = 0;
    var mult = 1;
    var div = 1;
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        mult *= Number(arr[i]);
        div = Number(arr[i] / div);
    }
    return { sum, mult, div };
}
function showArrMathOprerations(myFun, arg) {
    var obj = myFun(arg);
    document.writeln("<h2 style='color: red; '>Sum is The Values :  <span style='color: black;'>" + obj.sum + "</span></h2>");
    document.writeln("<h2 style='color: red; '>mult is The Values :  <span style='color: black;'>" + obj.mult + "</span></h2>");
    document.writeln("<h2 style='color: red; '>div is The Values :  <span style='color: black;'>" + obj.div + "</span></h2>");
}

showArrMathOprerations(arrMathOprerations, prompt("Enter Your Array : ").split(','));






















