const Countries = [
    "Єгипет", "Туреччина", "Емірати",
    "Бразилія", "Домінікана", "Греція",
    "Шрі Ланка", "Мальдіви", "Куба",
    "Мексика", "Кіпр", "Чорногорія",
    "Австрія", "Азербайджан", "Албанія",
    "Андорра", "Антигуа", "Вірменія"
]

Countries.forEach(e => {
    var div = document.createElement("div");
    div.className = "country-card";
    div.style = `background-image: linear-gradient(0deg, rgba(2,0,36,0.8) 0%, rgba(2,0,31,0.8) 10%, rgba(2,0,25,0.225) 40%, rgba(0,0,0,0) 100%), url("assets/countries/${e}.jpg");`;
    var span = document.createElement("span");
    span.innerHTML = e;
    span.className = "country-card_text";
    div.appendChild(span);
    document.getElementById("countries-grid").appendChild(div);
});


