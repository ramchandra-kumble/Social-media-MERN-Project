const router = require('express').Router();
const { json } = require('express');
const User = require("../models/User");
const bcrypt = require("bcrypt");

// update user
router.put("/:id" , async (req,res)=> {

    if(req.body._id === req.params.id || req.body.isAdmin) {
        if(req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password , salt);

                
            }catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate( req.params.id , {
                $set: req.body,
                }
            );
            res.status(200).json("account has been updated");
        }catch(err) {
            res.status(500).json(err);
        }

    } else {
        return res.status(403).json("you can only update your account")
    }

});
//delete user

router.delete("/:id" , async (req,res)=> {

    if(req.body._id === req.params.id || req.body.isAdmin) {
       
        try {
            const user = await User.findByIdAndDelete( {_id : req.params.id});
            res.status(200).json("account has been deleted");
        }catch(err) {
            res.status(500).json(err);
        }

    } else {
        return res.status(403).json("you can only delete your account")
    }

});

//get user

router.get("/:id" , async (req,res) => {
    try {
        const user = await User.findById({_id : req.params.id});
        const {password , updatedAt , ...other} = user._doc;

        res.status(200).json(other);
    }catch(err) {
        res.status(500).json(err);
    }
});

// follow a user
router.put ("/:id/follow", async (req,res)=> {
    if(req.body._id !== req.params.id ) {

    } else {
        res.status(403).json("you can not follow yourself");
    }
})






//unfollow a user




module.exports = router;