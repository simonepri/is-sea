'use strict';

const GeoJsonLookup = require('geojson-geometries-lookup');
const getMap = require('@geo-maps/earth-lands-10m');

let landLookup = null;

/**
 * Returns wheather the given point is land or not.
 * @public
 * @param {number} lat  The latitude of the point.
 * @param {number} lng  The longitude of the point.
 * @return {boolean} True if the point is on land, false otherwise.
 */
function isLand(lat, lng) {
  if (landLookup === null) {
    const map = getMap();
    landLookup = new GeoJsonLookup(map);
  }

  return landLookup.hasContainers({type: 'Point', coordinates: [lng, lat]});
}

module.exports = isLand;
