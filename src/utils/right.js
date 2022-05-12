const dataHandler = require('./dataHandler')
const { DIRECTS } = require('../../configs/robotConfigs')

var right = () => {
    var data = dataHandler.readFile()
    var f = data.f
    var index = DIRECTS.indexOf(f)
    if (index == 3) {
        f = DIRECTS[0]
        dataHandler.writeToFile(data.x, data.y, f)
    }else if (1 <= index <= 3){
        f = DIRECTS[index + 1]
        dataHandler.writeToFile(data.x, data.y, f)
    }
    console.log(f)
}

module.exports.right = right;