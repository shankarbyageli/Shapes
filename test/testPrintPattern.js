const assert = require('assert');
const createPattern = require('../src/printPatternLib.js').createPattern;
const parseArguments = require('../src/printPatternLib.js').parseArguments;
const getShapeAndPattern = require('../src/printPatternLib.js').getShapeAndPattern;

describe("testCreatePattern", function() {
  it("", function() {
    let actual = createPattern([["-s","triangle"],["-p","filled"],["-d","5"]]);
    let expected = ["*","**","***","****","*****"];
    assert.deepStrictEqual(actual, expected);
    actual = createPattern([["-s","rectangle"],["-p","hollow"],["-d","4,4"]]);
    expected = ["****","*  *","*  *","****"];
    assert.deepStrictEqual(actual, expected);
  });
});

describe("testParseArgs", function() {
  it("", function() {
    let actual = parseArguments([["-s","triangle"],["-d","5"]],["-s","diamond"]);
    let expected = [["-s","diamond"],["-d","5"]];
    assert.deepStrictEqual(actual,expected);
    actual = parseArguments([["-p","filled"]],["-p","hollow"]); 
    expected = [["-p","hollow"]];
    assert.deepStrictEqual(actual,expected);
  });
});
