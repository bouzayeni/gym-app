const mongoose = require ('mongoose')

const commentSchema =  mongoose.Schema({
    desc:{
        type:String,
        required:true,
    },
    
   

  commentOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'person',
  },
  createdAt: {
      type:Date,
      default:new Date(),
  }
        
    
});
const postSchema =  mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    
     description:{
    type:String,
     required:true,
     unique:true,
},
  owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'person',
  },
  comments:[commentSchema],
  date:{
      type:Date,
      default: new Date(),
  }
        
    
});
const model = mongoose.model('post',postSchema)
module.exports = model