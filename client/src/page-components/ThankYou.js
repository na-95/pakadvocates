import React from 'react'
import { Container } from 'react-bootstrap';
import qs from 'query-string';

export default function ThankYou(props) {
    let parsedQs = qs.parse(props.location.search);
    let {'user-type': userType} = parsedQs;

    let messageForLawyer = <h6 className="mt-3 text-center">Thank you for registering with <b>PakAdvocates</b>. Your request will be reviewed by the admin and you will be notified of the decision soon. Have a nice day.</h6>;

    let messageForClient = <h6 className="mt-3 text-center">Thank you for registering with <b>PakAdvocates</b>. You can now sign in to your account to browse available lawyers and create bids! Have a nice day.</h6>;

    // redirect to home:
    // setTimeout(() => {
    //     props.history.push(config.BASENAME + path);
    // }, 4000);

    return (
            <Container className="py-4 ">
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{maxWidth: "400px;"}}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free <b>PakAdvocates</b> account</p>
                        <hr/>
                        {
                            userType === 'lawyer' ? messageForLawyer : messageForClient
                        }
                    </article>
                </div>
            </Container> 
    )
}
