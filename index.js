require('dotenv').config()

const exp = require('express')
const cors = require('cors')
const router = require('./Routes/router')

require('./DB/connection')

const app = exp()

app.use(cors())
app.use(exp.json())
app.use(router)

const PORT = 4200 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send(`<h1>ConnektPlus Admin Server running successfully</h1>`)
})
