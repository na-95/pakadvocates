import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class EditLawyerModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={false}
                backdrop={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Lawyer
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="w-75 mx-auto" onSubmit={this.props.submitForm}>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-balance-scale"></i> </span>
                            </div>
                            <input required name="firstName" className="form-control" value={this.props.firstName} type="text" onChange={this.props.handleForm} />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-balance-scale"></i> </span>
                            </div>
                            <input required name="lastName" className="form-control" value={this.props.lastName} type="text" onChange={this.props.handleForm} />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-balance-scale"></i> </span>
                            </div>
                            <input required name="phoneNumber" className="form-control" value={this.props.phoneNumber} type="text" onChange={this.props.handleForm} />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-balance-scale"></i> </span>
                            </div>
                            <input required name="email" className="form-control" value={this.props.email} type="text" onChange={this.props.handleForm} />
                        </div>
                        <div className="form-group">
                            <button type="submit" disabled={!this.props.isEditedFlag} className="btn btn-primary mx-auto btn-block w-50"> Save  </button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
