const mongoose = require("mongoose")
const validator = require("validator")

const Meeting = mongoose.model('Meeting', {
    name: {
        type: String
    },
    description: {
        type: String,
        required: true,
        validate(val){
            if(val.length<20){
                throw new Error("Description must be atleast 20 Character long")
            }
        }
    },
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        hh: {
            type : Number,
            required: true,
            validate(val){
                if(val<0 || val>23){
                    throw new Error("Hour must be in between 0-23")
                }
            }
        },
        mm: {
            type : Number,
            required: true,
            validate(val){
                if(val<0 || val>59){
                    throw new Error("Hour must be in between 0-59")
                }
            }
        }
    },
    endTime: {
        hours: {
            type : Number,
            required: true,
            validate(val){
                if(val<0 || val>23){
                    throw new Error("Hour must be in between 0-23")
                }
            }
        },
        minutes: {
            type : Number,
            required: true,
            validate(val){
                if(val<0 || val>59){
                    throw new Error("Hour must be in between 0-59")
                }
            }
        }
    },
    attendees: [
        {
            userId: {
                type: mongoose.Schema.ObjectId,
                required: true
            },
            email: {
                type: String,
                required: true,
                validate(val){
                    if(!validator.isEmail(val)){
                        throw new Error("Email not valid")
                    }
                }
            }
        }
    ]
})

