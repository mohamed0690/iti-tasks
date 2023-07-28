var index = 0;
interval = setInterval(() => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.style.backgroundColor = 'gray';
        circle.innerHTML = '';
    });
    const selectedCircle = document.getElementById(`circle${++index}`);
    selectedCircle.style.backgroundColor = getCircleColor(index);
    selectedCircle.innerHTML = getCircleText(index);
    if (index == 3)
        index = 0;

}, 1000);


function getCircleColor(circleNumber) {
    switch (circleNumber) {
        case 1:
            return 'green';
        case 2:
            return 'yellow';
        case 3:
            return 'red';
        default:
            return 'white';
    }
}

function getCircleText(circleNumber) {
    switch (circleNumber) {
        case 1:
            return 'Ready';
        case 2:
            return 'Steady';
        case 3:
            return 'Go';
        default:
            return '';
    }
}
