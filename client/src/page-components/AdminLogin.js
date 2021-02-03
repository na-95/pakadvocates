
import React, { Component } from 'react'
import Axios from 'axios';
import API from '../api/jsonPlaceholder';
import {connect} from "react-redux";
import { adminLoginVerify } from '../actions';

class AdminLogin extends Component {

    state = {
        username: '',
        password: '',

        loginFailFlag: false,
        invalidMessage: 'Invalid username or password. Try again.'
    }

    handleForm = (e) => {
        this.setState({
            loginFailFlag: false,
            [e.target.name]: e.target.value
        })
    }

    postForm = async (e) => {
        e.preventDefault()

        let admin = {
            username: this.state.username,
            password: this.state.password,
        }

        // call action that makes the API post call:
        await this.props.adminLoginVerify(admin, '/admin/adminpanel')
            .catch(err => {
                this.setState({
                    loginFailFlag: true
                })
            })
    }

    render() {
        let {loginFailFlag, invalidMessage} = this.state;

        return (
            <div className="admin-login-container wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <div className='font-weight-bold h5 mt-4'>Admin Login</div>
                    </div>
                    <form onSubmit={this.postForm}>
                        <input onChange={this.handleForm} type="text" id="username" className="fadeIn second" name="username" placeholder="login"/>
                        <input onChange={this.handleForm} type="text" id="password" className="fadeIn third" name="password" placeholder="password"/>
                        <div className="text-danger">{loginFailFlag && invalidMessage}</div>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div> 
                </div> 
            </div>
        )
    }
}

export default connect(null, {adminLoginVerify})(AdminLogin)
