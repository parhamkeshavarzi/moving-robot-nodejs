const place = require('./place');
const dataHandler = require('./dataHandler')
const commands = require('./commands')
const turnLeft = require('./left')
const trunRight = require('./right')
const move = require('./move')

const { COMMANDS_LIST } = require('../../configs/robotConfigs')

var process = (command) => {
    if (COMMANDS_LIST[command] == 'PLACE'){
        place()
    }else if (COMMANDS_LIST[command] == 'MOVE'){
        move.forward();
        commands.main();
    }else if (COMMANDS_LIST[command] == 'LEFT'){
        turnLeft.left()
        commands.main();
    }else if (COMMANDS_LIST[command] == 'RIGHT'){
        trunRight.right()
        commands.main();
    }else if (COMMANDS_LIST[command] == 'REPORT'){
        
        var data = dataHandler.readFile()
        console.log(`Robot Placed at: \n\t\tX=${data.x} \n\t\tY=${data.y} \n\t\tF=${data.f}`)
        commands.main();
    }
}

module.exports = process;