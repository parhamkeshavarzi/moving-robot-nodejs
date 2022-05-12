const readlineSync = require('readline-sync')

const commands = require('./commands')
const dataHandler = require('./dataHandler')

const { DIRECTS } = require('../../configs/robotConfigs')

var place = () => {
    var x = parseInt(readlineSync.keyIn('Enter x (1 to 5):', {limit: '$<1-5>'}).trim());
    var y = parseInt(readlineSync.keyIn('Enter y (1 to 5):', {limit: '$<1-5>'}).trim());
    var f = readlineSync.keyInSelect(DIRECTS, 'Enter Direct:');
    if (f == -1){
        commands.main();
    }else {
        console.log('--------------------------')
        dataHandler.writeToFile(x,y,DIRECTS[f])
        console.log(`Robot Placed at: \n\t\tx=${x} \n\t\ty=${y} \n\t\t${DIRECTS[f]}`)
        commands.main();
    }
    
}

module.exports = place;