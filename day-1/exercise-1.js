const tools = require('./tools');

const measurements = tools.getInputAsArray();

console.log(tools.countLargerMeasurements(measurements));