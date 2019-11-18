const assert = require('assert');
const createAngledShape = require('../src/patterns.js').createAngledShape;
const createFilledShape = require('../src/patterns.js').createFilledShape;
const createHollowShape = require('../src/patterns.js').createHollowShape;
const createInterlacedShape = require('../src/patterns.js').createInterlacedShape;
const createAlternatingShape = require('../src/patterns.js').createAlternatingShape;
const filled = require('../src/patterns.js').filled;
const hollow = require('../src/patterns.js').hollow;
const alternating = require('../src/patterns.js').alternating;
const interlaced = require('../src/patterns.js').interlaced;
const angled = require('../src/patterns.js').angled;
const getAngledShape = require('../src/patterns.js').getAngledShape;
const addSpaces = require('../src/patterns.js').addSpaces;

describe("testHollowShape", function() {
  it("should generate hollow shape of given rowlengths", function() {
    assert.deepStrictEqual(createHollowShape([1,2,3,4]),["*","**","* *","****"]);
    assert.deepStrictEqual(createHollowShape([4,4,4,4]),["****","*  *","*  *","****"]);
  });
});

describe("testFilledShape", function() {
  it("should generate filled shape of given rowlengths", function() {
    let expected = ["*********","*********","*********"];
    assert.deepStrictEqual(createFilledShape([9,9,9]),expected);
  });
});

describe("testAngledShape", function() {
  it("should generate angled shape of given rowlengths", function() {
    let expected = ['*', '/ \\', '*   *', '\\ /', '*'];
    assert.deepStrictEqual(createAngledShape([1,3,5,3,1],5),expected); 
  });
});

describe("testAlternatingShape", function() {
  it("should generate alternating shape of given rowlengths", function() {
    let expected = ["-","++","---","++++","-----","++++++"];
    assert.deepStrictEqual(createAlternatingShape([1,2,3,4,5,6]),expected); 
  });
});

describe("testInterlacedShape", function() {
  it("should generate interlaced shape of given rowlengths", function() {
    let expected = ["+-+-+","-+-+-","+-+-+","-+-+-","+-+-+"];
    assert.deepStrictEqual(createInterlacedShape([5,5,5,5,5]),expected);
  });
});

describe("testFilled", function() {
  it("should generate filled row of given length", function() {
    assert.strictEqual(filled(5),"*****");
    assert.strictEqual(filled(1),"*");
  });
});

describe("testHollow", function() {
  it("should generate hollow row of given length", function() {
    assert.strictEqual(hollow(5),"*   *");
    assert.strictEqual(hollow(2),"**");
  });
});

describe("testAlternating", function() {
  it("should generate alternating row of given length", function() {
    assert.strictEqual(alternating(5,1),"+++++");
    assert.strictEqual(alternating(5,0),"-----");
  });
});

describe("testInterlaced", function() {
  it("should generate interlaced row of given length", function() {
    assert.strictEqual(interlaced(5,1),"-+-+-");
    assert.strictEqual(interlaced(5,0),"+-+-+");
  });
});

describe("testAngled", function() {
  it("should generate angled row of given length", function() {
    assert.strictEqual(angled(5),"/   \\");
    assert.strictEqual(angled(3),"/ \\");
  });
});
