const express = require('express')
const app = express()
const port = 7000
const bodyParser = require('express')
app.use(bodyParser.json('mysql'))

app.get('/', (req,res)=>{
    res.send('<h1>Ini Home Page</h1>')
})
app.use('/api', require('./2.router/allRouter'))


app.listen(port, ()=> console.log('berjalan di port '+port))