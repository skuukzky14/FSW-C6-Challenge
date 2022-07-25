const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 5000
const routes = require('./routes')
const cookieParser = require('cookie-parser')
const { main } = require('./config/mongoose')

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan('dev'))

app.use('/', routes)

main()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`app listen on ${port}`)
    })
})
.catch(err=>{
    console.log(err)
})