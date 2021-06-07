import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from "react-redux";
import API from '../api/jsonPlaceholder';
import config from '../config/config';


let lawyer;
const mapStateToProps = state => {
    lawyer = state.LawyerReducer.lawyer;

    return state;
}

class CurrentCasesList extends Component {

    state = {
        cases: []
    }

    componentDidMount = () => {
        this.getAllCases();

    }

    getAllCases = () => {
        let lawyerId = lawyer.id;

        API.get(`/case/byLawyer/${lawyerId}`)
            .then(res => {
                this.setState({
                    cases: [...res.data]
                }, ()=>{
                    console.log(this.state.cases)
                })
            })
            .catch(err => {
                console.log(err, 'err: could not get this lawyer,s cases')
            })

    }

    redirect = (path, caseId, lawyerId, clientId) => () => {
        this.props.history.push(`${config.BASENAME}/${path}?case=${caseId}&lawyer=${lawyerId}&client=${clientId}`)
    }

    render() {
        return (
            <Container className="mt-3">
                <h1>Currently Open Cases</h1>
                <ul className="list-group">
                    {
                        this.state.cases.length > 0 ? 
                        this.state.cases.map(c => (
                            <li className="list-group-item py-4">
                                <div className="row">
                                    <div className="col text-left"><strong>Case ID:</strong> {c.id}</div>
                                    <div className="col text-left"><strong>Start Date:</strong> {c.start_date.substr(0, 10)}</div>
                                    <div className="col text-left"><strong>Client ID:</strong> {c.client_id}</div>
                                    <div className="col text-left"><strong>Lawyer ID:</strong> {c.lawyer_id}</div>
                                    <div className="col justify-content-center d-flex">
                                        <button className="btn btn-outline-dark" onClick={this.redirect('CaseDetails', c.id, c.lawyer_id, c.client_id)}>View Case</button>
                                    </div>
                                </div>
                            </li> 
                        )) :
                        <div className="alert alert-danger m-auto" role="alert">no registered lawyers found!</div>
                    }
                </ul>
            </Container>
        )
    }
}


export default connect(mapStateToProps, null)(CurrentCasesList);