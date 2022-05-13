const readlineSync = require('readline-sync')

const commands = require('./commands')
const dataHandler = require('./dataHandler')

const { DIRECTION } = require('../../configs/robotConfigs')

var place = () => {
    var x = parseInt(readlineSync.keyIn('Enter x (0 to 4):', {limit: '$<0-4>'}).trim());
    var y = parseInt(readlineSync.keyIn('Enter y (0 to 4):', {limit: '$<0-4>'}).trim());
    var f = readlineSync.keyInSelect(DIRECTION, 'Enter Direction:');
    if (f == -1){
        commands.main();
    }else {
        console.log('--------------------------')
        dataHandler.writeToFile(x,y,DIRECTION[f])
        console.log(`Robot Placed at: \n\t\tx=${x} \n\t\ty=${y} \n\t\tF=${DIRECTION[f]}`)
        commands.main();
    }
    
}

module.exports = place;