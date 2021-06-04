import { CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
        base: {
            iconColor: "",
            color: "black",
            fontSize: "16px",
            fontFamily: '"Open Sans", sans-serif',
            fontSmoothing: "antialiased",
            "::placeholder": {
                color: "#CFD7DF"
            }
        },
        invalid: {
            color: "#e5424d",
            ":focus": {
                color: "#303238"
            }
        }
    }
};

export default function CardSection() {
    return <CardElement options={CARD_ELEMENT_OPTIONS} />;
}