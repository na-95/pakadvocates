import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Homepage extends Component {
    render() {
        return (
            <Container className="py-4 text-center">
                <div>
                    This is the homepage.
                </div>
            </Container>
        )
    }
}
