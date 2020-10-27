const express = require("express")
const port = process.env.PORT || 3000
require('./db/mongoose')
const app = express()
app.listen(port,()=>{
    console.log("running")
})