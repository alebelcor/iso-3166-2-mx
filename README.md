# iso-3166-2-mx

> The entry for Mexico in ISO 3166-2 which defines codes for the names of the principal subdivisions

[![Build Status](https://travis-ci.org/alebelcor/iso-3166-2-mx.svg?branch=master)](https://travis-ci.org/alebelcor/iso-3166-2-mx)

## Downloads

- [iso-3166-2-mx.json](https://raw.githubusercontent.com/alebelcor/iso-3166-2-mx/master/output/iso-3166-2-mx.json):
  Object with `codes` member containing objects with the state code as key and subdivision name and category as values.

*Last updated 2014-12-03*

## Getting started

Even though all files are provided here, you might want to do it yourself.

You'll need [Node.js](http://nodejs.org), then `cd` into this folder and `npm install`.

Run `npm run generate` to fetch the latest codes.

You can also use it as a Node module. Just install it `npm install --save iso-3166-2-mx` and then require it in your code:

```js
var iso31662mx = require('iso-3166-2-mx');
console.log(iso31662mx.codes['MX-DIF']);

// {
//   "subdivisionName": "Distrito Federal",
//   "subdivisionCategory": "federal district"
// }
```

## Credit

Inspired by [norway-postal-codes](https://github.com/sindresorhus/norway-postal-codes)

## License

MIT © Alejandro Beltrán
