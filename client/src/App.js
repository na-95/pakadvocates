import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import { Router } from "react-router";
import { store } from './store';
import { Provider } from "react-redux";
import AdminLogin from './page-components/AdminLogin';
import './custom-css/custom.css'
import AdminPanel from './page-components/AdminPanel';
import Homepage from './page-components/Homepage';
import SignUp from './page-components/SignUp';
import history from './history'
import ThankYou from './page-components/ThankYou';
import HeaderAdmin from './components/HeaderAdmin';
import LawyerRequests from './page-components/LawyerRequests';
import AddCourtCategory from './page-components/AddCourtCategory';
import ApprovedLawyers from './page-components/ApprovedLawyers';
import config from './config/config';

function App(props) {

  let { BASENAME } = config;

  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Switch>

            <Route path={`${BASENAME}/admin`}>
              <Switch>
                <Route exact path={`${BASENAME}/admin`} component={AdminLogin} />
                <Router history={history}>
                  {/* <HeaderAdmin/> */}
                  <Route path={`${BASENAME}/`} component={HeaderAdmin} />
                  <main >
                    {/* <Switch> */}
                    <Route exact path={`${BASENAME}/admin/adminpanel`} component={AdminPanel} />
                    <Route exact path={`${BASENAME}/admin/lawyerrequests`} component={LawyerRequests} />
                    <Route exact path={`${BASENAME}/admin/approvedlawyers`} component={ApprovedLawyers} />
                    <Route exact path={`${BASENAME}/admin/addcourtcategory`} component={AddCourtCategory} />
                    {/* </Switch> */}
                  </main>
                </Router>
              </Switch>
            </Route>

            <Route path={`${BASENAME}/`} >
              <Router history={history}>
                <Header />
                <main>
                  <Switch>
                    <Route exact path={`${BASENAME}/`} component={Homepage} />
                    <Route exact path={`${BASENAME}/signup`} component={SignUp} />
                    <Route exact path={`${BASENAME}/thankyou`} component={ThankYou} />
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
