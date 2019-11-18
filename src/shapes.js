const range = require('./utilities.js').range;
const createAngledShape = require('./patterns.js').createAngledShape;
const createFilledShape = require('./patterns.js').createFilledShape;
const createHollowShape = require('./patterns.js').createHollowShape;
const createInterlacedShape = require('./patterns.js').createInterlacedShape;
const createAlternatingShape = require('./patterns.js').createAlternatingShape;
const filled = require('./patterns.js').filled;
const hollow = require('./patterns.js').hollow;
const alternating = require('./patterns.js').alternating;
const interlaced = require('./patterns.js').interlaced;
const angled = require('./patterns.js').angled;
const addSpaces = require('./patterns.js').addSpaces;

const createRectangle = function(dimensions, pattern) {
  dimensions = dimensions.split(",");
  const noOfRows = +dimensions[0];
  const noOfColumns = +dimensions[1];
  let list = range(noOfRows);
  list.fill(noOfColumns);
  return pattern(list);
};

const createTriangle = function(height, pattern) {
  height = +height.split(",")[0];
  let list = range(1, height);
  return pattern(list);
};

const createDiamond = function(height, pattern) {
  height = +height.split(",")[0];
  let list = range(1, height, 2);
  list = list.concat(list.slice(0, list.length - 1).reverse());
  let patternA = pattern(list, height);
  return addSpaces(patternA, height);
};

exports.createRectangle = createRectangle;
exports.createTriangle = createTriangle;
exports.createDiamond = createDiamond;
