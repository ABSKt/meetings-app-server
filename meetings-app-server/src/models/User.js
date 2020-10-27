const mongoose = require("mongoose")
const validator = require("validator")

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("Email not valid")
            }
        }
    },
    password: {
        type: String,
        required: true,
    }
})

// const user = new User({
//     name: "ABhishek",
//     email: "abhi@gmail.com",
//     password: "pass"
// })

// user.save()
//     .then((user)=>{
//         console.log(user)
//     })
//     .catch((err)=>{
//         console.log("err")
//     })