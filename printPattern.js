const pattern = require('./src/printPatternLib.js');

const main = function() {
  const args = process.argv.slice(2);
  const patternArray = pattern.getPattern(args);
  if(patternArray == 0) {
    return printUsage();
  }
  const patternToPrint = patternArray.join("\n");
  console.log(patternToPrint);
};

const printUsage = function() {
  console.log("Invalid Option !");
  let patternUsage = "[-p] [filled | alternating | hollow | interlaced | angled (for diamond only)]";
  let shapeUsage = "[-s] [triangle | rectangle | diamond]";
  let dimentionUsage = "[-d] [n,m | n]";
  console.log("usage:   node printPattern.js", shapeUsage); 
  console.log("\t node printPattern.js", patternUsage); 
  console.log("\t node printPattern.js", dimentionUsage); 
};

main();
