const express = require('express')
const app = express()
var counter = 0
app.get('/', (req, res) => res.send('Hello World! Nb of visits is ' + ++counter))
app.listen(3000, () => console.log('Example app listening on port 3000!'))