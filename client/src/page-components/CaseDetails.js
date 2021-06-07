import React, { Component } from 'react';
import API from '../api/jsonPlaceholder';
import qs from 'query-string';
import _ from 'lodash';
import { Card, Col, Container, Row } from 'react-bootstrap';

export default class CaseDetails extends Component {

    state = {
        case: {},
        client: {},
        lawyer: {},

        caseDetails: {}
    }

    componentDidMount = async () => {

        await this.getCase();
        await this.getClient();
        await this.getLawyer();

        setTimeout(() => {

            let {case: theCase, client, lawyer } = this.state;

            this.setState({
                caseDetails: {

                    caseId: theCase.id,
                    caseStartDate: theCase.start_date,
                    lawyerId: lawyer.id,
                    clientId: client.id,
                    clientFirstName: client.first_name,
                    clientLastName: client.last_name,
                    clientEmail: client.email,
                    clientPhone: client.phone_number,
                    clientCnic: client.cnic,
                    lawyerFirstName: lawyer.first_name,
                    lawyerLastName: lawyer.last_name,
                    lawyerEmail: lawyer.email,
                    lawyerPhone: lawyer.phone_number,
                    lawyerCnic: lawyer.cnic,


                }
            }, ()=>{
                console.log(this.state.caseDetails)
            })
            
        }, 1000);

    }

    getCase = () => {
        let parsedQs = qs.parse(this.props.location.search);
        let {case: caseId} = parsedQs;

        API.get(`/case/byCase/${caseId}`)
            .then(res => {
                this.setState({
                    case: {...res.data[0]}
                }, ()=>{
                })
            })
            .catch(err => {
                console.log(err, 'err: could not get case against this case id')
            })
    }

    getClient = () => {
        let parsedQs = qs.parse(this.props.location.search);
        let {client: clientId} = parsedQs;

        API.get(`/client/${clientId}`)
            .then(res => {
                this.setState({
                    client: {...res.data[0]}
                }, ()=>{
                })
            })
            .catch(err => {
                console.log(err, 'err: could not get this client against client id')
            })
    }

    getLawyer = () => {
        let parsedQs = qs.parse(this.props.location.search);
        let {lawyer: lawyerId} = parsedQs;

        API.get(`/lawyer/${lawyerId}`)
            .then(res => {
                this.setState({
                    lawyer: {...res.data[0]}
                }, ()=>{
                    console.log(this.state)
                })
            })
            .catch(err => {
                console.log(err, 'err: could not get this client against client id')
            })
    }

    render() {
        let {caseDetails }= this.state
        return (
            <Container className="mt-3">
                <h1>Case Details</h1>
                {
                    !_.isEmpty(this.state.caseDetails) &&
                    <> 
                        <Card className="shadow p-4">
                            <Row className="py-2">
                                <Col className="font-weight-bold">Case ID: </Col>
                                <Col>{caseDetails.caseId}</Col>
                            </Row>
                            <Row className="py-2">
                                <Col className="font-weight-bold">Client Full Name: </Col>
                                <Col>{caseDetails.clientFirstName + ' ' + caseDetails.clientLastName}</Col>
                            </Row>
                            <Row className="py-2">
                                <Col className="font-weight-bold">Client ID: </Col>
                                <Col>{caseDetails.clientId}</Col>
                            </Row>
                            <Row className="py-2">
                                <Col className="font-weight-bold">Lawyer Full Name: </Col>
                                <Col>{caseDetails.lawyerFirstName + ' ' + caseDetails.lawyerLastName}</Col>
                            </Row>
                            <Row className="py-2">
                                <Col className="font-weight-bold">Lawyer ID: </Col>
                                <Col>{caseDetails.lawyerId}</Col>
                            </Row>
                            <Row className="py-2">
                                <Col className="font-weight-bold">Case Start Date:</Col>
                                <Col>{caseDetails.caseStartDate.substr(0,10)}</Col>
                            </Row>
                            <Row className="py-2">
                                <Col className="font-weight-bold">Client CNIC: </Col>
                                <Col>{caseDetails.clientCnic}</Col>
                            </Row>
                            <Row className="py-2">
                                <Col className="font-weight-bold">Lawyer CNIC:</Col>
                                <Col>{caseDetails.lawyerCnic}</Col>
                            </Row>
                            <Row className="py-2">
                                <Col className="font-weight-bold">Client Email:</Col>
                                <Col>{caseDetails.clientEmail}</Col>
                            </Row>
                            <Row className="py-2">
                                <Col className="font-weight-bold">Lawyer Email:</Col>
                                <Col>{caseDetails.lawyerEmail}</Col>
                            </Row>
                        </Card>
                        <button className="btn btn-lg mt-4 btn-outline-dark">Upload Documents</button>
                    </>
                }
            </Container>
        )
    }
}
