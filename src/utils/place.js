const readlineSync = require('readline-sync')

const commands = require('./commands')
const dataHandler = require('./dataHandler')

const { DIRECTS } = require('../../configs/robotConfigs')

var place = () => {
    var x = parseInt(readlineSync.keyIn('Enter x (0 to 4):', {limit: '$<0-4>'}).trim());
    var y = parseInt(readlineSync.keyIn('Enter y (0 to 4):', {limit: '$<0-4>'}).trim());
    var f = readlineSync.keyInSelect(DIRECTS, 'Enter Direct:');
    if (f == -1){
        commands.main();
    }else {
        console.log('--------------------------')
        dataHandler.writeToFile(x,y,DIRECTS[f])
        console.log(`Robot Placed at: \n\t\tx=${x} \n\t\ty=${y} \n\t\tF=${DIRECTS[f]}`)
        commands.main();
    }
    
}

module.exports = place;