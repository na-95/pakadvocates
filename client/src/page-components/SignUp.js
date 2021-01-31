import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class SignUp extends Component {
    
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        userType: '',
        password: '',
        repeatPassword: ''
    }

    handleForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },
        () => {
            console.log(this.state)
        })
    }

    postForm = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <Container className="py-4 ">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{maxWidth: "max-width: 400px;"}}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free <b>PakAdvocates</b> account</p>
                        <hr/>
                        <form onSubmit={this.postForm}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="firstName" className="form-control" placeholder="First name" type="text"/>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="lastName" className="form-control" placeholder="Last name" type="text"/>
                            </div> 
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="email" className="form-control" placeholder="Email address" type="email"/>
                            </div> 
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                                </div>
                                <select className="custom-select" style={{maxWidth: "max-width: 120px;"}}>
                                    <option selected="">+92</option>
                                    {/* <option value="1">+972</option>
                                    <option value="2">+198</option>
                                    <option value="3">+701</option> */}
                                </select>
                                <input onChange={this.handleForm} required name="phoneNumber" className="form-control" placeholder="Phone number" type="text"/>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                                </div>
                                <select onChange={this.handleForm} name="userType" required className="form-control">
                                    <option value="" selected> Who are you?</option>
                                    <option value="client">Client</option>
                                    <option value="lawyer">Lawyer</option>
                                </select>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input onChange={this.handleForm} name="password" required className="form-control" placeholder="Create password" type="password"/>
                            </div> 
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input onChange={this.handleForm} name="repeatPassword" required className="form-control" placeholder="Repeat password" type="password"/>
                            </div>                                      
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                            </div>      
                            <p className="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
                        </form>
                    </article>
                </div>
            </Container> 
        )
    }
}
