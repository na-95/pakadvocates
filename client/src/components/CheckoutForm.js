import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import CardSection from "./CardSection";
import Loader from "react-loader-spinner";

class CheckoutForm extends React.Component {

    state = {
        isLoading: false,
        paymentSuccess: ''
    }

    handlePayment = async event => {
        event.preventDefault();
        this.setState({ isLoading: true })

        const { stripe, elements } = this.props;
        if (!stripe || !elements) {
            this.setState({ isLoading: false, paymentSuccess: false })
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
            this.setState({ isLoading: false, paymentSuccess: false })

        } else {
            // payment successfull:
            console.log(result.token);
            this.props.setIsPaid(true)
            this.setState({ isLoading: false, paymentSuccess: true })

        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handlePayment}>
                    {
                        !this.state.paymentSuccess &&
                        <CardSection />
                    }
                    <button type="submit" disabled={!this.props.stripe || this.state.paymentSuccess} className="mt-2 btn btn-block btn-primary">
                        Pay Now
                    </button>
                </form>
                {
                    this.state.paymentSuccess === true ?
                        <p className="alert alert-success mt-2" role="alert">Payment Successful</p> :
                        this.state.paymentSuccess === false ?
                            <p className="alert alert-danger mt-2" role="alert">Payment Failed. Please Try Again</p> :
                            <></>
                }
                {
                    this.state.isLoading && <div className="backdrop"></div>
                }
                {
                    this.state.isLoading &&
                    <div className="loader-wrapper">
                        <Loader
                            type="ThreeDots"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        // timeout={3000} //3 secs
                        />
                    </div>
                }
            </div>
        );
    }
}

export default function InjectedCheckoutForm(props) {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CheckoutForm stripe={stripe} elements={elements} setIsPaid={props.setIsPaid} />
            )}
        </ElementsConsumer>
    );
}