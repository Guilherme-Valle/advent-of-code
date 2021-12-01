const fs = require('fs');

function getInputAsArray(){
    try {
        const file = fs.readFileSync('input-1.txt', 'utf8');
        return file.split('\n').map(item => parseInt(item));
    } catch (err){
        console.error(err);
    }
}

function countLargerMeasurements(measurements){
    let counter = 0;
    let previousMeasurement = null;
    measurements.forEach((measurement, index) => {
        if (index > 0){
            previousMeasurement = measurements[index - 1];
        }

        if (previousMeasurement && measurement > previousMeasurement){
            counter++;
        }
    });

    return counter;
}


function createArrayOfSums(measurements){
    let sums = [];
    const length = measurements.length;
    measurements.forEach((measurement, index) => {
        if (index < length - 2){
            sums.push((measurement + measurements[index + 1] + measurements[index + 2]));
        }
    });

    return sums;
}

module.exports = {
    getInputAsArray,
    countLargerMeasurements,
    createArrayOfSums
}