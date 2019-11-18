const angled = function(length) {
  let pattern =  "/" + " ".repeat(Math.abs(length - 2)) + "\\";
  return pattern.slice(0, length);
};

const getAngledShape = function(diamondPattern, height) {
  let lowerHalf = diamondPattern.slice(Math.ceil(height/2), diamondPattern.length-1);
  lowerHalf = lowerHalf.map(function(string) { 
    return string.replace(/(.)( *)(.)/,"$3$2$1")
  });
  let diamond = diamondPattern.slice(0,Math.ceil(height/2)).concat(lowerHalf);
  diamond[diamond.length] = "*";
  return addSpaces(diamond);
};

const createAngledShape = function(list, height) {
  let pattern = list.map(angled);
  pattern[pattern.length - 1] = "*";
  pattern[0] = "*";
  pattern[Math.floor(pattern.length/2)] = ("*" + " ".repeat(Math.abs(height-2)) + "*").slice(0, height);
  return getAngledShape(pattern, height).slice(0, height);
};

const addSpaces = function(diamondPattern, height) {
  return diamondPattern.map(function(string) {
    return " ".repeat(Math.abs((height - string.length)/2)) + string;
  });
};

const createHollowShape = function(list) {
  let pattern = list.map(hollow);
  pattern[0] = "*".repeat(list[0]);
  pattern[pattern.length - 1] = "*".repeat(list[list.length - 1]);
  return pattern;
};

const createFilledShape = function(list) {
  let pattern = list.map(filled);
  return pattern;
};

const createAlternatingShape = function(list) {
  let pattern = list.map(alternating);
  return pattern;
};

const createInterlacedShape = function(list) {
  let pattern = list.map(interlaced);
  return pattern;
};

const filled = function(length) {
  return "*".repeat(length);
};

const interlaced = function(length, index) {
  let symbols = ["+","-"];
  let symIndex = index % 2;
  let nextSymIndex = Math.abs(symIndex - 1);
  pattern = (symbols[symIndex] + symbols[nextSymIndex]).repeat(Math.ceil(length/2));
  return pattern.slice(0,length);
};

const alternating = function(length, index) {
  let symbols = ["-","+"];
  return symbols[index % 2].repeat(length);
};

const hollow = function(length) {
  let pattern =  "*" + " ".repeat(Math.abs(length - 2)) + "*";
  return pattern.slice(0, length);
};

exports.createAngledShape = createAngledShape;
exports.createFilledShape = createFilledShape;
exports.createHollowShape = createHollowShape;
exports.createInterlacedShape = createInterlacedShape;
exports.createAlternatingShape = createAlternatingShape;
exports.filled = filled;
exports.hollow = hollow;
exports.alternating = alternating;
exports.interlaced = interlaced;
exports.angled = angled;
exports.getAngledShape = getAngledShape;
exports.addSpaces = addSpaces;
