import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import LawyerList from '../components/LawyerList'

export default class Homepage extends Component {
    render() {
        return (
            <Container className="py-4 text-center">
                <div>
                    <LawyerList></LawyerList>
                </div>
            </Container>
        )
    }
}
