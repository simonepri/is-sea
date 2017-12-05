const leaflet = require('leaflet');
const GeoJsonLookup = require('geojson-geometries-lookup');

async function fetchMapAsync() {
  const response = await fetch('https://unpkg.com/@geo-maps/earth-seas-1m/map.geo.json');
  const data = await response.json();
  return data;
}

let landLookup = null;
async function isSea(lat, lng) {
  if (landLookup === null) {
    const map = await fetchMapAsync();
    landLookup = new GeoJsonLookup(map);
  }
  return landLookup.hasContainers({type: 'Point', coordinates: [lng, lat]});
}

async function showInfo(map, latlng) {
  latlng = latlng.wrap();

  const output = {
    isSea: await isSea(latlng.lat, latlng.lng)
  };

  const msg = JSON.stringify(output, null, 2).replace(/\r?\n|\r/g, '<br/>').replace(/ /g, '&ensp;');
  map.openPopup(msg, latlng);
}

const map = leaflet.map('map').setView([0, 0], 1);
leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
map.on('click', e => {
  const latlng = e.latlng;
  map.openPopup('Loading... ⌛️', latlng);

  setTimeout(() => showInfo(map, latlng), 0);
});
