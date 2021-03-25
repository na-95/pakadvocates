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
