const Person = require('../models/personModel');
const bcrypt = require('bcrypt');
const catchAsyncErrors = require("../middlewares/catchAsyncError");
const { validationResult } = require('express-validator');
const jwt= require('jsonwebtoken');



const register = async(req,res)=>{
    

    try {
        const errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
        const {name,email,password} = req.body;
        const existPerson = await Person.findOne({email});
        if (existPerson) return res.status(400).json({ msg:'you have already regisgtred'});
        const hashedPassword =  await bcrypt.hash(password, 10);
        // console.log(hashedPassword);
        const newPerson = await Person.create({name,email,password:hashedPassword});
        // res.json(newPerson)
        res.status(201).json({msg:'user created'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:`something went wrong`});
    }
};
const login = async(req,res)=>{
    try {
        const{email,password}= req.body;
        const existPerson = await Person.findOne({email});
        if (!existPerson) return res.status(400).json({ msg:'wrong email'});
         const validatePassword = await bcrypt.compare(password,existPerson.password)
         if (!validatePassword) return res.status(400).json({ msg:'wrong password'});
         const token = await  jwt.sign({sub:existPerson._id,role:existPerson.role},
            process.env.SECRET_KEY,{expiresIn:'30d'});
            res.json({token, role:existPerson.role,existPerson});


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:`something went wrong`});
             
    }
};
const loadPersonInfo = async(req, res) => {
    try {
        const personInfo = await Person.findById(req.personId).select('-password');
                res.json(personInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:`something went wrong`});
    }
}
// @desc get all users info
// const loadPersonInfos = async(req, res) => {
//     try {
//        const personInfos = await Person.find();
//        res.json(personInfos);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg:`something went wrong`});
//     }
// }
// delet user
// update User Role -- Admin
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
    
    };
  
    await User.findByIdAndUpdate(req.params.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
    });
  });
  
  // Delete User --Admin
  exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await Person.findById(req.params.id);
  
    if (!user) {
      return next(
        new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
      );
    }
  
  
    await user.remove();
  
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  });
// @desc update user profile picture
// @route PUT /api/person/profilePic
// @access PRIVATE - owner
const updateProfilePic = async(req, res) => {
    try {
     console.log(req.file);
     const imageUrl =`http://localhost:5000/uploads/${req.file.filename}`;
     await Person.findByIdAndUpdate(req.PersonId,{profilePic:imageUrl})
     res.json({ msg:'profile picture updated'});
    } catch (error) {
        console.log(error);
        // res.status(500).json({ msg:`something went wrong`});
    }
}
// Get all users(admin)
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
    const users = await Person.find();
  
    res.status(200).json({
      success: true,
      users,
    });
  });

module.exports = { register,loadPersonInfo,login,updateProfilePic,};