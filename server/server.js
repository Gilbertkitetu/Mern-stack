const express = require('express');
const bodyParser = require('body-parser');





const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));


app.get('/', (req, res) => {
    res.send("<h1>Hello polybase...</h1>");
});




//const port;
app.listen(5000, function() {
    console.log(`<h1>Server listening on port 5000</h1>`);
});