const express = require('express');
const {addComment,deleteComment} =require('../controllers/commentControllers');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();




router.post('/newcomment/:postId',authMiddleware,addComment);
router.delete('/:postId/:commentId',authMiddleware,deleteComment);

module.exports = router;