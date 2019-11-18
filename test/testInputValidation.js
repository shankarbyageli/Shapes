'use strict';
const assert = require("assert");
const isValidArgs = require('../src/inputValidation.js').isValidArgs;
const getGroupedArguments = require('../src/inputValidation.js').getGroupedArguments;

describe("testIsValidArgs", function() {
  it("should validate cmd Arguments", function() {
    assert.deepStrictEqual(isValidArgs(["-s","rectangle"]), true); 
    assert.deepStrictEqual(isValidArgs(["-d","5,a"]), false); 
    assert.deepStrictEqual(isValidArgs(["-p","diamond"]), false); 
    assert.deepStrictEqual(isValidArgs(["-d","7"]), true); 
  });
});

describe("testGetGroupedArgs", function() {
  it("should group the given arguments", function() {
    let expected = [["-s","triangle"],["-p","hollow"]];
    let actual = getGroupedArguments(["-s","triangle","-p","hollow"]);
    assert.deepStrictEqual(expected, actual);
  });
});

