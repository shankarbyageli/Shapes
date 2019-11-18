'use strict';
const isValidShape = require('./shapePatternValidator.js').isValidShape;
const isValidPattern = require('./shapePatternValidator.js').isValidPattern;
const isValidDimensions = require('./shapePatternValidator.js').isValidDimensions;
const getValue = require('./utilities.js').getValue;

const isValidArgs = function(cmdArg) {
  let option = cmdArg[0];
  let value = cmdArg[1];

  const options = [["-s",isValidShape], 
    ["-p",isValidPattern],
    ["-d",isValidDimensions]
  ];

  let isValid = getValue(options, option);
  return isValid(value);
};

const getGroupedArguments = function(cmdArgs) {
  let cmdGroups = [];
  for(let index = 0;index < cmdArgs.length; index += 2) {
    cmdGroups.push(cmdArgs.slice(index, index + 2));
  }
  if(cmdGroups.every(isValidArgs)) {
    return cmdGroups;
  }
  return 0;
};

exports.isValidArgs = isValidArgs;
exports.getGroupedArguments = getGroupedArguments;
