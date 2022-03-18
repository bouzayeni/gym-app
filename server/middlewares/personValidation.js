const { body } = require('express-validator');
const validation = [
    body('email','invalid email !').isEmail(),
    body('password','password must be at least 5 character').isLength({ min:6}),
    ]


    module.exports =validation;