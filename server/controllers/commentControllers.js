const Post = require('../models/postModel');




// add a new comment 
// POST /api/comment/newcomment/:postId
const addComment =async(req,res) =>{
    try {
        const {desc}= req.body;
        
        await Post.findByIdAndUpdate(req.params.postId,{
            $push:{comments: {desc, commentOwner:req.personId}}});
        res.json({ msg:'comment added'});
    } catch (error) {
       
         res.status(500).json({ msg:`something went wrong`});
    }
}

// delete  comment 
// DELETE /api/comment/:postId/:commentId
const deleteComment =async(req,res) =>{
    try {
        
        const post=await Post.findById(req.params.postId).select('comments');
            
               await Post.findByIdAndUpdate(req.params.postId,{
                $pull:{comments: { _id:req.params.commentId}}});
                 res.json({ msg:'comment removed'});
       
       
    } catch (error) {
        res.status(500).json({ msg:`something went wrong`});
    }
}


module.exports = {addComment,deleteComment}