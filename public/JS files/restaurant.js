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

fetch(`https://yelpingtonapi.herokuapp.com/api/restaurants/${restId}`)
.then((res) => res.json())
.then((dataObj) => {
    console.log(dataObj)
    name.innerText = `${dataObj.name}`;
    address.innerText = `Address: ${dataObj.address}`;
    category.innerText = `Category: ${dataObj.category}`;
    hours.innerText = `Hours: ${dataObj.hours}`;
    phone.innerText = `Phone: ${dataObj.phone}`;
    price.innerText = `Price: ${dataObj.price}`;
    website.innerText = `Website: ${dataObj.website}`;
    notes.innerHTML = `Notes: ${dataObj.notes}`;
}) 
