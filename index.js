'use strict';

const GeoJsonLookup = require('geojson-geometries-lookup');
const getMap = require('@geo-maps/countries-maritime-10m');  //changed to maritime sea boundaries.  May need to negate boolean response of hasContainers method.

let landLookup = null;

/**
 * Returns whether the given point is in the sea or not.
 * @public
 * @param {number} lat  The latitude of the point.
 * @param {number} lng  The longitude of the point.
 * @return {boolean} True if the point is in the sea, false otherwise.
 */
function isSea(lat, lng, radius=0, units='nauticalmiles') {
  if (landLookup === null) {
    const map = getMap();
    landLookup = new GeoJsonLookup(map);
  }

  return !landLookup.hasContainers({type: 'Point', coordinates: [lng, lat]});   //returned logical not since this looking for points contained by containers in sea.
}

module.exports = isSea;
