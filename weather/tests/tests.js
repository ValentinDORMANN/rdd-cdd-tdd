'use strict';

const chai = require('chai');
chai.should();
var expect = require("chai").expect;

const weather = require('../index.js');
const cli = require('../cli.js');
const assert = require('assert');

/*describe('Weather', () => {
	it('should get the weather', (done) => {
	});
});*/
describe('GivenTemperatureFahrenheitWhenToCelciusThenConvertCelcius', function(){
	console.log(cli)
	it('when input 32 will return 0', function(){
		assert.equal(cli._toCelcius(32), 0);
	});

	it('linkTO', function() {
		expect(cli).to.exist;
	});
})