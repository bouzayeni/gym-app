const express = require('express');
const {loadPersonInfos} =require('../controllers/adminControllers');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();





router.get('/personInfos',authMiddleware,loadPersonInfos);
module.exports = router;