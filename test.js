'use strict';

var path = require('path');
var expect = require('chai').expect;

var pkg = require(path.resolve('.', 'package.json'));
var iso31662mx = require(path.resolve('.', 'output',  pkg.name));

describe(pkg.name, function () {
  it('should be an object', function () {
    expect(({}).toString(iso31662mx)).to.equal('[object Object]');
  });

  it('should have a `codes` member', function () {
    expect(iso31662mx).to.have.property('codes');
  });

  describe('state codes', function () {
    var stateCodes = iso31662mx.codes;

    it('should have a `subdivisionName` member', function () {
      expect(stateCodes['MX-DIF']).to.have.property('subdivisionName');
    });

    it('should have a `subdivisionCategory` member', function () {
      expect(stateCodes['MX-DIF']).to.have.property('subdivisionCategory');
    });

    it('should return the correct `subdivisionName` value', function () {
      expect(stateCodes['MX-DIF'].subdivisionName).to.equal('Distrito Federal');
      expect(stateCodes['MX-AGU'].subdivisionName).to.equal('Aguascalientes');
      expect(stateCodes['MX-BCN'].subdivisionName).to.equal('Baja California');
      expect(stateCodes['MX-BCS'].subdivisionName).to.equal('Baja California Sur');
      expect(stateCodes['MX-CAM'].subdivisionName).to.equal('Campeche');
      expect(stateCodes['MX-COA'].subdivisionName).to.equal('Coahuila');
      expect(stateCodes['MX-COL'].subdivisionName).to.equal('Colima');
      expect(stateCodes['MX-CHP'].subdivisionName).to.equal('Chiapas');
      expect(stateCodes['MX-CHH'].subdivisionName).to.equal('Chihuahua');
      expect(stateCodes['MX-DUR'].subdivisionName).to.equal('Durango');
      expect(stateCodes['MX-GUA'].subdivisionName).to.equal('Guanajuato');
      expect(stateCodes['MX-GRO'].subdivisionName).to.equal('Guerrero');
      expect(stateCodes['MX-HID'].subdivisionName).to.equal('Hidalgo');
      expect(stateCodes['MX-JAL'].subdivisionName).to.equal('Jalisco');
      expect(stateCodes['MX-MEX'].subdivisionName).to.equal('México');
      expect(stateCodes['MX-MIC'].subdivisionName).to.equal('Michoacán');
      expect(stateCodes['MX-MOR'].subdivisionName).to.equal('Morelos');
      expect(stateCodes['MX-NAY'].subdivisionName).to.equal('Nayarit');
      expect(stateCodes['MX-NLE'].subdivisionName).to.equal('Nuevo León');
      expect(stateCodes['MX-OAX'].subdivisionName).to.equal('Oaxaca');
      expect(stateCodes['MX-PUE'].subdivisionName).to.equal('Puebla');
      expect(stateCodes['MX-QUE'].subdivisionName).to.equal('Querétaro');
      expect(stateCodes['MX-ROO'].subdivisionName).to.equal('Quintana Roo');
      expect(stateCodes['MX-SLP'].subdivisionName).to.equal('San Luis Potosí');
      expect(stateCodes['MX-SIN'].subdivisionName).to.equal('Sinaloa');
      expect(stateCodes['MX-SON'].subdivisionName).to.equal('Sonora');
      expect(stateCodes['MX-TAB'].subdivisionName).to.equal('Tabasco');
      expect(stateCodes['MX-TAM'].subdivisionName).to.equal('Tamaulipas');
      expect(stateCodes['MX-TLA'].subdivisionName).to.equal('Tlaxcala');
      expect(stateCodes['MX-VER'].subdivisionName).to.equal('Veracruz');
      expect(stateCodes['MX-YUC'].subdivisionName).to.equal('Yucatán');
      expect(stateCodes['MX-ZAC'].subdivisionName).to.equal('Zacatecas');
    });

    it('should return the correct `subdivisionCategory` value', function () {
      expect(stateCodes['MX-DIF'].subdivisionCategory).to.equal('federal district');
      expect(stateCodes['MX-AGU'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-BCN'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-BCS'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-CAM'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-COA'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-COL'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-CHP'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-CHH'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-DUR'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-GUA'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-GRO'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-HID'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-JAL'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-MEX'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-MIC'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-MOR'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-NAY'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-NLE'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-OAX'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-PUE'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-QUE'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-ROO'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-SLP'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-SIN'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-SON'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-TAB'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-TAM'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-TLA'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-VER'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-YUC'].subdivisionCategory).to.equal('state');
      expect(stateCodes['MX-ZAC'].subdivisionCategory).to.equal('state');
    });

    it('should contain 32 items', function () {
      expect(Object.keys(stateCodes).length).to.equal(32);
    });
  });
});
