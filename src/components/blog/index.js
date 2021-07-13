import React from 'react'
import './style.css'
function Blog({id, title, image,history}){
    return (
        <div onClick={() => history.push({pathname: `/single/${id}`, state:{id}})} className="blog-card" style={{backgroundImage: `url(${image})`}}>
            <h2>{title}</h2>
        </div>
    )
}
export default Blog