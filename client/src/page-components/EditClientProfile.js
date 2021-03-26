import axios from 'axios';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from "react-redux";
import { patchClient, loginClient } from '../actions';

let clientId;
let firstName;
let lastName;
let email;
let phoneNumber;
let cnic;

const mapStateToProps = state => {
    clientId = state.ClientReducer.client.id;
    firstName = state.ClientReducer.client.first_name;
    lastName = state.ClientReducer.client.last_name;
    email = state.ClientReducer.client.email;
    phoneNumber = state.ClientReducer.client.phone_number;
    cnic = state.ClientReducer.client.cnic;

    return state
}

class EditClientProfile extends Component {

    state = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        userType: '',
        password: '',
        cnic: cnic,
        repeatPassword: '',

        isEditedFlag: false
    }

    handleForm = (e) => {
        this.setState({
            isEditedFlag: true,
            [e.target.name]: e.target.value
        },
            () => {
                console.log(this.state)
            })
    }

    submitForm = async (e) => {
        e.preventDefault()

        // cancel submit if passwords dont match:
        if (this.state.password !== this.state.repeatPassword) {
            alert("Passwords don't match. Please try again.");
            return;
        }

        let client = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            phone_number: this.state.phoneNumber,
            // password: this.state.password,
            cnic: this.state.cnic,
        }

        try {

            // patch client request:
            let { data: patchedClient } = await this.props.patchClient(client, clientId);
            delete patchedClient.password;

            // store patched client in redux:
            this.props.loginClient(patchedClient);
            this.setState({ isEditedFlag: false })
            alert('Your information was updated successfully.')

        } catch (err) {
            console.log('Error. Could not patch client.')
        }

    }

    render() {
        return (
            <Container className="py-4 ">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                        <h4 className="card-title mt-3 text-center">Edit Profile</h4>
                        <p className="text-center">Edit details of your <b>PakAdvocates</b> account</p>
                        <hr />
                        <form onSubmit={this.submitForm}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="firstName" value={this.state.firstName} className="form-control" placeholder="First name" type="text" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="lastName" value={this.state.lastName} className="form-control" placeholder="Last name" type="text" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="email" value={this.state.email} className="form-control" placeholder="Email address" type="email" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                </div>
                                <input onChange={this.handleForm} required name="cnic" value={this.state.cnic} className="form-control" placeholder="CNIC" type="text" />
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
                                <input onChange={this.handleForm} required name="phoneNumber" value={this.state.phoneNumber} className="form-control" placeholder="Phone number" type="text" />
                            </div>
                            {/* <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                                </div>
                                <select onChange={this.handleForm} name="userType" required className="form-control">
                                    <option value="" selected> Who are you?</option>
                                    <option value="client">Client</option>
                                    <option value="lawyer">Lawyer</option>
                                </select>
                            </div> */}
                            {/* <div className="form-group input-group">
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
                            </div> */}
                            <div className="form-group">
                                <button type="submit" disabled={!this.state.isEditedFlag} className="btn btn-primary btn-block">Update Profile</button>
                            </div>
                        </form>
                    </article>
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, { patchClient, loginClient })(EditClientProfile)