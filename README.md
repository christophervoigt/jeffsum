# jeffsum
Jeff Goldblum text placeholder generator of pure amazingness. (original by @seanehalpin)

[![Build Status](https://travis-ci.org/chlorophyllkid/jeffsum.svg?branch=master)](https://travis-ci.org/chlorophyllkid/jeffsum)
[![dependencies Status](https://david-dm.org/chlorophyllkid/jeffsum/status.svg)](https://david-dm.org/chlorophyllkid/jeffsum)
[![NPM Version](http://img.shields.io/npm/v/jeffsum.svg?style=flat)](https://www.npmjs.com/package/jeffsum)
[![NPM Downloads](https://img.shields.io/npm/dm/jeffsum.svg?style=flat)](https://npmcharts.com/compare/jeffsum?minimal=true)

## Install
```
npm install jeffsum -D
```

## Usage
```
import jeffsum from 'jeffsum'

// jeffsum(number, textType)
const characters = jeffsum(5, 'characters');
const words = jeffsum(5, 'words');
const sentences = jeffsum(5, 'sentences');

```

**number** - The amount of amazingness you want to receive. This should be a number greater than 0.

**textType** - Possible options are `'characters'`, `'words'`, `'sentences'`. (defaults to `'sentences'`)


## Licence
Original idea by [@seanehalpin](https://twitter.com/seanehalpin).

This library was written by [Christopher Voigt](https://twitter.com/chlorophyllkid)
and is licensed under [MIT](https://github.com/chlorophyllkid/jeffsum/blob/master/LICENSE).
