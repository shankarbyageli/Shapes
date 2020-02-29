'use strict';
const assert = require('assert');
const validateRectangle = require('../src/shapePatternValidator.js').validateRectangle;
const validateTriangle = require('../src/shapePatternValidator.js').validateTriangle;
const validateDiamond = require('../src/shapePatternValidator.js').validateDiamond;
const isValidDimensions = require('../src/shapePatternValidator.js').isValidDimensions;
const isValidShape = require('../src/shapePatternValidator.js').isValidShape;
const isValidPattern = require('../src/shapePatternValidator.js').isValidPattern;

describe("testValidateRectangle", function() {
  it("should validate rectangle of given pattern and dimension", function() {
    let input = [["-s","rectangle"],["-p","filled"],["-d","5,6"]];
    assert.strictEqual(validateRectangle(input), input);
    input = [["-s","rectangle"],["-p","filled"],["-d","5"]];
    assert.strictEqual(validateRectangle(input), 0);
    input = [["-s","rectangle"],["-p","angled"],["-d","5,6"]];
    assert.strictEqual(validateRectangle(input), 1);
  });
});

describe("testValidateTriangle", function() {
  it("should validate triangle of given pattern and dimension", function() {
    let input = [["-s","triangle"],["-p","filled"],["-d","5,6"]];
    assert.strictEqual(validateTriangle(input), input);
    input = [["-s","triangle"],["-p","angled"],["-d","5"]];
    assert.strictEqual(validateTriangle(input), 0);
  });
});

describe("testValidateDiamond", function() {
  it("should validate diamond of given pattern and dimension", function() {
    let input = [["-s","diamond"],["-p","interlaced"],["-d","5,6"]];
    assert.strictEqual(validateDiamond(input), input);
    input = [["-s","diamond"],["-p","angled"],["-d","5"]];
    assert.strictEqual(validateDiamond(input), input);
  });
});

describe("testIsValidShape", function() {
  it("should validate the given shape", function() {
    assert.strictEqual(isValidShape("triangle"), true);
    assert.strictEqual(isValidShape("rectangle"), true);
    assert.strictEqual(isValidShape("diamond"), true);
    assert.strictEqual(isValidShape("square"), false);
  });
});

describe("testIsValidPattern", function() {
  it("should validate the given pattern", function() {
    assert.strictEqual(isValidPattern("triangle"), false);
    assert.strictEqual(isValidPattern("hollowed"), false);
    assert.strictEqual(isValidPattern("angled"), true);
    assert.strictEqual(isValidPattern("interlaced"), true);
  });
});

describe("testIsValidDimensions", function() {
  it("should validate the given dimensions", function() {
    assert.strictEqual(isValidDimensions("5,5"), true);
    assert.strictEqual(isValidDimensions("-5,5"), false);
    assert.strictEqual(isValidDimensions("3"), true);
    assert.strictEqual(isValidDimensions("6,a"), false);
  });
});

