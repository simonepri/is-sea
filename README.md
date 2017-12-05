# is-land
[![Travis CI](https://travis-ci.org/simonepri/is-land.svg?branch=master)](https://travis-ci.org/simonepri/is-land) [![Codecov](https://img.shields.io/codecov/c/github/simonepri/is-land/master.svg)](https://codecov.io/gh/simonepri/is-land) [![npm](https://img.shields.io/npm/dm/is-land.svg)](https://www.npmjs.com/package/is-land) [![npm version](https://img.shields.io/npm/v/is-land.svg)](https://www.npmjs.com/package/is-land) [![npm dependencies](https://david-dm.org/simonepri/is-land.svg)](https://david-dm.org/simonepri/is-land) [![npm dev dependencies](https://david-dm.org/simonepri/is-land/dev-status.svg)](https://david-dm.org/simonepri/is-land#info=devDependencies)
> 🏝 Check wheather a geographic coordinate is land or not on the earth.

<p align="center">
  <a href="http://simonepri.github.io/is-land/"><img src="https://raw.githubusercontent.com/simonepri/is-land/master/demo/index.png" width="400"/></a>
</p>

> Click on the map for a live preview.

## Install
```bash
$ npm install --save is-land
```

## Usage
You can query any `(lat,lng)` pair on the earth.

```javascript
const isLand = require('is-land');

// Query a point in Italy.
isLand.get(41.9028, 12.4964);
// => true

// Query a point somewhere in Atlantic Ocean.
isLand.get(40, -40);
// => false
```
> The package internally uses [@geo-maps/earth-lands](https://github.com/simonepri/geo-maps/blob/master/info/earth-lands.md) map with 10m resolution.

## API
## get(lat, lng) ⇒ <code>Array.&lt;string&gt;</code>
Returns wheather the given point is land or not.

**Returns**: <code>Array.&lt;string&gt;</code> - True if the point is on land, false otherwise.

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>number</code> | The latitude of the point. |
| lng | <code>number</code> | The longitude of the point. |

## Authors
* **Simone Primarosa** - [simonepri](https://github.com/simonepri)

See also the list of [contributors](https://github.com/simonepri/world-country/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
