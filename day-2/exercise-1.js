const tools = require('./tools');

const instructions = tools.getInputAsArray();

const submarinePosition = tools.getHorizontalPositionAndDepth(instructions);

console.log(submarinePosition.horizontalPosition * submarinePosition.depth);