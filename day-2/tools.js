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

const getSubmarinePosition = (instructions, hasAim) => {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;
    instructions.forEach((instruction) => {
        instruction = handleInstruction(instruction);
        switch (instruction.operation){
            case 'up':
                if (hasAim){
                    aim -= instruction.value;
                } else {
                    depth -= instruction.value;
                }
                break;
            case 'down':
                if (hasAim){
                    aim += instruction.value;
                } else {
                    depth += instruction.value;
                }
                break;
            case 'forward':
                horizontalPosition += instruction.value;
                if (hasAim){
                    depth += (aim * instruction.value);
                }
                break;
        }
    });

    return {horizontalPosition, depth};
}

module.exports = {
    getInputAsArray,
    getSubmarinePosition
}