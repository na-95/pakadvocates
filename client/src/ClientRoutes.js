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
import ClientBids from './page-components/ClientBids'
import HeaderLawyer from './components/HeaderLawyer'

let isClientLoggedIn;
let isLawyerLoggedIn;
const mapStateToProps = state => {

    isClientLoggedIn = state.ClientReducer.isClientLoggedIn;
    isLawyerLoggedIn = state.LawyerReducer.isLawyerLoggedIn;

    return state;
}

function ClientRoutes(props) {
    return (
        <Router history={props.history}>
            {isClientLoggedIn ? <HeaderClient /> : isLawyerLoggedIn ? <HeaderLawyer/> : <Header />}
            <main>
                <Switch>
                    <Route exact path={`${config.BASENAME}/`} component={Homepage} />
                    <Route exact path={`${config.BASENAME}/signup`} component={SignUp} />
                    <Route exact path={`${config.BASENAME}/thankyou`} component={ThankYou} />
                    <Route exact path={`${config.BASENAME}/editclientprofile`} component={EditClientProfile} />
                    <Route exact path={`${config.BASENAME}/clientbids`} component={ClientBids} />
                </Switch>
            </main>
        </Router>
    )
}

export default connect(mapStateToProps, null)(ClientRoutes)
