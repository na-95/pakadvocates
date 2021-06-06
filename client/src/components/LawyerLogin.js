import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from '../config/config';
import { lawyerLoginVerify } from '../actions';
import { connect } from 'react-redux';

class LawyerLogin extends Component {

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
        },
            () => {
                console.log(this.state)
            })
    }

    postForm = async (e) => {
        e.preventDefault()

        let lawyer = {
            username: this.state.username,
            password: this.state.password,
        }

        // verify lawyer:
        await this.props.lawyerLoginVerify(lawyer, '/admin/adminpanel')
            .catch(err => {
                this.setState({
                    loginFailFlag: true
                })
            })

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
                            <form onSubmit={this.postForm}>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                    </div>
                                    <input onChange={this.handleForm} required name="username" className="form-control" placeholder="Email address" type="email" />
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

export default connect(null, {lawyerLoginVerify})(LawyerLogin)
