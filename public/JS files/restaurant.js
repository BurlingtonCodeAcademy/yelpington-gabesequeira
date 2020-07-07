let htmlName = document.getElementById('name');
let restId = document.location.hash.slice(1);
let name = document.getElementById('name')
let address = document.getElementById('address')
let category = document.getElementById('category')
let hours = document.getElementById('hours')
let phone = document.getElementById('phone')
let price = document.getElementById('price')
let website = document.getElementById('website')
let notes = document.getElementById('notes')
let latLngArr = []



fetch(`https://yelpingtonapi.herokuapp.com/api/restaurants/${restId}`)
.then((res) => res.json())
.then((object) => {
    name.innerText = `${object.name}`;
    address.innerText = `Address: ${object.address}`;
    category.innerText = `Category: ${object.category}`;
    hours.innerText = `Hours: ${object.hours}`;
    phone.innerText = `Phone: ${object.phone}`;
    price.innerText = `Price: ${object.price}`;
    website.innerHTML = `Website: <a>${object.website}</a>`;
    notes.innerText = `Notes: `;
    object.notes.forEach((element) => {
        let note = document.createElement("li");
        note.innerText = element;
        notes.appendChild(note)
    })
    let coordinates = object.coords;
    latLngArr = [coordinates[0], coordinates[1]];
    console.log(latLngArr)


}) 
let myMap = L.map("map").setView(Array.from(latLngArr), 13);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(myMap);