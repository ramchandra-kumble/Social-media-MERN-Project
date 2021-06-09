const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min:5,
        max:20,
        unique:true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        unique: true 
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc:{
        type: String,
        max:50
    },
    city: {
        type: String,
        max:50
    },
    from:{
        type:String,
        max:50
    },
    relationship:{
        type:Number,
        enum: [1, 2, 3]
    },

},
 { timestamps: true }
)
// unique is used in this case to avoid username duplication
// timestamps tells mongoose to automatically create and update properties to schema

module.exports = mongoose.model("User", UserSchema);