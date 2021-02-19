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
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Switch>

            <Route path={`${config.BASENAME}/admin`}>
              <Switch>
                <Route exact path={`${config.BASENAME}/admin`} component={AdminLogin} />
                <Router history={history}>
                  {/* <HeaderAdmin/> */}
                  <Route path={`${config.BASENAME}/`} component={HeaderAdmin} />
                  <main >
                    {/* <Switch> */}
                    <Route exact path={`${config.BASENAME}/admin/adminpanel`} component={AdminPanel} />
                    <Route exact path={`${config.BASENAME}/admin/lawyerrequests`} component={LawyerRequests} />
                    <Route exact path={`${config.BASENAME}/admin/approvedlawyers`} component={ApprovedLawyers} />
                    <Route exact path={`${config.BASENAME}/admin/addcourtcategory`} component={AddCourtCategory} />
                    {/* </Switch> */}
                  </main>
                </Router>
              </Switch>
            </Route>

            <Route path={`${config.BASENAME}/`} >
              <Router history={history}>
                <Header />
                <main>
                  <Switch>
                    <Route exact path={`${config.BASENAME}/`} component={Homepage} />
                    <Route exact path={`${config.BASENAME}/signup`} component={SignUp} />
                    <Route exact path={`${config.BASENAME}/thankyou`} component={ThankYou} />
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
