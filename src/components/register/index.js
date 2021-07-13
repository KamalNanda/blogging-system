import React, {Component} from 'react' 
import axios from 'axios'
import {API_ROOT} from '../../config.json'
import { toast } from 'react-toastify';
export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        } 
    } 
    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        axios.post(`${API_ROOT}/auth/signup`, {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
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
                <div class="wrapper clearfix" style={{height:'600px', width:'600px'}}>
                    <div className="login-container">
                    <h2 style={{textAlign:'center'}}>REGISTER</h2>
                        <form className="login-form">
                            <div className="form-group">
                                <label>First Name</label>
                                <input required={true} minLength='8' onChange={this.onInputChange} value={this.state.firstname} placeholder="Enter your Username" name="firstname" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input required={true} minLength='8' onChange={this.onInputChange} value={this.state.lastname} placeholder="Enter your Username" name="lastname" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input required={true} minLength='8' onChange={this.onInputChange} value={this.state.email} placeholder="Enter your Username" name="email" type="email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input required={true} minLength='8' onChange={this.onInputChange} value={this.state.password} placeholder="Enter your Password" name="password" type="password" />
                            </div>
                            <center>
                                <div className="login-btn" onClick={this.onFormSubmit}>JOIN US</div>
                                <p style={{fontSize:'1.2rem', marginTop:'10px'}}>Already Registered? <a href="/">Login Now</a></p>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}