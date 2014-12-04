#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var jsdom = require('jsdom');

var pkg = require('./package.json');
var OUTPUT_DIR = 'converted';
var ISO_3166_2_MX = 'https://en.wikipedia.org/wiki/ISO_3166-2:MX';

function write(filename, data) {
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), data, 'utf8');
}

jsdom.env(ISO_3166_2_MX, function (err, window) {

  if (err) {
    return console.error(err);
  }

  var json = {codes: {}};
  var table = window.document.querySelector('.wikitable');
  var rows = [].slice.call(table.querySelectorAll('tr'), 0);

  rows.shift();

  rows.forEach(function (element) {
    var code = element.querySelector('td:first-child span');
    var subdivisionName = element.querySelector('td:nth-child(2) a');
    var subdivisionCategory = element.querySelector('td:nth-child(3)');

    if (code === null) {
      throw new TypeError('Code element was not found.');
    }

    if (subdivisionName === null) {
      throw new TypeError('Subdivision name element was not found.');
    }

    if (subdivisionCategory === null) {
      throw new TypeError('Subdivision category element was not found');
    }

    code = code.textContent;
    subdivisionName = subdivisionName.textContent;
    subdivisionCategory = subdivisionCategory.textContent;

    json.codes[code] = {
      'subdivisionName': subdivisionName,
      'subdivisionCategory': subdivisionCategory
    };
  });

  write(pkg.name + '.json', JSON.stringify(json));
  write(pkg.name + '.js', 'module.exports=' + JSON.stringify(json) + ';');

});
