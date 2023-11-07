<script setup>
import { onMounted, ref, computed } from 'vue';
import L from 'leaflet';
import {savePinLocation, getPinLocation} from '../StorageHandler.js';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers';
// the import statements import functions used from vue, leaflet from leaflet.js
// and the storage handler from storage handler.js
// as well as the css files for the red leaflet marker used.
const lat = ref(0);
const lng = ref(0);
const map = ref();
const mapContainer = ref();
let marker = null;
let currentLat = 0;
let currentLng = 0;
let secLat = ref(0);
let secLng = ref(0);
onMounted( async () => {
  //I started by creating the map with the intitial latitude and longitude values
  // and then we add the tile layer to the map, setting the zoom to 13
  map.value = L.map(mapContainer.value).setView([lat.value, lng.value], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value);
//  then I created the red marker, which is draggable and interactive, and 
// added it to the map, and then I added an event listener to the marker
// that updates the latitude and longitude values when the marker is dragged in real time,
// and then I added a popup to the marker that displays the latitude and longitude values
  marker = L.marker([currentLat + 30, currentLng + 31], 
    {icon: L.AwesomeMarkers
    .icon({
      icon: 'info-circle',  
      markerColor: 'red', 
    }),
    interactive: true,
    draggable: true,})
    .addTo(map.value).on('dragend', async (event) => {
      const secLat = event.target.getLatLng().lat;
      const secLng = event.target.getLatLng().lng;
      await savePinLocation(lat, lng, 'secLat', 'secLng')
      console.log("hey", secLat, secLng);
      
      marker.getPopup().setContent(`Latitude: ${secLat.toFixed(6)}, Longitude: ${secLng.toFixed(6)}`);
      // marker.getPopup().setContent(`Latitude: ${newLat.toFixed(6)}, Longitude: ${newLng.toFixed(6)}`);
});

// Attach popup to the marker
marker.bindPopup().openPopup();

// Call the getLocation function to get the current location of the user.

  getLocation();
 
});
//I take an instance from the marker and I set it to null at first to initialize the 
//unmovable marker, and then I create a function called getLocation 
let currMarker = null;
async function getLocation() {
  // I check if the map has already been initialized so that I don't create a new map, resulting in errors

  if(!map){
    map.value
  }
else{
// I get the user's position using the geolocation API and then I asynchronously set the current latitude and longitude values of the marker to the user's current latitude and longitude values

  if (navigator.geolocation) {
      navigator.geolocation.watchPosition( async (position) => {
        currentLat = position.coords.latitude;
        currentLng = position.coords.longitude;
        
        lat.value = currentLat;
        lng.value = currentLng;
      map.value.setView([lat.value, lng.value]);
      if (currMarker) {
        // if there is another instance of the same marker created, I remove it.
        map.value.removeLayer(currMarker);
      }
      // I save the current latitude and longitude values to the local storage using the function savePinLocation()
      await savePinLocation(lat.value, lng.value, 'markerLat', 'markerLng');   
      // I create a new instance of the marker and add it to the map, 
      // and then I add an event listener to the marker that updates the latitude and longitude values if the user moves,
      //  and then I add a popup to the marker that displays the latitude and longitude values   
      currMarker = L.marker([lat.value, lng.value], { interactive: true, draggable: false })
        .addTo(map.value)
        .on('dragend',  (event) => {
          const lat= event.target.getLatLng().lat;
          const lng = event.target.getLatLng().lng;
          currMarker.getPopup().setContent(`Latitude: ${lat.value}, Longitude: ${lng.value}`);
          
        });
        currMarker.bindPopup(`Latitude: ${lat.value.toFixed(6)}, Longitude: ${lng.value.toFixed(6)}`).openPopup();

       
    });
   
  }
}
  
}

</script>

<template>
  <div class="body">
    <!-- I render the app-container to indicate that the user's location is shown by the blue marker and the draggable real time location is shown by the red marker. -->
    <span class="app-container">
      <h2>YOUR LOCATION</h2>
      <h2 style="color: rgb(206, 14, 14);">MOVABLE PIN</h2>
    </span>
    
    
  </div>
  <div ref="mapContainer" id="map-container">
    
  </div>
</template>

<style scoped src=".\src\style.css">
</style>
