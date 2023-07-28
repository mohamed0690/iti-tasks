document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>Sorting Array Ascending and Descending</h1>");

function sortArrayNumbers(arr) {
    var descending = arr.slice(0).sort(function (a, b) {
        return b - a;
    });;
    var ascending = arr.slice(0).sort(function(a, b) {
        return a - b;
    });
    return { ascending, descending };
}

function showSortArrayNumbers(myFun, arg) {
    var values = arg.slice(0);
    var obj = myFun(values);
    document.writeln("<h2 style='color: red; '>The Values of Array  :  <span style='color: black;'>" + arg + "</span></h2>");
    document.writeln("<h2 style='color: red; '>The Values of ascending:  <span style='color: black;'>" + obj.ascending + "</span></h2>");
    document.writeln("<h2 style='color: red; '>The Values of descending:  <span style='color: black;'>" + obj.descending + "</span></h2>");

}

showSortArrayNumbers(sortArrayNumbers, prompt("Enter Your Array : ").split(','));



