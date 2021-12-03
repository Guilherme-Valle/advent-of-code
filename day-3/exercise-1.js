const tools = require('./tools');

const binarysMatrix = tools.getInputAsMatrix();

const transposedMatrix = tools.transposeMatrix(binarysMatrix);

const rates = tools.getGammaAndEpsilonRates(transposedMatrix);

console.log(tools.binaryToDecimal(rates.gamma) * tools.binaryToDecimal(rates.epsilon))