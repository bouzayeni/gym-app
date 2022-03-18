
const Post = require('../models/postModel');

//create exercise
const createPost = async(req,res)=>{
    

    try {
        
       const {title, description,owner}=req.body;
       const newPost=await Post.create({title, description,owner});
       const savedPost =await Post.findById(newPost._id).populate('owner')
       res.status(201).json(savedPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:`something went wrong`});
        
    }
};

const getPosts = async(req,res)=>{
    

    try {
      let posts=[];
      if (req.query.id){
          posts = await Post.find({owner:req.query.id}).populate('owner','-password -role')
      //.populate('comments')
      .populate('comments.commentOwner');
    } else {
        posts = await Post.find({}).populate('owner','-password -role')
      //.populate('comments')
      .populate('comments.commentOwner');
    }
        
       res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:`something went wrong`});
        
    }
};
const getPostid = async(req,res)=>{
    

    try {
      
       const posts = await Post.find({owner:req.personId}).populate('owner','-password -role')
       //.populate('comments')
       .populate('comments.commentOwner');
       res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:`something went wrong`});
        
    }
};
/*const deletePost = async(req,res)=>{
    

    try {
      const post = await Post.findById(req.params.postId);
      console.log(String(post.owner._id));
      console.log(req.personId);
      if (String(post.owner._id) !== req.personId);
      return res.status(401).json({msg:'you are not authorized'});
      
        await Post.findByIdAndDelete(req.params.postId);
       res.json({ msg:`post deleted`});
    } catch (error) {
        
        res.status(500).json({ msg:`something went wrong`});
        
    }
};*/
/*const updatePost = async(req,res)=>{
    

    try {
      const post = await Post.findById(req.params.postId);
      console.log(String(post.owner._id));
      console.log(req.personId);
      if (String(post.owner._id) !== req.personId);
      return res.status(401).json({msg:'you are not authorized'});
      
        await Post.findByIdAndUpdate(req.params.postId,{...req.body});
       res.json({ msg:`post updated`});
    } catch (error) {
        
        res.status(500).json({ msg:`something went wrong`});
        
    }
};*/
//delete Post
const deletePost = async (req, res) => {
   
    Post.findByIdAndDelete(req.query.id, req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  };
  // update Post
const updatePost = async (req, res) => {
   
    Post.findByIdAndUpdate(req.query.id, req.body, {new: true})
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  };


module.exports = {createPost ,getPosts,deletePost,updatePost,getPostid};