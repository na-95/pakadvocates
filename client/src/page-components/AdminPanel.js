import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class AdminPanel extends Component {
    render() {
        return (
            <Container className='py-4 text-center'>
                Hello admin, please select one of the links on top right.
            </Container>
        )
    }
}
