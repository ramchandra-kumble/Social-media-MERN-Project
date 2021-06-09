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
<<<<<<< HEAD
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

=======
    desc: {
        type: String,
        max:200
    },
    city: {
        type: String,
        max: 50
    },
    from : {
        type: String,
        max : 50
    },
    relationship: {
        type: String,
        enum: [1,2,3]
    }
>>>>>>> 6a1ff2d765accae262eb12558a032038498b762c
},
 { timestamps: true }
)
// unique is used in this case to avoid username duplication
// timestamps tells mongoose to automatically create and update properties to schema

module.exports = mongoose.model("User", UserSchema);