import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { connect } from "react-redux";
import { getApprovedLawyers, deleteLawyer, putLawyer } from '../actions';
import EditLawyerModal from '../components/EditLawyerModal';
import _ from 'lodash';

let approvedLawyers;
const mapStateToProps = state => {
    approvedLawyers = state.LawyerReducer.approvedLawyers;

    return state;
}

class ApprovedLawyers extends Component {

    state = {
        isModalOpen: false,
        lawyerId: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        isEditedFlag: false
    }

    componentDidMount = () => {
        this.props.getApprovedLawyers();
    }

    toggleModal = (lawyerId) => () => {
        if (lawyerId) {

            let approvedLawyersMapKeys = _.mapKeys(approvedLawyers, 'id');

            this.setState({
                isModalOpen: !this.state.isModalOpen,
                lawyerId: approvedLawyersMapKeys[lawyerId].id,
                firstName: approvedLawyersMapKeys[lawyerId].first_name,
                lastName: approvedLawyersMapKeys[lawyerId].last_name,
                phoneNumber: approvedLawyersMapKeys[lawyerId].phone_number,
                email: approvedLawyersMapKeys[lawyerId].email,
            })

        } else {
            this.setState({
                isModalOpen: !this.state.isModalOpen,
                isEditedFlag: false
            })
        }
    }

    handleForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isEditedFlag: true
        }, () => {
            console.log(this.state)
        })
    }

    submitForm = async (e) => {
        e.preventDefault()

        let lawyer = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            phone_number: this.state.phoneNumber,
            email: this.state.email,
        }

        await this.props.putLawyer(lawyer, this.state.lawyerId);                         // action that makes the API post call

        this.toggleModal()();                                                             //close the form modal

        this.props.getApprovedLawyers();                                                //get latest approved lawyers from db
    }

    render() {

        return (
            <Container className="py-4 ">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ maxWidth: "600px" }}>
                        <h4 className="card-title mt-3 text-center">Approved Lawyers</h4>
                        <hr />
                        <ul className="requests-list p-0" >
                            {
                                approvedLawyers.length > 0 &&
                                approvedLawyers.map(item => (
                                    <li key={item.id.toString()} className='unstyled my-4 list-group'>
                                        <span className="list-group-item">{`${item.first_name} ${item.last_name}`}</span>
                                        <span className="list-group-item">{`${item.email}`}</span>
                                        <span role="button" onClick={this.toggleModal(item.id)} className="text-center font-weight-bold text-dark list-group-item list-group-item-dark">Edit</span>
                                    </li>
                                ))
                            }
                            {
                                this.state.isModalOpen && <EditLawyerModal show={this.state.isModalOpen} onHide={this.toggleModal()} handleForm={this.handleForm} submitForm={this.submitForm} {...this.state} />
                            }
                            {
                                approvedLawyers.length === 0 &&
                                <li className='unstyled my-4 list-group'>
                                    <span className="text-center list-group-item">No Approved Lawyers.</span>
                                </li>
                            }
                        </ul>
                    </article>
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, { getApprovedLawyers, deleteLawyer, putLawyer })(ApprovedLawyers)