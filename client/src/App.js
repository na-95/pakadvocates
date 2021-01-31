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

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>  
          <Switch>

            <Route exact path="/admin">
              <Router history={history}>
                <main >
                  <Switch>
                    <Route exact path='/admin' component={AdminLogin}/>
                    <Route exact path='/admin/AdminPanel' component={AdminPanel}/>
                  </Switch>
                </main>
              </Router>
            </Route>

            <Route path='/'>
              <Router history={history}>
                <Header/>
                <main>
                  <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/signup' component={SignUp} />
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
