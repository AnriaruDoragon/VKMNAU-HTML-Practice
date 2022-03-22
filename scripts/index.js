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
document.getElementById("todays-price").innerHTML = randomNumber(14000, 75000);
