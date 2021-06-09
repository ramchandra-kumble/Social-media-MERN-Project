
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// update user
router.put("/:id", async(req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }catch (err) {
                return res.status(500).json(err);
              }
        }
        try{
           const user = await User.findByIdAndUpdate(req.params.id, {
               $set: req.body,
            });
            res.status(200).json("Account has been updated") 
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only update your account!");
    }
})

// delete user
router.delete("/:id", async (req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
     try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted") 
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only delete your account!");
    }
})

// get a user

router

router.get("/:id", async(req,res) => {
    try{
  const user = await User.findById(req.params.id);
  const {password,updatedAt,...other} = user._doc
  res.status(200).json(other)
    } catch(err){
        return res.status(500).json(err);
    }
})


<<<<<<< HEAD
// follow a user

router.put("/:id/follow" , async (req,res)=> {
    console.log("tire -1");

    if(req.body._id !== req.params.id ) {
        try{ 
            const user = await User.findById({_id : req.params.id});
            const currentUser = await User.findById({_id : req.body._id});
            if(!user.followers.includes(req.body._id)){

                await user.updateOne ({$push : {followers : req.body._id}});
                await currentUser.updateOne({$push : {followings: req.params.id}});
                res.status(200).json("user has been followed"); 
            
            }else {
                res.status(403).json("you already follow  this user")
            }
        }catch(err) {

            res.status(500).json(err);
        }
    } else {
        
        res.status(403).json("you can not follow yourself");
    }   
});
=======
// follow user

router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (!user.followers.includes(req.body.userId)) {
          await user.updateOne({ $push: { followers: req.body.userId } });
          await currentUser.updateOne({ $push: { followings: req.params.id } });
          res.status(200).json("user has been followed");
        } else {
          res.status(403).json("you allready follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("you cant follow yourself");
    }
  });


// unfollow user

router.put("/:id/unfollow", async(req,res) => {
    if(req.body.userId !== req.params.id){
    try{
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if(!user.followers.includes(req.body.userId)){
           await user.updateOne({ $pull: {followers: req.body.userId}});
           await currentUser.updateOne({ $pull: {followings: req.body.params.id}});
           res.status(200).json("User unfollowed")
      } else {
          res.status(403).json("you don't follow this user")
      }
     } catch (err){
        res.status(500).json(err)
    }
    } else {
        res.status(403).json("can't unfollow yourself")
    }
})
>>>>>>> bc0d49be64a3d9b930bbddc425673ca138f3b5b8

//unfollow a user 

<<<<<<< HEAD
router.put("/:id/unfollow" , async (req,res)=> {
    console.log("tire -1");

    if(req.body._id !== req.params.id ) {
        try{ 
            const user = await User.findById({_id : req.params.id});
            const currentUser = await User.findById({_id : req.body._id});

            if(user.followers.includes(req.body._id)){

                await user.updateOne ({$pull : {followers : req.body._id}});
                await currentUser.updateOne({$pull : {followings: req.params.id}});
                res.status(200).json("user has been unfollowed"); 
            
            }else {
                res.status(403).json("you dont follow this user")
            }
        }catch(err) {

            res.status(500).json(err);
        }
    } else {
        
        res.status(403).json("you can not unfollow yourself");
    }   
});






module.exports = router;
=======
module.exports = router
>>>>>>> bc0d49be64a3d9b930bbddc425673ca138f3b5b8
