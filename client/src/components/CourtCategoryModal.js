import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class CourtCategoryModal extends Component {
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
                        Add a court category
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="w-75 mx-auto">
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fas fa-balance-scale"></i> </span>
                                </div>
                                <input required name="courtCategory" className="form-control" placeholder="Category name" type="text"/>
                            </div>                                 
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mx-auto btn-block w-50"> Create Category  </button>
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
