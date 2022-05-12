const fs = require('fs')

var writeToFile = (x, y, f) => {

    if (typeof(x) != 'number' || typeof(y) != 'number' || typeof(f) != 'string') {
        return console.log('Data has some problems!')
    }else{
        var data = {"x":x, "y":y, "f":f}
        var n = JSON.stringify(data, null, 2)
        fs.writeFileSync('./archive/robotData.json', n, (err) => {
            if (err) throw err;
            console.log(`Robot Placed at: \n\t\tX=${x} \n\t\tY=${y} \n\t\tF=${f}`)
        })
    }
}

var readFile = () => {
    var data = JSON.parse(fs.readFileSync('./archive/robotData.json', 'utf8'));
    return {'x': data.x, 'y': data.y, 'f': data.f}
}

module.exports = { writeToFile, readFile }