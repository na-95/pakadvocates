import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import { Router } from "react-router";
import AdminLogin from './page-components/AdminLogin';
import { createBrowserHistory } from "history";
import './custom-css/custom.css'
import AdminHomePage from './page-components/AdminHomePage';

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>  
        <Switch>

          <Route exact path='/' component={AdminLogin}/>

          <Router history={history}>
            <header>
              <Header/>
            </header>
            <main>
              <Switch>
                <Route path='/AdminHomePage' component={AdminHomePage}/>
              </Switch>
            </main>
          </Router>

        </Switch>
      </Router>
    </>
  );
}

export default App;
