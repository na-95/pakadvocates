import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import LawyerList from '../components/LawyerList'

export default class Homepage extends Component {
    render() {
        return (
            <Container className="py-4 text-center">
                <h1 className='text-left h1'>Search Lawyers</h1>
                <br></br>
                <div>
                    <LawyerList></LawyerList>
                </div>
            </Container>
        )
    }
}
