'use strict';

const GeoJsonLookup = require('geojson-geometries-lookup');
const getMap = require('@geo-maps/earth-seas-10m');
const buffer = require('@turf/buffer');

let landLookup = null;

/**
 * Returns whether the given point is in the sea or not.
 * @public
 * @param {number} lat  The latitude of the point.
 * @param {number} lng  The longitude of the point.
 * @param {radius}, optional, distance to draw the buffer around/within earth-seas boundary.   12 nautical miles is territorial boundary.   https://en.wikipedia.org/wiki/Territorial_waters
 * @param {units}, valid units: default is 'nauticalmiles'.  accepted units are defind by turf module convert Length http://turfjs.org/docs/#convertLength 
 * @return {boolean} True if the point is in the sea, false otherwise.
 */
function isSea(lat, lng, radius=0, units='nauticalmiles') {
  if (landLookup === null) {
    const map = getMap();
    if buffer > 0 {
      map = buffer(map, radius, {units: units})
    }
    landLookup = new GeoJsonLookup(map);
  }

  return landLookup.hasContainers({type: 'Point', coordinates: [lng, lat]});
}

module.exports = isSea;
