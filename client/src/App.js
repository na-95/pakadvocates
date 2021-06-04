import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { Router } from "react-router";
import { store } from './store';
import { Provider } from "react-redux";
import './custom-css/custom.css'
import history from './history'
import config from './config/config';
import AdminRoutes from './AdminRoutes';
import ClientRoutes from './ClientRoutes';
// import { loadStripe } from "@stripe/stripe-js";

// const STRIPE_PUBLISHABLE_KEY = "pk_test_51IxbINDQXmzBjZGU95aFDcWvGRALJLvpNsxxLvYIl2uSsCZ4KlTm94Gz3jt4Vr3gyZtqKm0AKqo2bJLCiCCqw1ja00URCmorR1"
// const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);


function App(props) {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            {/* Admin Routes: */}
            <Route path={`${config.BASENAME}/admin`} render={(props) => (<AdminRoutes {...props} />)} />
            {/* Client Routes: */}
            <Route path={`${config.BASENAME}/`} render={(props) => (<ClientRoutes {...props} />)} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
