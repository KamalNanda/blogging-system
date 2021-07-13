const express= require('express') 
const userControllers = require('../controllers/auth') 
const blogControllers = require('../controllers/blog') 
const router = express.Router() 


router.get('/' , (req , res , next)=> {
    res.json("Blogging System Made with ❤ By Kamal Nanda")
}) 

// USERS ROUTES 

router.post('/auth/signup' , userControllers.signUp)
router.post('/auth/login' , userControllers.login) 
router.get('/auth/:userId', userControllers.getUserById) 

// BLOG ROUTES 

router.post('/blog/create' , blogControllers.createBlog)
router.get('/blog/fetchAll' , blogControllers.getAllBlogs) 
router.get('/blog/:blogId', blogControllers.getBlogById) 
router.get('/blog/user/:userId', blogControllers.getBlogByUserId) 

module.exports = router