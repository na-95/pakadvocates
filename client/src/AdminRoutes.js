import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Router } from "react-router"
import HeaderAdmin from './components/HeaderAdmin'
import config from './config/config'
import AddCourtCategory from './page-components/AddCourtCategory'
import AdminLogin from './page-components/AdminLogin'
import AdminPanel from './page-components/AdminPanel'
import ApprovedLawyers from './page-components/ApprovedLawyers'
import LawyerRequests from './page-components/LawyerRequests'

export default function AdminRoutes(props) {
    return (
        <Switch>
            <Route exact path={`${config.BASENAME}/admin`} component={AdminLogin} />
            <Router history={props.history}>
                <Route path={`${config.BASENAME}/`} component={HeaderAdmin} />
                <main >
                    <Route exact path={`${config.BASENAME}/admin/adminpanel`} component={AdminPanel} />
                    <Route exact path={`${config.BASENAME}/admin/lawyerrequests`} component={LawyerRequests} />
                    <Route exact path={`${config.BASENAME}/admin/approvedlawyers`} component={ApprovedLawyers} />
                    <Route exact path={`${config.BASENAME}/admin/addcourtcategory`} component={AddCourtCategory} />
                </main>
            </Router>
        </Switch>
    )
}
