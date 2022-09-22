
const express = require('express')

const app = express()
const port = 7000;

app.get('/', (req, res) => {
        console.log('this is the home page')
})

app.listen(port, () => {
        console.log('server started')
})
