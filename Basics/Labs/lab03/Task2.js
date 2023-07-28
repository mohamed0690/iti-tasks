document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>Convert String To Capitalize</h1>");

function convertStringToCapitalize(str) {
    var stringList = str.split(' ');
    for (let i = 0; i < stringList.length; i++) {
        stringList[i] = stringList[i][0].toUpperCase() + stringList[i].slice(1);
    }
    return stringList.join(' ');
}

// showConvertStringToCapitalize(convertStringToCapitalize, prompt("Enter Your String : "));
var result=convertStringToCapitalize(prompt("Please Enter Your String:"));
document.writeln("<h2 style='color: red; '>The New String :  <span style='color: black;'>" + result + "</span></h2>");






















