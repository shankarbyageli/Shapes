'use strict';
const assert = require('assert');
const createRectangle = require('../src/shapes.js').createRectangle;
const createTriangle = require('../src/shapes.js').createTriangle;
const createDiamond = require('../src/shapes.js').createDiamond;
const createFilledShape = require('../src/patterns.js').createFilledShape;
const createHollowShape = require('../src/patterns.js').createHollowShape;
const createAlternatingShape = require('../src/patterns.js').createAlternatingShape;
const createInterlacedShape = require('../src/patterns.js').createInterlacedShape;
const createAngledShape = require('../src/patterns.js').createAngledShape;

describe("testCreateRectangle", function() {
  it("should not generte pattern for invalid dimensions", function() {
    let expected = ["","","",""];
    assert.deepStrictEqual(createRectangle("4", createFilledShape), expected);
  });
  it("should generate filled rectangle of given dimension", function() {
    let expected = ["***","***","***"];
    assert.deepStrictEqual(createRectangle("3,3", createFilledShape), expected);
  });
  it("should generatae hollow rectangle of given dimension", function() {
    let expected = ["****","*  *","*  *","****"];
    assert.deepStrictEqual(createRectangle("4,4", createHollowShape), expected);
  });
  it("should generatae alternating rectangle of given dimension", function() {
    let expected = ["----","++++","----","++++"];
    assert.deepStrictEqual(createRectangle("4,4", createAlternatingShape), expected);
  });
  it("should generatae interlaced rectangle of given dimension", function() {
    let expected = ["+-+-","-+-+","+-+-","-+-+"];
    assert.deepStrictEqual(createRectangle("4,4", createInterlacedShape), expected);
  });
});

describe("testCreateTriangle", function() {
  it("should generate filled Triangle of given dimension", function() {
    let expected = ["*","**","***"];
    assert.deepStrictEqual(createTriangle("3", createFilledShape), expected);
  });
  it("should generatae hollow Triangle of given dimension", function() {
    let expected = ["*","**","* *","****"];
    assert.deepStrictEqual(createTriangle("4", createHollowShape), expected);
  });
  it("should generatae alternating Triangle of given dimension", function() {
    let expected = ["-","++","---","++++","-----"];
    assert.deepStrictEqual(createTriangle("5", createAlternatingShape), expected);
  });
  it("should generatae interlaced Triangle of given dimension", function() {
    let expected = ["+","-+","+-+"];
    assert.deepStrictEqual(createTriangle("3", createInterlacedShape), expected);
  });
});

describe("testCreateDiamond", function() {
  it("should generate filled Diamond of given dimension", function() {
    let expected = [ '  *', ' ***', '*****', ' ***', '  *' ];
    assert.deepStrictEqual(createDiamond("5", createFilledShape), expected);
  });
  it("should generatae hollow Diamond of given dimension", function() {
    let expected = [ '   *', '  * *', ' *   *', '*     *', ' *   *', '  * *', '   *' ];
    assert.deepStrictEqual(createDiamond("7", createHollowShape), expected);
  });
  it("should generatae alternating Diamond of given dimension", function() {
    let expected = [ ' -', '+++', ' -' ];
    assert.deepStrictEqual(createDiamond("3", createAlternatingShape), expected);
  });
  it("should generatae interlaced Diamond of given dimension", function() {
    let expected = [ '  +', ' -+-', '+-+-+', ' -+-', '  +' ];
    assert.deepStrictEqual(createDiamond("5", createInterlacedShape), expected);
  });
  it("should generatae angled Diamond of given dimension", function() {
    let expected = [ '  *', ' / \\', '*   *', ' \\ /', '  *' ];
    assert.deepStrictEqual(createDiamond("5", createAngledShape), expected);
  });
});

