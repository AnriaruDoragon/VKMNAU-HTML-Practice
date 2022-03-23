Countries.forEach(e => {
    var card = document.createElement("div");
    card.className = "hotel-card";
    card.style = `background-image: linear-gradient(0deg, rgba(2,0,36,0.8) 0%, rgba(2,0,31,0.8) 10%, rgba(2,0,25,0.225) 40%, rgba(0,0,0,0) 100%), url("assets/hotels/${e}.jpg");`;
    var text = document.createElement("div");
    text.className = "card-details";
    var country = document.createElement("span");
    country.className = "card-details_country";
    country.innerHTML = e;
    text.appendChild(country);
    var price = document.createElement("span");
    price.className = "card-details_price";
    price.innerHTML = randomNumber(7, 75) + " " + randomNumber(100, 999) + " грн";
    text.appendChild(price);
    card.appendChild(text);
    document.getElementById("hotels-grid").appendChild(card);
});
