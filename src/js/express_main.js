const express = require('express');
const app = express();
const path = require('path');

const startApp = () => {
    console.log(path.join(__dirname + '../../../dist'));
    app.use('', express.static(path.join(__dirname + '../../../dist')))
    app.listen(8001)
}

startApp();