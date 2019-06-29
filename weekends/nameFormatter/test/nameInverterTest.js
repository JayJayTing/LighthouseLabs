const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {

it("will return an empty string when passed an empty string", function()
{
    return assert.equal(nameInverter(''), '');



})
it("return a single name when passed a single name", function()
{
    return assert.equal(nameInverter('jon'), 'jon');



})
it("return a single name when passed a single name with extra spaces", function()
{
    return assert.equal(nameInverter('   jon  '), 'jon');



})
it("return a last-name, first-name when passed a first and last-name", function()
{
    return assert.equal(nameInverter('jay ting'), 'ting, jay');



})

it("return an empty string when passed a single honorific", function()
{
    return assert.equal(nameInverter('Dr. '), '');



})
it("return honorific first-name when passed honorific first-name", function()
{
    return assert.equal(nameInverter('Dr. John'), 'Dr. John');



})
it("return a honorific last-name, first-name when passed honorific first-name last-name", function()
{
    return assert.equal(nameInverter('Dr. John Doe'), 'Dr. Doe, John');



})

it("return a honorific last-name, first-name when passed honorific first-name last-name without spaces ont he sides", function()
{
    return assert.equal(nameInverter('   Dr. John Doe   '), 'Dr. Doe, John');



})
it("throw an error when name is undefined", function()
{
    return assert.equal(nameInverter(undefined), TypeError);



})



});