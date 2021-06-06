import API from '../api/jsonPlaceholder'
import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from "react-redux";
import LawyerDetailsModal from './LawyerDetailsModal';

let isClientLoggedIn;
let client;
const mapStateToProps = state => {

    isClientLoggedIn = state.ClientReducer.isClientLoggedIn;
    client = state.ClientReducer.client;

    return state;
}

class LawyerList extends Component {
    state = {
        showBidModal: false,
        showLawyerDetailsModal: false,

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

        // bid: {}

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
        if(!lawyer){
            this.setState({
                showBidModal: !this.state.showBidModal
            })
            return;
        }
        this.setState({ showBidModal: !this.state.showBidModal, selectedLawyer: lawyer }, ()=>{
            console.log(this.state.selectedLawyer, '<<')
        })
    }

    toggleLawyerDetailsModal = (lawyer) => () => {
        if(!lawyer){
            this.setState({
                showLawyerDetailsModal: !this.state.showLawyerDetailsModal
            })
            return;
        }
        this.setState({ showLawyerDetailsModal: !this.state.showLawyerDetailsModal, selectedLawyer: lawyer }, ()=>{
            console.log(this.state.selectedLawyer, '<<')
        })
    }

    createBid = () => {

        let bid = {
            client_id: client.id,
            lawyer_id: this.state.selectedLawyer.id,
            client_proposal_status_id: 1
        }

        API.post('/clientProposal/', bid)
            .then(res => {
                console.log('New bid created:', res.data);
                alert('Your bid was sent.');
                this.toggleModal()();
            })
            .catch(err => {
                console.log('Error: Could not create new bid.');
                this.toggleModal()();
            })
    }

    render() {
        return (
            <div>

                <LawyerDetailsModal show={this.state.showLawyerDetailsModal} onHide={this.toggleLawyerDetailsModal()} lawyer={this.state.selectedLawyer}></LawyerDetailsModal>

                {/* bidding modal */}
                <Modal show={this.state.showBidModal} onHide={this.toggleModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Bid</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to make a bid to <strong>{`${this.state.selectedLawyer.first_name} ${this.state.selectedLawyer.last_name}`}</strong></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggleModal()}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.createBid}>
                            Send Bid
                        </Button>
                    </Modal.Footer>
                </Modal>
                {
                    isClientLoggedIn ?
                    <>
                        <h1 className='text-left h1'>Search Lawyers</h1>
                        <br></br>
                        <ul className="m-0 p-0 list-group">
                            {
                                this.state.lawyers.length !== 0 ? 
                                this.state.lawyers.map(lawyer => (
                                    <li className="list-group-item py-4">
                                        <div className="row">
                                            <div className="col text-left">{lawyer.first_name + ' ' + lawyer.last_name}</div>
                                            <div className="col text-left">{lawyer.phone_number}</div>
                                            <div className="col text-left">{lawyer.lawFirm}</div>
                                            <div className="col justify-content-center d-flex">
                                                <button className="btn btn-outline-dark" onClick={this.toggleLawyerDetailsModal(lawyer)}>View profile</button>
                                            </div>
                                            <div className="col justify-content-center d-flex">
                                                <button className="btn btn-outline-dark" onClick={this.toggleModal(lawyer)}>Bid Lawyer</button>
                                            </div>
                                        </div>
                                    </li>
                                )) :
                                <div className="alert alert-danger m-auto" role="alert">no registered lawyers found!</div>
                            }
                        </ul>
                    </> :
                    <h2 style={{fontSize: '24px'}}>Welcome to PakAdvocates</h2>

                }

            </div>
        )
    }
}


export default connect(mapStateToProps, null)(LawyerList);