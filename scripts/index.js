function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}

const Countries = ["Туреччина", "Емірати", "Єгипет", "США", "Індія", "Малайзія", "Африка", "Греція"];
function randomCountry() {
    return Countries[Math.floor(Math.random() * Countries.length)];
}

document.getElementById("branches-number").innerHTML = randomNumber(100, 500);
document.getElementById("branches-cities-number").innerHTML = randomNumber(20, 150);
document.getElementById("flights-today-number").innerHTML = randomNumber(5, 300);
document.getElementById("todays-country").innerHTML = randomCountry();
document.getElementById("todays-price").innerHTML = randomNumber(9, 75) + " " + randomNumber(100, 999)
document.getElementById("hotels-count-n1").innerHTML = randomNumber(10, 80);
document.getElementById("hotels-count-n2").innerHTML = randomNumber(100, 999);
