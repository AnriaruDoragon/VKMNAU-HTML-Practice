const Countries = [
    "Єгипет", "Туреччина", "Емірати",
    "Бразилія", "Домінікана", "Греція",
    "Шрі Ланка", "Мальдіви", "Куба",
    "Мексика", "Кіпр", "Чорногорія",
    "Австрія", "Азербайджан", "Албанія",
    "Андорра", "Антигуа", "Вірменія"
]

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}

function randomCountry() {
    return Countries[Math.floor(Math.random() * Countries.length)];
}
