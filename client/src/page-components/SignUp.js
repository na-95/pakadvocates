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

    formHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },
        () => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <Container className="py-4 my-2">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{maxWidth: "max-width: 400px;"}}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free account</p>
                        <hr/>
                        <form>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input onChange={this.formHandler} required name="firstName" className="form-control" placeholder="First name" type="text"/>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input onChange={this.formHandler} required name="lastName" className="form-control" placeholder="Last name" type="text"/>
                            </div> 
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                </div>
                                <input onChange={this.formHandler} required name="email" className="form-control" placeholder="Email address" type="email"/>
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
                                <input onChange={this.formHandler} required name="phoneNumber" className="form-control" placeholder="Phone number" type="text"/>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                                </div>
                                <select onChange={this.formHandler} name="userType" required className="form-control">
                                    <option value="" selected> Who are you?</option>
                                    <option value="client">Client</option>
                                    <option value="lawyer">Lawyer</option>
                                </select>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input onChange={this.formHandler} name="password" required className="form-control" placeholder="Create password" type="password"/>
                            </div> 
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input onChange={this.formHandler} name="repeatPassword" required className="form-control" placeholder="Repeat password" type="password"/>
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
