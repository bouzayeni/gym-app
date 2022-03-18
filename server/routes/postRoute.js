const express = require('express');
const {createPost,getPosts,deletePost,updatePost,getPostid} =require('../controllers/postControllers');
const adminCheckMiddleware = require('../middlewares/adminCheck');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();



router.get('/',authMiddleware,getPosts);
router.get('/',authMiddleware,getPostid);
router.post('/',createPost);
router.delete('/',authMiddleware,deletePost);
router.put('/',authMiddleware,updatePost);

module.exports = router;
