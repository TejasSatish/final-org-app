const mongoose = require(`mongoose`)

const userSchema =mongoose.Schema(
    {
        organisationName:{
            type: String,
            required: [true, "Please enter organisation name"]
        },
        username:{
            type: String,
            required: [true, "Please enter username"]
        },
        password:{
            type: String,
            required: [true, "Please enter a password"]
        },
    },
    {
        timestamps: true
    }
)
const User=mongoose.model('User', userSchema)

module.exports=User