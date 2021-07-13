import React, {useState, useEffect} from 'react'
import './style.css'
import {API_ROOT} from '../../config.json' 
import axios from 'axios'
import Blog from '../../components/blog'
const Blogs = ({history}) => {
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = () => {
        axios.get(`${API_ROOT}/blog/fetchAll`).then(res => {
            console.log(res)
            setBlogs(res.data.blogs)
        })
    }
    useEffect(()=>{
        fetchBlogs()
    },[])
    return(
        <div className="main-body">
            <h1>BLOGS</h1>
            <button onClick={() => history.history.push('/create')} className="create-btn">CREATE NEW BLOG</button>
            <h1>ALL BLOGS</h1>
            <div className="all-blogs-grid">
                {
                    blogs.map((blog, i) =>{
                        return(
                            <Blog  
                                key={i}
                                history={history.history}
                                image={blog.image}
                                title={blog.title}
                                id={blog._id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Blogs