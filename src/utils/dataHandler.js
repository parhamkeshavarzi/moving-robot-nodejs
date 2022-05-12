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
    console.log(`Robot Placed at: \n\t\tX=${data.x} \n\t\tY=${data.y} \n\t\tF=${data.f}`)
}

module.exports = { writeToFile, readFile }