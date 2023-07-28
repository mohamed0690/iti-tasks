function getUsers() {
    var xml = new XMLHttpRequest();
    xml.open("GET", "https://jsonplaceholder.typicode.com/users");
    xml.send();
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            var users = JSON.parse(xml.response);
            generateTableRows(users);
        }
    };
}

function generateTableRows(users) {
    var tbody = document.querySelector('tbody');
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var address = user.address.street + ", " + user.address.suite + ", " + user.address.city + ", " + user.address.zipcode;
        var company = user.company.name + ", " + user.company.catchPhrase + ", " + user.company.bs;
        var row = "<tr>" +
            "<td>" + user.id + "</td>" +
            "<td>" + user.name + "</td>" +
            "<td>" + user.username + "</td>" +
            "<td>" + user.email + "</td>" +
            "<td>" + address + "</td>" +
            "<td>" + user.phone + "</td>" +
            "<td>" + user.website + "</td>" +
            "<td>" + company + "</td>" +
            "</tr>";
        tbody.innerHTML += row;
    }
}
getUsers();
