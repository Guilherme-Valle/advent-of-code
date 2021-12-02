const tools = require('./tools');

const measurements = tools.getInputAsArray();

const sumsOfMeasurements = tools.createArrayOfSums(measurements);

console.log(tools.countLargerMeasurements(sumsOfMeasurements));