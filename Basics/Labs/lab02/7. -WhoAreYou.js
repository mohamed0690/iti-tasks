document.writeln("<h1 style='border-bottom: 2px solid black; padding-bottom: 30px;'>Who Are You Game</h1>");

function doYouFly() {
    var answer = confirm("Do You Fly?")
    return answer ? areYouWild("Eagle", "Parrot") : doYouLiveUnderSea();
}
function areYouWild(value1, value2) {
    var answer = confirm("Are You Wild?")
    return answer ? value1 : value2;
}
function doYouLiveUnderSea() {
    var answer = confirm("Do You Live Under Sea?")
    return answer ? areYouWild("Shark", "Dolphin") : areYouWild("Loin", "Cat");
}
document.writeln("<h2 style='color: red; '> " + doYouFly() + "</h2>");



