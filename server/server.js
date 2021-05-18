const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');


//setting up config file
dotenv.config({ path: 'server/config/config.env' });


const userRoute = require('./routes/user');




const app = express();

//database
const connectDatabase = require('./config/database');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));





// app.use('/api/user', userRoute)

// app.get('/', (req, res) => {
//     res.send("<h1>Hello polybase...</h1>");
// });

//import all routes
const products = require('./routes/product');

app.use('/api/v1', products)


//connecting config file
connectDatabase();

//const port;
app.listen(process.env.PORT || 8000, function() {
    console.log(`Server listening on port: ${process.env.PORT}`);
});
