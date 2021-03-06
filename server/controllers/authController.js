const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');

//register a user => /api/v1/register
exports.registerUser = catchAsyncError( async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: '',
            url: 'https://res.cloudinary.com/jsjnija/image/upload/v1625664062/sample.jpg'
        }
    })
})