function changeCircleColor() {
    const circleNumberInput = document.getElementById('circleNumber');
    const circleNumber = parseInt(circleNumberInput.value);
    const circles = document.querySelectorAll('.circle');

    if (circleNumber < 1 || circleNumber > 3 || isNaN(circleNumber)) {
        alert('Please enter a valid number between 1 and 3.');
        return;
    }

    circles.forEach(circle => {
        circle.style.backgroundColor = 'gray';
        circle.innerHTML = '';
    });

    const selectedCircle = document.getElementById(`circle${circleNumber}`);
    selectedCircle.style.backgroundColor = getCircleColor(circleNumber);
    selectedCircle.innerHTML = getCircleText(circleNumber);
}

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
