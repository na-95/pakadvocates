import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Router } from "react-router"
import config from './config/config'
import Homepage from './page-components/Homepage'
import SignUp from './page-components/SignUp'
import ThankYou from './page-components/ThankYou'
import Header from './components/Header';

export default function ClientRoutes(props) {
    return (
        <Router history={props.history}>
            <Header />
            <main>
                <Switch>
                    <Route exact path={`${config.BASENAME}/`} component={Homepage} />
                    <Route exact path={`${config.BASENAME}/signup`} component={SignUp} />
                    <Route exact path={`${config.BASENAME}/thankyou`} component={ThankYou} />
                </Switch>
            </main>
        </Router>
    )
}
