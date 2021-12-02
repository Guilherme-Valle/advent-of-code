const fs = require('fs');

const getInputAsArray = () =>{
    try {
        const file = fs.readFileSync('input-2.txt', 'utf8');
        return file.split('\n');
    } catch (err){
        console.error(err);
    }
}

const handleInstruction = (instruction) => {
    const splitedInstruction = instruction.split(' ');

    return {
        operation: splitedInstruction[0],
        value: parseInt(splitedInstruction[1])
    }
}

const getHorizontalPositionAndDepth = (instructions) => {
    let horizontalPosition = 0;
    let depth = 0;
    instructions.forEach((instruction) => {
        instruction = handleInstruction(instruction);
        switch (instruction.operation){
            case 'up':
                depth -= instruction.value;
                break;
            case 'down':
                depth += instruction.value;
                break;
            case 'forward':
                horizontalPosition += instruction.value;
                break;
        }
    });

    return {horizontalPosition, depth};
}

module.exports = {
    getInputAsArray,
    getHorizontalPositionAndDepth
}