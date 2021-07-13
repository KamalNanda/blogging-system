import React, {Component} from 'react' 
import {API_ROOT} from '../../config.json'
import { toast } from 'react-toastify';
import axios from 'axios'

class CreateBlog extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            title: '',
            image: '',
            body: '', 
        } 
    } 
    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        axios.post(`${API_ROOT}/blog/create`, {
            title: this.state.title,
            image: this.state.image,
            body: this.state.body,
            createdBy: localStorage.getItem('user')
        }).then(res => {
            console.log(res)
            toast.success(res.data.message, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });  
            this.props.history.history.push('/blogs')
        }).catch(err => {
            console.log(err)
            toast.error("Error - " +err.response.data.message, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }); 
        })
    } 
    render(){ 
        return(
            <div id="game_body"> 
                <div class="wrapper clearfix" style={{height:'650px', width:'600px'}}>
                    <div className="blog-container">
                    <h2 style={{textAlign:'center'}}>CREATE BLOG</h2>
                        <form className="login-form">
                            <div className="form-group">
                                <label>Enter Title</label>
                                <input required={true} minLength='8' onChange={this.onInputChange} value={this.state.title} placeholder="Enter Title of your Blog" name="title" type="text" />
                            </div> 
                            <div className="form-group">
                                <label>Enter Image Link</label>
                                <input required={true} minLength='8' onChange={this.onInputChange} value={this.state.image} placeholder="Enter Image for your Blog" name="image" type="text" />
                            </div> 
                            <div className="form-group">
                                <label>Enter Body</label>
                                <textarea 
                                    required={true} 
                                    onChange={this.onInputChange} 
                                    value={this.state.body} 
                                    placeholder="Enter Body of your Blog" 
                                    name="body"
                                ></textarea>
                            </div> 
                            <center>
                                <div className="login-btn" onClick={this.onFormSubmit}>CREATE</div> 
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateBlog