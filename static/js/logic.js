// let newYorkCoords = [40.73, -74.0059];
// let mapZoomLevel = 12;
console.log('gggy')

var map = L.map('map-id').setView([40.73, -74.00590], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// ds.json('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')

d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(jsondata => {
  // console.log(data)
  const stationArray = jsondata.data.stations
  examplestat = stationArray[0]
  console.log(stationArray[0])
  
  

  const markerarray = stationArray.map(station => {
    return L.marker([station.lat, station.lon]).bindPopup('something useful')
 
  })

  var stationmarkerlayer = L.LayerGroup(markerarray)
  stationmarkerlayer.addTo(map)

})



// Create the createMap function.


  // Create the tile layer that will be the background of our map.


  // Create a baseMaps object to hold the lightmap layer.


  // Create an overlayMaps object to hold the bikeStations layer.


  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
