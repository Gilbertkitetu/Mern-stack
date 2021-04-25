const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./connection');
const userRoute = require('./routes/user');




const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));


app.use('/api/user', userRoute)

app.get('/', (req, res) => {
    res.send("<h1>Hello polybase...</h1>");
});




//const port;
app.listen(8000, function() {
    console.log(`<h1>Server listening on port 8000</h1>`);
});