const express = require('express');
const user_router = express();
const bodyParser = require('body-parser')


user_router.use(bodyParser.json())
user_router.use(bodyParser.urlencoded({ extended: true }))

user_router.set('view engine', 'ejs');
user_router.set('views', '../views');

user_router.use(express.static('public'));

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images'))
    },
    filename: (req, file, cb) => {
        const name = Date.now() + '-' + file.originalname
        cb(null, name)
    }
})

const upload = multer({ storage: storage })

const userController = require('../controllers/user_controller')

user_router.get('/register', userController.registerLoad)
user_router.post('/register', upload.single('image'), userController.register)

module.exports = user_router;