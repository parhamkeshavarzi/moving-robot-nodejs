const readlineSync = require('readline-sync');

const process = require('./process');

const { COMMANDS_LIST } = require('../../configs/robotConfigs')

var main = () => {
    console.log('--------------------------')
    var command = readlineSync.keyInSelect(COMMANDS_LIST, 'Command the Robot from the list:');
    
    //User select [0] CANCLE
    if (command == -1) {
        console.log('Good Bye!')
        console.log('--------------------------')
    }else {
        console.log('--------------------------')
        process(command)
    }

}

module.exports.main = main;