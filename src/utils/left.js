const dataHandler = require('./dataHandler')
const { DIRECTS } = require('../../configs/robotConfigs')

var left = () => {
    var data = dataHandler.readFile()
    var f = data.f
    var index = DIRECTS.indexOf(f)
    if(index == -1){
        console.log('Please Place the Robot by pressing "1"')
    }else{
        if (index == 0) {
            f = DIRECTS[3]
            dataHandler.writeToFile(data.x, data.y, f)
        }else if (1 <= index <= 3){
            f = DIRECTS[index - 1]
            dataHandler.writeToFile(data.x, data.y, f)
        }
        console.log(f)
    }
}

module.exports.left = left;