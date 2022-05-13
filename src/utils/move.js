const dataHandler = require('./dataHandler')
const { DIRECTION } = require('../../configs/robotConfigs')

var forward = () => {
    var data = dataHandler.readFile()
    var x = data.x
    var y = data.y
    var f = data.f
    if(DIRECTION.indexOf(f) == -1){
        console.log('Please Place the Robot by pressing "1"')
    }else{
        takeStep(x, y, f)
    }
}

var takeStep = (x, y, f) => {
    if (f == 'NORTH'){
        if (y <= 3){
            dataHandler.writeToFile(x, y+1, f)
            console.log('Robot takes 1 step to NORTH')
        }else{
            console.log('Robot reach the boundaries!')
        }
    }else if (f == 'EAST'){
        if (x <= 3){
            dataHandler.writeToFile(x+1, y, f)
            console.log('Robot takes 1 step to EAST')
        }else{
            console.log('Robot reach the boundaries!')
        }
    }else if (f == 'SOUTH'){
        if (1 <= y){
            dataHandler.writeToFile(x, y-1, f)
            console.log('Robot takes 1 step to SOUTH')
        }else{
            console.log('Robot reach the boundaries!')
        }
    }else if (f == 'WEST'){
        if (1 <= x){
            dataHandler.writeToFile(x-1, y, f)
            console.log('Robot takes 1 step to WEST')
        }else{
            console.log('Robot reach the boundaries!')
        }
    }
}

module.exports.forward = forward;