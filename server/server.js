const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');


//setting up config file
dotenv.config({ path: 'server/config/config.env' });


const userRoute = require('./routes/user');




const app = express();

//middle ware
const errorMiddleware = require('./middlewares/errors');


//database
const connectDatabase = require('./config/database');

//middleware to handle errors
app.use(errorMiddleware);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));


//handle uncaught Exception
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`);
    console.log(`Shutting down due to uncaught exception`);
    process.exit(1)
})


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
const sever = app.listen(process.env.PORT || 8000, function() {
    console.log(`Server listening on port: ${process.env.PORT}`);
});


//handle unhandled promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log(`shutting down the server due to unhandled promise rejection`);
    server.close(() => {
        process.exit(1)
    })
})
