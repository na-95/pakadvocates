import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from "react-redux";
import { postLawyer, postClient } from '../actions';

class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        userType: '',
        password: '',
        cnic: '',
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

    submitForm = (e) => {
        e.preventDefault()

        // cancel submit if passwords dont match:
        if (this.state.password !== this.state.repeatPassword) {
            alert("Passwords don't match. Please try again.");
            return;
        }

        if (this.state.userType === 'client') {
            let client = {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                phone_number: this.state.phoneNumber,
                password: this.state.password,
                cnic: this.state.cnic
            }

            // post new client
            this.props.postClient(client, '/thankyou')

            return;
        }

        let lawyer = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            phone_number: this.state.phoneNumber,
            password: this.state.password,
            approval_status: 0,
            cnic: this.state.cnic
        }

        // call action that makes the API post call:
        this.props.postLawyer(lawyer, '/thankyou')
    }

    render() {
        return (
            <Container className="py-4 ">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free <b>PakAdvocates</b> account</p>
                        <hr />
                        <form onSubmit={this.submitForm}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="firstName" className="form-control" placeholder="First name" type="text" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="lastName" className="form-control" placeholder="Last name" type="text" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="email" className="form-control" placeholder="Email address" type="email" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="cnic" className="form-control" placeholder="CNIC" type="text" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                                </div>
                                <select className="custom-select" style={{ maxWidth: '120px' }}>
                                    <option selected="">+92</option>
                                    {/* <option value="1">+972</option>
                                    <option value="2">+198</option>
                                    <option value="3">+701</option> */}
                                </select>
                                <input onChange={this.handleForm} required name="phoneNumber" className="form-control" placeholder="Phone number" type="text" />
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
                                <input onChange={this.handleForm} name="password" required className="form-control" placeholder="Create password" type="password" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input onChange={this.handleForm} name="repeatPassword" required className="form-control" placeholder="Repeat password" type="password" />
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

export default connect(null, { postLawyer, postClient })(SignUp)