# is-sea
[![Travis CI](https://travis-ci.org/simonepri/is-sea.svg?branch=master)](https://travis-ci.org/simonepri/is-sea) [![Codecov](https://img.shields.io/codecov/c/github/simonepri/is-sea/master.svg)](https://codecov.io/gh/simonepri/is-sea) [![npm](https://img.shields.io/npm/dm/is-sea.svg)](https://www.npmjs.com/package/is-sea) [![npm version](https://img.shields.io/npm/v/is-sea.svg)](https://www.npmjs.com/package/is-sea) [![npm dependencies](https://david-dm.org/simonepri/is-sea.svg)](https://david-dm.org/simonepri/is-sea) [![npm dev dependencies](https://david-dm.org/simonepri/is-sea/dev-status.svg)](https://david-dm.org/simonepri/is-sea#info=devDependencies) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20585085.svg)](https://doi.org/10.5281/zenodo.20585085)
> 🌊 Check whether a geographic coordinate is in the sea or not on the earth.

<p align="center">
  <a href="http://simonepri.github.io/is-sea/"><img src="https://raw.githubusercontent.com/simonepri/is-sea/master/demo/index.png" width="700"/></a>
</p>

<p align="center">Click on the map to see a live preview.</p>

## Synopsis
Given the latitude and longitude coordinates this package returns whether the point fall into a sea/ocean or not.

The package internally uses [@geo-maps/earth-seas](https://github.com/simonepri/geo-maps/blob/master/info/earth-seas.md) map with 10m resolution.
The accuracy of the map has not been tested but the [demo](http://simonepri.github.io/is-sea/) allows you to actually test it manually by just clicking on the map to see what it returns.

Do you believe that this is useful? If so, <a href="#start-of-content">support us with a ⭐️</a>!

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

## API
## get(lat, lng) ⇒ <code>Array.&lt;string&gt;</code>
Returns wheather the given point is in the sea or not.

**Returns**: <code>Array.&lt;string&gt;</code> - True if the point is in the sea, false otherwise.

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>number</code> | The latitude of the point. |
| lng | <code>number</code> | The longitude of the point. |

## Related
* [country-iso](https://github.com/simonepri/country-iso): 🗺 Get ISO 3166-1 alpha-3 country code from geographic coordinates.

## Citation
If you use `is-sea` in your research, please cite it using the metadata in [`CITATION.cff`](CITATION.cff), or the following BibTeX entry:

```bibtex
@software{primarosa_is_sea,
  author    = {Primarosa, Simone},
  title     = {{is-sea}: Check whether a geographic coordinate is in the sea or not on the earth},
  year      = {2017},
  publisher = {Zenodo},
  doi       = {10.5281/zenodo.20585085},
  url       = {https://github.com/simonepri/is-sea}
}
```

The concept DOI [`10.5281/zenodo.20585085`](https://doi.org/10.5281/zenodo.20585085) always resolves to the latest release.

## Used in research
`is-sea` has been used to curate geographic sample metadata in the following peer-reviewed publications:

* Corrêa, F. B., Saraiva, J. P., Stadler, P. F., & Nunes da Rocha, U. (2020). *TerrestrialMetagenomeDB: a public repository of curated and standardized metadata for terrestrial metagenomes.* Nucleic Acids Research, 48(D1), D626–D632. https://doi.org/10.1093/nar/gkz994
* Nata'ala, M. K., Avila Santos, A. P., Coelho Kasmanas, J., et al. (2022). *MarineMetagenomeDB: a public repository for curated and standardized metadata for marine metagenomes.* Environmental Microbiome, 17, 57. https://doi.org/10.1186/s40793-022-00449-7

## Authors
* **Simone Primarosa** - [simonepri](https://github.com/simonepri)

See also the list of [contributors](https://github.com/simonepri/is-sea/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
