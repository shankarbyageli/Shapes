const find = function(table,key) {
  return table.find(function(e) { return e[0] == key });
};

const insert = function(table,key,value) {
  if(find(table,key)) {
    return;
  }
  table.push([key,value]);
  return table;
};

const getValue = function(table,key) {
  let e = find(table,key);
  if(e) {
    return e[1];
  }
};

const update = function(table,key,value) {
  let e = find(table,key);
  if(e) {
    e[1] = value;
  }
};

const areEqual = function(value1, value2) {
  return value1 === value2;
};

const areNotEqual = function(value1, value2) {
  return value1 != value2;
};

const isOdd = function(number) {
  return number % 2 != 0;
};

const range = function(...args) {
  let array = [];
  let start = args[0];
  let end = args[1];
  let step = args[2];
  if(args.length == 1) {
    start = 1;
    end = args[0];
    step = 1;
  }
  if(args.length == 2) {
    step = 1;
  }
  if(step > 0) {
    for(let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for(let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
};

exports.find = find;
exports.insert = insert;
exports.getValue = getValue;
exports.update = update;
exports.areEqual = areEqual;
exports.areNotEqual = areNotEqual;
exports.range = range;
exports.isOdd = isOdd;
