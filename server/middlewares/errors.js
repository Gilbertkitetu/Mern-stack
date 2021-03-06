const ErrorHandler = require('../utils/errorHandler');


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    //err.massage = error.massage || 'Internal server Error';

    if(process.env.NODE_ENV === 'DEVELOPMENT'){
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }


    if(process.env.NODE_ENV === 'PRODUCTION') {
        let err = {...err}

        error.message = err.message;

        //wrong mongoose object id error
        if(err.name === 'CastError') {
            const mmessage = `Resource not found. Invalid: ${err.path}`
            error = new ErrorHandler(message, 400)
        }

        //handling mongoose validation error
        if(err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400)
        }

        res.status(error.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error'
        })

    }

   
}