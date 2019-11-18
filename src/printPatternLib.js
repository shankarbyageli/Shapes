'use strict';
const createRectangle = require('./shapes.js').createRectangle;
const createTriangle = require('./shapes.js').createTriangle;
const createDiamond = require('./shapes.js').createDiamond;
const createFilledShape = require('./patterns.js').createFilledShape;
const createHollowShape = require('./patterns.js').createHollowShape;
const createAlternatingShape = require('./patterns.js').createAlternatingShape;
const createInterlacedShape = require('./patterns.js').createInterlacedShape;
const createAngledShape = require('./patterns.js').createAngledShape;

const isValidArgs = require('./inputValidation.js').isValidArgs;
const getGroupedArguments = require('./inputValidation').getGroupedArguments;

const getValue = require('./utilities.js').getValue;
const update = require('./utilities.js').update;
const isOdd = require('./utilities.js').isOdd;
const validateRectangle = require('./shapePatternValidator.js').validateRectangle;
const validateTriangle = require('./shapePatternValidator.js').validateTriangle;
const validateDiamond = require('./shapePatternValidator.js').validateDiamond;

const getArrayOfPattern = function(patternDim) {
  const tableOfPatterns = [["filled", createFilledShape],
    ["hollow", createHollowShape],
    ["alternating", createAlternatingShape],
    ["interlaced", createInterlacedShape],
    ["angled", createAngledShape]
  ];
  const tableOfShapes = [["rectangle", createRectangle],
    ["triangle", createTriangle],
    ["diamond", createDiamond]
  ];

  const shape = getValue(tableOfShapes, patternDim[0][1]);
  const pattern = getValue(tableOfPatterns, patternDim[1][1]);
  const dimensions = patternDim[2][1];

  return shape(dimensions, pattern);
};

const createPattern = function(shapePattern) {
  const shape = shapePattern[0][1];
  const dimensions = shapePattern[2][1];

  const tableOfValidation = [["rectangle", validateRectangle],
    ["diamond", validateDiamond],
    ["triangle", validateTriangle]
  ];

  let getShapePattern = getValue(tableOfValidation, shape)(shapePattern);
  if(getShapePattern) {
    return getArrayOfPattern(shapePattern);
  }
  return 0;
};

const parseArguments = function(shapePattern, argument) {
  const option = argument[0];
  const value = argument[1];
  update(shapePattern, option, value);
  return shapePattern;
};

const getShapeAndPattern = function(args) {
  let shapePattern = [["-s","rectangle"], ["-p","filled"], ["-d",'5,5']];
  shapePattern = args.reduce(parseArguments, shapePattern);
  return shapePattern;
};

const getPattern = function(args) {
  let shapePattern = getGroupedArguments(args);
  if(shapePattern) {
    shapePattern = getShapeAndPattern(shapePattern);
    return createPattern(shapePattern);
  }
  return [];
};

exports.createPattern = createPattern;
exports.getArrayOfPattern = getArrayOfPattern;
exports.parseArguments = parseArguments;
exports.getPattern = getPattern;
exports.getShapeAndPattern = getShapeAndPattern;
