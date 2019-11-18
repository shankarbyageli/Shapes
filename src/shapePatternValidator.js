const validateDiamond = function(shapePattern) {
  let dimensions = shapePattern[2][1];
  if(dimensions.split(",")[0] % 2 != 0) {
    return shapePattern;
  }
  return 0;
};

const isNumber = function(value) {
  return Number.isInteger(+value) && +value > 0;
};

const validateTriangle = function(shapePattern) { 
  let pattern = shapePattern[1][1];
  if(pattern == "angled") {
    return 0;
  }
  return shapePattern;
};

const validateRectangle = function(shapePattern) {
  let shape = shapePattern[0][1];
  let pattern = shapePattern[1][1];
  let dimensions = shapePattern[2][1];
  if(pattern == "angled" || dimensions.length < 2) {
    return 0;
  }
  return shapePattern;
};

const isValidShape = function(shape) {
  const validShapes = ["rectangle","triangle","diamond"];
  return validShapes.includes(shape);
};

const isValidPattern = function(pattern) {
  const validPatterns = ["filled","hollow","alternating","interlaced","angled"];
  return validPatterns.includes(pattern);
};

const isValidDimensions = function(dimension) {
  const validDimensions = dimension && dimension.split(",").every(function(value) {
    return isNumber(value);
  });
  return validDimensions && dimension.length >= 1;
};

exports.validateRectangle = validateRectangle;
exports.validateTriangle = validateTriangle;
exports.validateDiamond = validateDiamond;
exports.isValidDimensions = isValidDimensions;
exports.isValidShape = isValidShape;
exports.isValidPattern = isValidPattern;
