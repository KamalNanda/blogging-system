const Blog = require('../models/blog') 
 
const createBlog = async (req , res , next) => { 
    console.log(req.body)
    const {title, body, image, createdBy} = req.body  
    const newBlog = new Blog({
        title, body, image, createdBy
    })
    try {
        await newBlog.save()
    } catch(err){
        console.log(err)
        return next(err)
    }
    res.status(201).json({blog: newBlog, message:'Blog Created'})
}

const getBlogById = async (req, res, next) => {
    let {blogId} = req.params
    let blog
    try{
        blog = await User.findById(blogId)
    } catch (error){ 
        next (error)
        return res.status(500).createRoomjson({message: "Fetching Blogs List Failed! Try Later "})
    }
    res.status(200).json({blog})
}

const getAllBlogs = async (req, res, next) => {
    let blogs
    try{
        blogs = await Blog.find({})
    } catch (error){ 
        next (error)
        return res.status(500).createRoomjson({message: "Fetching blogs List Failed! Try Later "})
    }
    res.status(200).json({blogs})
}

const getBlogByUserId = async (req, res, next) => {
    let {userId} = req.params
    let blog
    try{
        blog = await User.findById(userId)
    } catch (error){ 
        next (error)
        return res.status(500).createRoomjson({message: "Fetching Blogs List Failed! Try Later "})
    }
    res.status(200).json({blog})
}

exports.createBlog = createBlog
exports.getAllBlogs = getAllBlogs
exports.getBlogById = getBlogById
exports.getBlogByUserId = getBlogByUserId