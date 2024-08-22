const router = require('express').Router();
const multer  = require('multer')

/** HTTP Reqeust -- POST*/  
const { sendOTPmail } = require('../controller/otpMailController.js')
const { postInsertUserData } = require('../controller/insertDBdata.js')
const { postInsertFileData } = require('../controller/insertDBdata.js')
const { postInsertPaperFormData } = require('../controller/insertDBdata.js')
const { storage } = require('../model/UploadModel.js')
const { handleUpload } = require('../controller/UploadController.js')


const upload = multer({ storage: storage })

router.post('/sendOTPmail', sendOTPmail)
router.post('/sendUserDetails', postInsertUserData)
router.post('/sendUserFileDetails', postInsertFileData)
router.post('/uploader', upload.single('file'), handleUpload)
router.post('/sendPaperFormData', postInsertPaperFormData)


/** HTTP Reqeust -- GET*/ 
const { userLoginDetails } = require('../model/getUserData.js')
const { userFileDetails } = require('../model/getUserData.js')
const { userInboxDetails } = require('../model/getUserData.js')
const { userFileBadgeUpdate } = require('../model/updateUserData.js')
const { userFileDownload } = require('../controller/DownloadController.js')
const { confFormSectionScreen } = require('../model/getConfScreenData.js')
const { paperFormData } = require('../model/getUserData.js')
const { userFileStatusUpdate } = require('../model/updateUserData.js')

router.get('/userLoginDetails', userLoginDetails)
router.get('/userFileDetails', userFileDetails)
router.get('/userInboxDetails', userInboxDetails)
router.get('/userFileBadgeUpdate', userFileBadgeUpdate)
router.get('/userFileDownload', userFileDownload)
router.get('/confFormSectionScreen', confFormSectionScreen)
router.get('/paperFormData', paperFormData)
router.get('/userFileStatusUpdate', userFileStatusUpdate)


module.exports = router;