import { loadStripe } from "@stripe/stripe-js";


const STRIPE_PUBLISHABLE_KEY = "pk_test_51IxbINDQXmzBjZGU95aFDcWvGRALJLvpNsxxLvYIl2uSsCZ4KlTm94Gz3jt4Vr3gyZtqKm0AKqo2bJLCiCCqw1ja00URCmorR1"
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export default stripePromise;