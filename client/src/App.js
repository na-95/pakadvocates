import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import { Router } from "react-router";
import {store} from './store';
import {Provider} from "react-redux";
import AdminLogin from './page-components/AdminLogin';
import './custom-css/custom.css'
import AdminPanel from './page-components/AdminPanel';
import Homepage from './page-components/Homepage';
import SignUp from './page-components/SignUp';
import history from './history'
import ThankYou from './page-components/ThankYou';
import HeaderAdmin from './components/HeaderAdmin';
import LawyerRequests from './components/LawyerRequests';

function App(props) {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>  
          <Switch>

            <Route path="/admin">
              <Switch>
                <Route exact path='/admin' component={AdminLogin}/>
                <Router history={history} basename="/admin">
                  {/* <HeaderAdmin/> */}
                  <Route path='/' component={HeaderAdmin}/>
                  <main >
                    {/* <Switch> */}
                      <Route exact path='/adminpanel' component={AdminPanel}/>
                      <Route exact path='/lawyerrequests' component={LawyerRequests}/>
                    {/* </Switch> */}
                  </main>
                </Router>
              </Switch>
            </Route>

            <Route path='/'>
              <Router history={history}>
                <Header/>
                <main>
                  <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/thankyou' component={ThankYou} />
                  </Switch>
                </main>
              </Router>
            </Route>

          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
