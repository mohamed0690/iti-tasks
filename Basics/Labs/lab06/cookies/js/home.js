if (!getCookie('visited')) {
    window.open('./index.html', '_self');
} else {

    var img = document.getElementsByTagName('img')[0];
    var span = document.getElementsByTagName('span');
    var times = Number(getCookie('visited'));
    var newTimes = ++times;
    setCookie('visited', newTimes, 5);
    if (getCookie('gender') === 'true') img.setAttribute('src', './imgs/1.jpg')
    else img.setAttribute('src', './imgs/2.jpg')

    span[1].innerHTML = Number(getCookie('visited'));
    span[1].style.color = getCookie('color')
    span[0].style.color = getCookie('color')
    span[0].innerHTML = getCookie('username');

    function logout() {
        deleteCookie('username');
        deleteCookie('age');
        deleteCookie('color');
        deleteCookie('gender');
        deleteCookie('visited');
        window.open('./index.html', '_self');
    }
}