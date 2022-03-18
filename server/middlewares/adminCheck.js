const Person = require('../models/personModel');
const adminCheckMidllweare = async(req,res,next)=>{
    try {
       const personInfo = await Person.findById(req.personId)
       if(personInfo.role!=='admin') return res.status(401).json({msg:'you are not authorized'});
       
        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:`something went wrong`});
    }

}
module.exports =adminCheckMidllweare;