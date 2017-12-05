# is-sea
[![Travis CI](https://travis-ci.org/simonepri/is-sea.svg?branch=master)](https://travis-ci.org/simonepri/is-sea) [![Codecov](https://img.shields.io/codecov/c/github/simonepri/is-sea/master.svg)](https://codecov.io/gh/simonepri/is-sea) [![npm](https://img.shields.io/npm/dm/is-sea.svg)](https://www.npmjs.com/package/is-sea) [![npm version](https://img.shields.io/npm/v/is-sea.svg)](https://www.npmjs.com/package/is-sea) [![npm dependencies](https://david-dm.org/simonepri/is-sea.svg)](https://david-dm.org/simonepri/is-sea) [![npm dev dependencies](https://david-dm.org/simonepri/is-sea/dev-status.svg)](https://david-dm.org/simonepri/is-sea#info=devDependencies)
> 🌊 Check whether a geographic coordinate is in the sea or not on the earth.

<p align="center">
  <a href="http://simonepri.github.io/is-sea/"><img src="https://raw.githubusercontent.com/simonepri/is-sea/master/demo/index.png" width="800"/></a>
</p>

> Click on the map for a live preview.

## Install
```bash
$ npm install --save is-sea
```

## Usage
You can query any `(lat,lng)` pair on the earth.

```javascript
const isSea = require('is-sea');

// Query a point in Italy.
isSea.get(41.9028, 12.4964);
// => false

// Query a point somewhere in Atlantic Ocean.
isSea.get(40, -40);
// => true
```
> The package internally uses [@geo-maps/earth-seas](https://github.com/simonepri/geo-maps/blob/master/info/earth-seas.md) map with 10m resolution.

## API
## get(lat, lng) ⇒ <code>Array.&lt;string&gt;</code>
Returns wheather the given point is in the sea or not.

**Returns**: <code>Array.&lt;string&gt;</code> - True if the point is in the sea, false otherwise.

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>number</code> | The latitude of the point. |
| lng | <code>number</code> | The longitude of the point. |

## Authors
* **Simone Primarosa** - [simonepri](https://github.com/simonepri)

See also the list of [contributors](https://github.com/simonepri/world-country/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
