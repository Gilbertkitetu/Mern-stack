const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const userModel = require('../models/user_model')

router.get('/get_users', (req, res) => {
    res.send("This is a get users route");
    console.log("This is a get users route");
})


router.post('/add_new_user', (req, res)=>{
    res.send("Add new user router...");
    const new_user = new userModel({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        phone_no : req.body.phone_no,
        password : req.body.password,
        user_id : req.body.user_id
    })
    new_user.save(function (err){
        if(!err){
            res.send("New user added successfully");
            console.log("New user added successfully");
        }else{
            res.send(err)
        }
    })
});


module.exports = router;