'use strict';

const GeoJsonLookup = require('geojson-geometries-lookup');
const getMap = require('@geo-maps/earth-seas-10m');

let landLookup = null;

/**
 * Returns wheather the given point is in the sea or not.
 * @public
 * @param {number} lat  The latitude of the point.
 * @param {number} lng  The longitude of the point.
 * @return {boolean} True if the point is in the sea, false otherwise.
 */
function isSea(lat, lng) {
  if (landLookup === null) {
    const map = getMap();
    landLookup = new GeoJsonLookup(map);
  }

  return landLookup.hasContainers({type: 'Point', coordinates: [lng, lat]});
}

module.exports = isSea;
