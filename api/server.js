const express = require('express');

const app = express();


app.listen(3001, 'localhost', () => {
    console.log('>Listening on port 3001')
})