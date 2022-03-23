Countries.forEach(e => {
    var card = document.createElement("div");
    card.className = "country-card";
    card.style = `background-image: linear-gradient(0deg, rgba(2,0,36,0.8) 0%, rgba(2,0,31,0.8) 10%, rgba(2,0,25,0.225) 40%, rgba(0,0,0,0) 100%), url("assets/countries/${e}.jpg");`;
    var country = document.createElement("span");
    country.innerHTML = e;
    country.className = "country-card_text";
    card.appendChild(country);
    document.getElementById("countries-grid").appendChild(card);
});
