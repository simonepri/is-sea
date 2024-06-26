import GeoJsonLookup from 'geojson-geometries-lookup';
import getMap from '@geo-maps/earth-seas-10m';

let landLookup = null;

/**
 * Returns whether the given point is in the sea or not.
 * @public
 * @param {number} lat  The latitude of the point.
 * @param {number} lng  The longitude of the point.
 * @return {boolean} True if the point is in the sea, false otherwise.
 */
export default function isSea(lat, lng) {
  if (landLookup === null) {
    const map = getMap();
    landLookup = new GeoJsonLookup(map);
  }

  return landLookup.hasContainers({type: 'Point', coordinates: [lng, lat]});
}
