import { Button, Col, Modal, Row } from 'react-bootstrap';

import React from 'react'

export default function LawyerDetailsModal(props) {
    let {lawyer} = props;

    return (
        <Modal {...props} size="md">
            <Modal.Header closeButton>
                <Modal.Title>{`${lawyer.first_name} ${lawyer.last_name}`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col>
                        <div className="font-weight-bold">First Name:</div>
                        <div className="font-weight-bold">Last Name:</div>
                        <div className="font-weight-bold">CNIC:</div>
                        <div className="font-weight-bold">Phone:</div>
                        <div className="font-weight-bold">E-mail:</div>
                        <div className="font-weight-bold">Firm:</div>
                    </Col>
                    <Col>
                        <div>{lawyer.first_name}</div>
                        <div>{lawyer.last_name}</div>
                        <div>{lawyer.cnic}</div>
                        <div>{lawyer.phone_number}</div>
                        <div>{lawyer.email}</div>
                        <div>{lawyer.lawFirm}</div>
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide} variant="secondary">Close</Button>
                {/* <Button variant="primary">Save changes</Button> */}
            </Modal.Footer>
        </Modal>
    )
}
