import API from '../api/jsonPlaceholder'
import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from "react-redux";

let isClientLoggedIn;
const mapStateToProps = state => {

    isClientLoggedIn = state.ClientReducer.isClientLoggedIn;

    return state;
}

class LawyerList extends Component {
    state = {
        showModal: false,
        lawyers: [
            {
                name: 'Mr Ali Aslam',
                phone: '03218273592',
                lawFirm: 'Ghazi Law Associates'
            },
            {
                name: 'Mr Aqeel Malik',
                phone: '03332423469',
                lawFirm: 'Raza and Raza Law Firm'
            },
            {
                name: 'Mr Rabia Ishaq Hanjra',
                phone: '03232342465',
                lawFirm: 'Hanjra Law Associates'
            },
            {
                name: 'Mr Bilal Raza',
                phone: '03221534244',
                lawFirm: 'Qureshi Law Associates'
            },
            {
                name: 'Mr Mian Muhibullah Kakakhel',
                phone: '03435463452',
                lawFirm: 'Raza and Raza Law Firm'
            },
            {
                name: 'Ms Sibah Farooq',
                phone: '03234234234',
                lawFirm: 'Ejaz Law Firm'
            },

        ],

        selectedLawyer: {},

        bid: {}

    }

    componentDidMount = () => {
        API.get(`/lawyer/byApprovalStatus/1`)
            .then(res => {
                console.log('approved lawyers', res)
                res.data.forEach((l, index) => { l.lawFirm = "Zulifqar Associates"; if (index > 2) { l.lawFirm = "Zaffar and Associates" } })
                this.setState({ lawyers: [...res.data] })
            },
                err => {
                    console.log('error getting approved lawyers')
                })

    }

    toggleModal = (lawyer) => () => {
        if (lawyer)
            this.setState({ showModal: !this.state.showModal, selectedLawyer: lawyer })
        else
            this.setState({ showModal: !this.state.showModal })
    }

    render() {
        return (
            <div>
                {/* bidding modal */}
                <Modal show={this.state.showModal} onHide={this.toggleModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Lawyer Bid</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to make a bid to <strong>{this.state.selectedLawyer.name}</strong></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggleModal()}>
                            No
                        </Button>
                        <Button variant="primary" onClick={this.toggleModal()}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {
                    isClientLoggedIn &&
                    <>
                        <h1 className='text-left h1'>Search Lawyers</h1>
                        <br></br>
                    </>
                }
                <ul className="m-0 p-0 list-group">
                    {
                        isClientLoggedIn &&
                        this.state.lawyers.map(lawyer => (
                            <li className="list-group-item py-4">
                                <div className="row">
                                    <div className="col text-left">{lawyer.first_name + ' ' + lawyer.last_name}</div>
                                    <div className="col text-left">{lawyer.phone_number}</div>
                                    <div className="col text-left">{lawyer.lawFirm}</div>
                                    <div className="col justify-content-center d-flex">
                                        <button className="btn btn-outline-dark">view profile</button>
                                    </div>
                                    <div className="col justify-content-center d-flex">
                                        <button className="btn btn-outline-dark" onClick={this.toggleModal(lawyer)}>bid</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}


export default connect(mapStateToProps, null)(LawyerList);