const place = require('./place');
const dataHandler = require('./dataHandler')
const commands = require('./commands')

const { COMMANDS_LIST } = require('../../configs/robotConfigs')

var process = (command) => {
    if (COMMANDS_LIST[command] == 'PLACE'){
        place()
    }else if (COMMANDS_LIST[command] == 'MOVE'){
        //move()
    }else if (COMMANDS_LIST[command] == 'LEFT'){
        //left()
    }else if (COMMANDS_LIST[command] == 'RIGHT'){
        //right()
    }else if (COMMANDS_LIST[command] == 'REPORT'){
        dataHandler.readFile()
        commands.main();
    }
}

module.exports = process;