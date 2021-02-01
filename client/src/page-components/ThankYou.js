import React from 'react'
import { Container } from 'react-bootstrap'

export default function ThankYou() {
    return (
            <Container className="py-4 ">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{maxWidth: "max-width: 400px;"}}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free <b>PakAdvocates</b> account</p>
                        <hr/>
                        <h6 className="mt-3 text-center">
                            Thank you for registering with <b>PakAdvocates</b>. Your request will be reviewed by the admin and you will be notified of the decision soon. Have a nice day.
                        </h6>
                    </article>
                </div>
            </Container> 
    )
}
