const tools = require('./tools');

const binarysMatrix = tools.getInputAsMatrix();

const transposedMatrix = tools.transposeMatrix(binarysMatrix);

const binaryOutput = tools.getBinaryOutput(transposedMatrix);

console.log(tools.binaryToDecimal(binaryOutput.gammaRate) * tools.binaryToDecimal(binaryOutput.epsilonRate))