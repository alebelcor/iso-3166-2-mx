#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var jsdom = require('jsdom');

var pkg = require('./package.json');
var OUTPUT_DIR = 'converted';
var ISO_3166_2_MX = 'https://en.wikipedia.org/wiki/ISO_3166-2:MX';

function getValueFromElement(source, selector) {
  var element = source.querySelector(selector);

  if (element === null) {
    throw new TypeError('Element was not found using selector: ' + selector);
  }

  return element.textContent;
}

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
    var code = getValueFromElement(element, 'td:first-child span');
    var subdivisionName = getValueFromElement(element, 'td:nth-child(2) a');
    var subdivisionCategory = getValueFromElement(element, 'td:nth-child(3)');

    json.codes[code] = {
      'subdivisionName': subdivisionName,
      'subdivisionCategory': subdivisionCategory
    };
  });

  write(pkg.name + '.json', JSON.stringify(json));
  write(pkg.name + '.js', 'module.exports=' + JSON.stringify(json) + ';');

});
