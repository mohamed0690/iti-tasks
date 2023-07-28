// // Question 1.1
// var message = prompt("Enter your Message Please.");
// for (var i = 1; i <= 6; i++)
//     document.writeln("<h" + i + ">" + message + "<h" + i + "/>")
// //===============================================================\\

// // Question 1.2
// var sum = 0;
// do {
//     var value = Number(prompt("Enter Your Value"));
//     sum += value;
// } while (sum < 100 && value != 0)
// document.writeln("<h1>The Summations of Your Value = " + sum + "</h1>")
// //===============================================================\\

// // Question 2.1 
// var value = prompt("Enter Your String");
// var counter = 0;
// value = value.split('');
// for (var i = 0; i < value.length; i++) {
//     if (value[i] == 'e')
//         counter++;
// }
// document.writeln("<h1>The Numbers of 'e' is = " + counter + "</h1>")
// //===============================================================\\`

// // Question 2.3
// var value = prompt("Enter Your String");
// valueReverse = value.split('').reverse().join('');
// if (value == valueReverse) {
//     document.writeln("<h1>Your Word  is palindrome</h1>")
// }
// else {
//     if (value.toLowerCase() == valueReverse.toLowerCase()) {
//         var confirmSensitively = confirm("Are you Want Apply Sensitively ?");
//         if (!confirmSensitively)
//             document.writeln("<h1>Your Word  is palindrome</h1>")
//         else
//             document.writeln("<h1>Your Word  is Not palindrome</h1>")
//     }
//     else
//         document.writeln("<h1>Your Word  is Not palindrome</h1>")
// }

// Question 2.4


do {
    var nameRegex = new RegExp('^[A-Z][a-z]{0,20}$');
    var nameValue = prompt("Please ,Enter Your Name : \nE.g : Mohamed");
    var result = nameRegex.test(nameValue)
} while (!result)

do {
    var phoneRegex = new RegExp('^[0-9]{8}$');
    var phoneValue = prompt("Please ,Enter Your Phone : \nE.g : 38193381");
    var result = phoneRegex.test(phoneValue)
} while (!result)

do {
    var mobileRegex = new RegExp('^01[0125][0-9]{8}$');
    var mobileValue = prompt("Please ,Enter Your Mobile : \nE.g : 01159893363");
    var result = mobileRegex.test(mobileValue)
} while (!result)
do {
    var emailRegex = new RegExp('^[a-z]{3}@[0-9]{3}\.com$');
    var emailValue = prompt("Please ,Enter Your Email : \nE.g : moh@123.com");
    var result = emailRegex.test(emailValue)
} while (!result)

do {
    var date = new Date();
    var formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    var favColor = prompt("Please ,Enter Your Fav Color [red,green,blue] : ");
    document.writeln("<h2 style='color: " + favColor + "; '>Welcome my dear guest <span style='color: black;'>" + nameValue + "</span></h2>");
    document.writeln("<h2 style='color: " + favColor + "; '>Your Telephone Number is <span style='color: black;'>" + phoneValue + "</span></h2>");
    document.writeln("<h2 style='color: " + favColor + "; '>Your Mobile Number is <span style='color: black;'>" + mobileValue + "</span></h2>");
    document.writeln("<h2 style='color: " + favColor + "; '>Your Email is <span style='color: black;'>" + emailValue + "</span></h2>");
    document.writeln("<br/><br/><br/><br/><br/><br/><h2 style='color: " + favColor + "; '>Date today is  <span style='color: black;'>" + formattedDate + "</span></h2>");
} while (!(favColor == 'red' || favColor == 'green' || favColor == 'blue'))  