const mongoose = require ('mongoose')


const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    
     email:{
    type:String,
     required:true,
     unique:true,
},
     password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin','coach'],
        default:'user'
        
    }, 
    profilePic:{
        type:String,
        default:'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg',
    }
})
const model = mongoose.model('person',personSchema)
module.exports = model