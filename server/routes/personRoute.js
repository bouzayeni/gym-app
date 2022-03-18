const express = require('express');
const {register, login,loadPersonInfo,updateProfilePic, loadPersonInfos} =require('../controllers/personControllers');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();
const personValidation = require('../middlewares/personValidation');
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './img-uploads')
    },
    filename: function (req, file, cb) {
      
      const uniqueSuffix = Date.now() + '-' + file.originalname
      cb(null, uniqueSuffix)
    }
  })
  const upload = multer({ storage: storage })
router.put('/profilePic',
authMiddleware,
 upload.single('profilePicture'),
 updateProfilePic);
router.post('/register',
personValidation,
register
);
router.post('/login',personValidation,login);
router.get('/personInfo',authMiddleware,loadPersonInfo);
// router.get('/personInfos',authMiddleware,loadPersonInfos);

module.exports = router; 