import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from '../config/config';

export default class ClientLogin extends Component {

    state = {

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

        // // cancel submit if passwords dont match:
        // if (this.state.password !== this.state.repeatPassword) {
        //     alert("Passwords don't match. Please try again.");
        //     return;
        // }

        // let lawyer = {
        //     first_name: this.state.firstName,
        //     last_name: this.state.lastName,
        //     email: this.state.email,
        //     phone_number: this.state.phoneNumber,
        //     password: this.state.password,
        //     approval_status: 0,
        //     cnic: this.state.cnic
        // }

        // // call action that makes the API post call:
        // this.props.postLawyer(lawyer, '/thankyou')
    }

    render() {
        return (
            <Modal {...this.props}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Login</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="card bg-light">
                        <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                            <h4 className="card-title mt-3 text-center">Login</h4>
                            <p className="text-center">Login to your <b>PakAdvocates</b> account</p>
                            <hr />
                            <form onSubmit={this.submitForm}>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                    </div>
                                    <input onChange={this.handleForm} required name="email" className="form-control" placeholder="Email address" type="email" />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input onChange={this.handleForm} name="password" required className="form-control" placeholder="Password" type="password" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </div>
                                <p className="text-center">Don't have an account? <Link onClick={this.props.onHide} to={`${config.BASENAME}/signup`}>Register</Link> </p>
                            </form>
                        </article>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}
