const tools = require('./tools');

const instructions = tools.getInputAsArray();

const submarinePosition = tools.getSubmarinePosition(instructions, true);

console.log(submarinePosition.horizontalPosition * submarinePosition.depth);