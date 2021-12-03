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

const getBinaryOutput = (matrix) => {
    let gammaRate = '';
    let epsilonRate = '';
    matrix.forEach((line) => {
        let zeros = 0;
        let ones = 0;
        line.forEach((binary) => {
            if (binary) ones++; else zeros++;
        });

        if (ones > zeros){
            gammaRate += '1';
            epsilonRate += '0';
        } else {
            gammaRate += '0';
            epsilonRate += '1';
        }
    });

    return {gammaRate, epsilonRate};
};

const binaryToDecimal = (binary) => parseInt(binary, 2);

module.exports = {
    getInputAsMatrix,
    transposeMatrix,
    getBinaryOutput,
    binaryToDecimal
}