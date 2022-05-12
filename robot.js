const fs = require('fs')

const commands = require('./src/utils/commands');
const dataHandler = require('./src/utils/dataHandler')

const onStart = () => {

    dataHandler.writeToFile(0,0,'')
    console.log('--------------------------')
    console.log('Welcome To Robot game!');
    commands.main()

}

onStart();