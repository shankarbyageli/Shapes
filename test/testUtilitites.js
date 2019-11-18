'use strict';
const assert = require('assert');
const find = require('../src/utilities.js').find;
const insert = require('../src/utilities.js').insert;
const getValue = require('../src/utilities.js').getValue;
const update = require('../src/utilities.js').update;
const range = require('../src/utilities.js').range;
const isOdd = require('../src/utilities.js').isOdd;

describe("testInsert", function() {
  it("should insert the key value in table", function() {
    let table = [["name","ram"]];
    let expected = [["name","ram"],["age",20]];
    assert.deepStrictEqual(insert(table,"age",20),expected);  
  });
});

describe("testFind", function() {
  it("should find key-value pair for given key in table", function() {
    let table = [["name","ram"],["age",20]];
    assert.deepStrictEqual(find(table,"age"),["age",20]);
  });
});

describe("testGetValue", function() {
  it("should get the value of given key from table", function() {
    let table = [["name","ram"],["age",20]];
    assert.strictEqual(getValue(table,"name"),"ram");
  });
});

describe("testUpdate", function() {
  it("should update the value of given key with given value", function() {
    let table = [["name","ram"],["age",20]];
    assert.deepStrictEqual(find(table,"age"),["age",20]);
  });
});

describe("testRange", function() {
  it("should generate list of numbers given only end number", function() {
    assert.deepStrictEqual(range(5),[1,2,3,4,5]);
    assert.deepStrictEqual(range(1),[1]);
  });
  it("should generate list of numbers given start and end", function() {
    assert.deepStrictEqual(range(5,10),[5,6,7,8,9,10]);
    assert.deepStrictEqual(range(-5,2),[-5,-4,-3,-2,-1,0,1,2]);
  });
  it("should generate list of numbers given start, end and step", function() {
    assert.deepStrictEqual(range(10,0,-2),[10,8,6,4,2,0])
    assert.deepStrictEqual(range(1,10,3),[1,4,7,10])
  });
});

describe("testIsOdd", function() {
  it("should validate odd numbers", function() {
    assert.strictEqual(isOdd(5), true)
    assert.strictEqual(isOdd(8), false)
    assert.strictEqual(isOdd(0), false)
  });
});
