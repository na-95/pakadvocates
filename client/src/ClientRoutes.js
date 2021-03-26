import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Router } from "react-router"
import config from './config/config'
import Homepage from './page-components/Homepage'
import SignUp from './page-components/SignUp'
import ThankYou from './page-components/ThankYou'
import Header from './components/Header';
import { connect } from 'react-redux'
import HeaderClient from './components/HeaderClient';
import EditClientProfile from './page-components/EditClientProfile'

let isClientLoggedIn;
const mapStateToProps = state => {

    isClientLoggedIn = state.ClientReducer.isClientLoggedIn;

    return state;
}

function ClientRoutes(props) {
    return (
        <Router history={props.history}>
            {isClientLoggedIn ? <HeaderClient /> : <Header />}
            <main>
                <Switch>
                    <Route exact path={`${config.BASENAME}/`} component={Homepage} />
                    <Route exact path={`${config.BASENAME}/signup`} component={SignUp} />
                    <Route exact path={`${config.BASENAME}/thankyou`} component={ThankYou} />
                    <Route exact path={`${config.BASENAME}/editclientprofile`} component={EditClientProfile} />
                </Switch>
            </main>
        </Router>
    )
}

export default connect(mapStateToProps, null)(ClientRoutes)
