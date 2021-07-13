import React, {useState, useEffect} from 'react'
import './style.css'
import {API_ROOT} from '../../config.json' 
import axios from 'axios' 

const Single = ({history}) => {
    const [blog, setBlog] = useState([])
    console.log(history)
    const fetchBlog = () => {
        axios.get(`${API_ROOT}/blog/${history?.history?.location?.state?.id}`).then(res => {
            console.log(res)
            setBlog(res.data.blog)
        })
    }
    useEffect(()=>{
        fetchBlog()
    })
    return(
        <div className="main-body single" > 
            <img alt="blog" src={blog?.image} style={{width:'100%', maxHeight:'400px'}}/>
            <h1 style={{marginTop:'10px'}}>{blog?.title}</h1>
            <p style={{marginTop:'10px'}}>{blog?.body}</p>
        </div>
    )
}
export default Single