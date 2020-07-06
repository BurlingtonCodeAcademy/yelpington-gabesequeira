let myMap = L.map("map").setView([44.4759, -73.2121], 13);
let restList = document.getElementById('restList')

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(myMap);

//function to get json object from API, place a marker at its place on the map, and create links in the sidebar
let restLink = document.getElementsByTagName('a');
restLink.onclick = `/restaurant#${restLink.id}`

getJsonAndPlaceMarkers();
async function getJsonAndPlaceMarkers() {
    fetch("https://yelpingtonapi.herokuapp.com/api/restaurants")
      .then((res) => res.json())
      .then((jsonObjs) => {
        console.log(jsonObjs);
        for (let object of jsonObjs) {
            let id = object.id;
            let coordinates = object.coords;
            let latLngArr = [coordinates[0], coordinates[1]];
    
            let marker = L.marker(latLngArr).addTo(myMap);
            marker.id = id;
            marker.bindPopup(`<b>${object.name}</b>`).openPopup();
            
          let listItem = `<a href="/restaurant#${id}" id="${id}">${object.name}</a>`
          restList.innerHTML += listItem;
        }
      })
  }