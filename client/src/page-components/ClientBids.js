import React, { Component } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { connect } from "react-redux";
import API from '../api/jsonPlaceholder';
// import { getUnapprovedLawyers, deleteLawyer, putLawyer } from '../actions';

let lawyer;
const mapStateToProps = state => {
    lawyer = state.LawyerReducer.lawyer;

    return state;
}

class ClientBids extends Component {

    state = {
        pendingBids: []
    }

    componentDidMount = () => {
        this.getPendingBids();
    }

    getPendingBids = () => {
        let bids;
        let client;

        API.get(`/clientProposal/${lawyer.id}`)
            .then(async res => {

                bids = [...res.data]

                // loop through bids to get client details and add them to the bid object:
                for(let [i, b] of bids.entries()){
                    await this.getClient(b.client_id)
                        .then(res => {
                            client = res.data[0];
                            b.client_id = client.id;
                            b.client_first_name = client.first_name;
                            b.client_last_name = client.last_name;
                            b.client_phone_number = client.phone_number;
                            b.client_email = client.email;
                            b.client_cnic = client.cnic;
                        })
                }

                // filter to get only the pending bids:
                bids = bids.filter(bid => (bid.client_proposal_status_id === 1));

                // store bids in state:
                this.setState({ pendingBids: bids })
            })
            .catch(err => {
                console.log('err: could not get pending bids');
            })
    }

    getClient = (clientId) => {
        return API.get(`/client/${clientId}`)
            .catch(err => {
                console.log('err: couldnt get client')
            })
    }

    acceptClientBid = (bidId, clientId) => () => {
        API.patch(`/clientProposal/${bidId}`, {client_proposal_status_id: 2})
            .then(res => {
                console.log('success: patched client proposal');
                this.setState({pendingBids: []})
                this.getPendingBids();
                this.createCase(clientId, lawyer.id)
            })
            .catch(err => {
                console.log('err: couldnt patch client proposal')
            })
    }

    rejectClientBid = (bidId) => () => {
        API.patch(`/clientProposal/${bidId}`, {client_proposal_status_id: 2})
        .then(res => {
            console.log('success: patched client proposal');
            this.setState({pendingBids: []})
            this.getPendingBids();
        })
        .catch(err => {
            console.log('err: couldnt patch client proposal')
        })
    }
    
    createCase = (clientId, lawyerId) => {
        let newCase = {
            start_date: new Date(),
            case_status_id: 1,
            client_id: clientId,
            lawyer_id: lawyerId
        }

        API.post(`/case`, newCase)
            .then(res => {
                console.log('success: new case created')
            })
            .catch(err => {
                console.log('err: new case could not be created')
            })
    }

    render() {

        return (
            <Container className="py-4 ">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ maxWidth: "600px" }}>
                        <h4 className="card-title mt-3 text-center">Approve/Reject Pending Client Bids</h4>
                        <hr />
                        <ul className="requests-list p-0" >
                            {
                                this.state.pendingBids.length > 0 &&
                                this.state.pendingBids.map(bid => (
                                    <li key={bid.id.toString()} className='unstyled my-4 list-group'>
                                        <span className="list-group-item">{`${bid.client_first_name} ${bid.client_last_name}`}</span>
                                        <span className="list-group-item">{`${bid.client_email}`}</span>
                                        <span className="list-group-item">{`${bid.client_phone_number}`}</span>
                                        <span className="list-group-item">{`${bid.client_cnic}`}</span>
                                        <span role="button" className="text-center font-weight-bold text-dark list-group-item list-group-item-success" onClick={this.acceptClientBid(bid.id.toString(), bid.client_id)}>Approve</span>
                                        <span role="button" className="text-center font-weight-bold text-dark list-group-item list-group-item-danger" onClick={this.rejectClientBid(bid.id.toString())}>Reject</span>
                                    </li>
                                ))
                            }
                            {
                                this.state.pendingBids.length === 0 &&
                                <li className='unstyled my-4 list-group'>
                                    <span className="text-center list-group-item">No Pending Bids.</span>
                                </li>
                            }
                        </ul>
                    </article>
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, null)(ClientBids);
