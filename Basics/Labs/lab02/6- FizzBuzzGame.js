
document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>Fizz Buzz Game</h1>");

function writeFizzBuzz(number) {
    if (isNaN(number))
        return -1;
    var result = "";
    if (number % 3 == 0)
        result += "Fizz "
    if (number % 5 == 0)
        result += "buzz"

    return result.length > 0 ? result : "none";
}
var num = Number(prompt("Please, Enter Your Number : "));

document.writeln("<h2 style='color: red; '> " + writeFizzBuzz(num) + "</h2>");
