// Using express object
const express = require('express')
// express app
const app = express()
// port to host our app
const port = 3000

// initial path in resposne to url at localhost:3000
app.get('/', (req, res) => {
    res.send('Hello Monika')
})
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Welcome to LaunchX')
})

// initialize app
app.listen(port, () =>  {
    console.log(`Example app listening on ${port}`);
})