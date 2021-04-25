const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/polybase', {userNewUrlParser: true, useUnifiedTopology: true});

const dbobject = mongoose.connection

dbobject.on('connected', ()=>{
    console.log("Mongo database connected successfully");
})
dbobject.on('error', ()=>{
    console.log("Mongo database connection failed!!!");
})


module.exports = mongoose;