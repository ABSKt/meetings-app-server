const mongoose = require('mongoose')
const {seed} = require('./seed')
mongoose.connect("mongodb://127.0.0.1:27017/meetings-app-server", {
    useNewUrlParser: true,
    useCreateIndex: true
})

// seed()