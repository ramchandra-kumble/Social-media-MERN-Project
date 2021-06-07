const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

dotenv.config();




//database
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true , useUnifiedTopology : true},()=> {
    console.log("connected to mongo server");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));







app.listen(3000 , (req,res)=>{
    console.log('backend Server started');
})
