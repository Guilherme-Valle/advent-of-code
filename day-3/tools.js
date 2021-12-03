const fs = require('fs');

const getInputAsMatrix = () => {
    try {
        const file = fs.readFileSync('input-3.txt', 'utf8');
        return file.split('\n').map(item => item.split('').map(binary => parseInt(binary)));
    } catch (err){
        console.error(err);
    }
}
// @https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript - Yangshun Tay response
const transposeMatrix = (matrix) => matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));

const getMoreCommonBinary = (binarys) => {
    let zeros = 0;
    let ones = 0;
    binarys.forEach((binary) => {
        if (binary) ones++; else zeros++;
    });

    return ones > zeros ? 1 : 0;
}

const getGammaAndEpsilonRates = (matrix) => {
    let gamma = '';
    let epsilon = '';
    matrix.forEach((line) => {
        const moreCommonBinary = getMoreCommonBinary(line);
        if (moreCommonBinary){
            gamma += '1';
            epsilon += '0';
        } else {
            gamma += '0';
            epsilon += '1';
        }
    });

    return {gamma, epsilon};
};

const binaryToDecimal = (binary) => parseInt(binary, 2);

module.exports = {
    getInputAsMatrix,
    transposeMatrix,
    getGammaAndEpsilonRates,
    binaryToDecimal
}