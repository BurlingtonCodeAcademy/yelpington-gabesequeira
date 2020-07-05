let myMap = L.map("map").setView([44.4759, -73.2121], 13);
let latLngArray = [];

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(myMap);

let restLink = document.getElementsByTagName('a');
restLink.onclick = `/restaurant#${restLink.id}`
// getJsonThenPlaceMarkers()
getJson();
async function getJson() {
    fetch("https://yelpingtonapi.herokuapp.com/api/restaurants")
      .then((res) => res.json())
      .then((jsonObjs) => {
        console.log(jsonObjs);
        for (let object of jsonObjs) {
            let id = object.id;
          placeMarker(id);
        }
      });
  }

//   getData();
async function getData() {
  response = await fetch('/api/all');
  data = await response.json();
  console.log(data)
}

//   placeMarker(`ahli-babas-kabob`)

async function placeMarker(id) {
    let urlAddress = encodeURI(id)

    fetch(`https://yelpingtonapi.herokuapp.com/api/restaurants/${urlAddress}`)
    .then((res) => res.json())
    .then(json => {
        console.log(json[0]);
        let coordinates = json.coords;
        let latLngArr = [coordinates[0], coordinates[1]];

        L.marker(latLngArr).addTo(myMap)
    })
}

    //     newMarker.addEventListener("click", () => {
    //       document.location = "/restaurant"; //Look at the routing lesson in our course
          // send URL fragment (the part designated by a hash mark - representation of
          //the object using the object.id (joes-diner) to /restaurant#${object.id}
          // or /restaurant#joes-diner
          //watch the videos from this week for tutorials!!!!
//         });
//       });
//   }

// api = ('https://yelpingtonapi.herokuapp.com/api/restaurants')

// let ahliBabas = L.marker([44.4758073, -73.2150059]).addTo(myMap);
// ahliBabas.bindPopup(`Ahli Baba's Kabob`).openPopup();

// let augustFirst = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// augustFirst.bindPopup(`August First`).openPopup();

// let cityMarket = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// cityMarket.bindPopup(`City Market`).openPopup();

// let elCortijo = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// elCortijo.bindPopup(`El Cortijo`).openPopup();

// let farmhouseGrill = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// farmhouseGrill.bindPopup(`Farmhouse Grill`).openPopup();

// let gakuRamen = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// gakuRamen.bindPopup(`Gaku Ramen`).openPopup();

// let henOfTheWood = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// henOfTheWood.bindPopup(`Hen of the Wood`).openPopup();

// let henrysDiner = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// henrysDiner.bindPopup(`Henry's Diner`).openPopup();

// let honeyRoad = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// honeyRoad.bindPopup(`Honey Road`).openPopup();

// let kountryKartDeli = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// kountryKartDeli.bindPopup(`Kountry Kart Deli`).openPopup();

// let leunigsBistro = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// leunigsBistro.bindPopup(`Leunig's Bistro`).openPopup();

// let americanFlatbread = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// americanFlatbread.bindPopup(`American Flatbread`).openPopup();

// let americanFlatbread = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// americanFlatbread.bindPopup(`American Flatbread`).openPopup();

// let americanFlatbread = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// americanFlatbread.bindPopup(`American Flatbread`).openPopup();

// let americanFlatbread = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// americanFlatbread.bindPopup(`American Flatbread`).openPopup();

// let americanFlatbread = L.marker([44.4766084, -73.2164283]).addTo(myMap);
// americanFlatbread.bindPopup(`American Flatbread`).openPopup();

// function restDetails() {
//     fetch(`https://json-server.burlingtoncodeacademy.now.sh/restaurants`)
//     .then((res) => {
//     return res.json()
//     }).then((restList) => {
//         restList.forEach((restaurant) => {
//             fetch(`http://nominatim.openstreetmap.org/search?q=${restaurant.address}&format=json`)
//             .then((data) => {
//                 return data.json
//             }).then((restGeoData) =>{
//                 console.log(data)
//             
//         })
//     })
// }
// restDetails();

// let restList = document.getElementById("restList");

// function restDetails() {
//   fetch(".api/all.json")
//     .then((res) => {
//       return res.json();
//     })
//     .then((idList) => {
//       idList.forEach((id) => {
//         console.log(id);
//         let cleanUp = id.split("-").join(" ");
//         let name = cleanUp;
//         restList.innerHTML += `<div class='linkContainer'> <a class='links' href='/restaurant?${id}'>${name}</a></div>`;
//         fetch(`./api/${id}.json`).then((data) => {});
//       });
//     });
// }

// async function placeMarker(object) {
//   let urlAddress = encodeURI(object.address);
//   fetch(`http://nominatim.openstreetmap.org/search?q=${urlAddress}&format=json`)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json[0]);
//       let latLngArr = [json[0].lat, json[0].lon];

//       let newMarker = L.marker(latLngArr);
//       newMarker.addEventListener("click", () => {
//         document.location = "/restaurant"; //Look at the routing lesson in our course
//         // send URL fragment (the part designated by a hash mark - representation of
//         //the object using the object.id (joes-diner) to /restaurant#${object.id}
//         // or /restaurant#joes-diner
//         //watch the videos from this week for tutorials!!!!
//       });
//     });
// }