import API from '../api/jsonPlaceholder'
import config from '../config/config';
import history from '../history';

export const postLawyer = (lawyer, path) => dispatch => {

    API.post('/lawyer/', lawyer)
        .then(res => {
            console.log('New lawyer created:', res.data);
            history.push(config.BASENAME + path);
        })
        .catch(err => {
            console.log('Error: Could not create new lawyer.');
        })

}

export const deleteLawyer = (lawyerId) => dispatch => {

    return API.delete(`/lawyer/${lawyerId}`)
        .catch(err => {
            console.log('Error: Could not delete lawyer request.');
        })

}

export const putLawyer = (lawyer, lawyerId) => dispatch => {
    return API.put(`/lawyer/${lawyerId}`, lawyer)
        .catch(err => {
            console.log('Error updating lawyer approval status. API call failed.')
        })
}

export const getUnapprovedLawyers = () => dispatch => {

    API.get('/lawyer/byApprovalStatus/0')
        .then(res => {
            console.log('All pending lawyers retrieved.')

            dispatch({
                type: 'GET_PENDING_LAWYERS',
                unapprovedLawyers: [...res.data]
            })
        })
        .catch(err => {
            console.log('Error: Could not get all pending lawyers.')
        })

}

export const getApprovedLawyers = () => dispatch => {

    API.get('/lawyer/byApprovalStatus/1')
        .then(res => {
            console.log('All approved lawyers retrieved.')

            dispatch({
                type: 'GET_APPROVED_LAWYERS',
                approvedLawyers: [...res.data]
            })
        })
        .catch(err => {
            console.log('Error: Could not get all approved lawyers.')
        })

}

export const postClient = (client, path) => dispatch => {

    API.post('/client/', client)
        .then(res => {
            console.log('New client created:', res.data);
            history.push(config.BASENAME + path);
        })
        .catch(err => {
            console.log('Error: Could not create new client.');
        })

}

export const clientLoginVerify = (client, path) => dispatch => {

    return API.post('/client/login', client)
        .then(res => {
            console.log('client found:', res.data);
            // history.push(config.BASENAME + path);

            let { data: client } = res;

            delete client.password;

            dispatch({
                type: 'CLIENT_LOGIN',
                client
            })
        })

}

export const lawyerLoginVerify = (lawyer, path) => dispatch => {

    return API.post('/lawyer/login', lawyer)
        .then(res => {
            console.log('lawyer found:', res.data);
            // history.push(config.BASENAME + path);

            let { data: lawyer } = res;

            delete lawyer.password;

            dispatch({
                type: 'LAWYER_LOGIN',
                lawyer
            })
        })

}

export const loginClient = (client) => {
    return (
        {
            type: 'CLIENT_LOGIN',
            client
        }
    )
}

export const loginLawyer = (lawyer) => {
    return (
        {
            type: 'LAWYER_LOGIN',
            lawyer
        }
    )
}

export const logoutClient = () => {

    history.push(config.BASENAME);

    return (
        {
            type: 'CLIENT_LOGOUT',
        }
    )
}

export const logoutLawyer = () => {

    history.push(config.BASENAME);

    return (
        {
            type: 'LAWYER_LOGOUT',
        }
    )
}

export const patchClient = (client, clientId) => async dispatch => {
    return API.patch(`/client/${clientId}`, client)
}


export const adminLoginVerify = (admin, path) => dispatch => {

    return API.post('/admin/login', admin)
        .then(res => {
            console.log('Admin found:', res.data);
            history.push(config.BASENAME + path);

            let { data: admin } = res;

            delete admin.password;

            dispatch({
                type: 'ADMIN_LOGIN',
                admin
            })
        })

}

export const logoutAdmin = () => (
    {
        type: 'ADMIN_LOGOUT',
    }
)

export const postCourtCategory = (courtCategory) => dispatch => {

    return API.post(`/courtCategory`, courtCategory)
        .catch(err => {
            console.log('Error: Could not create court category. API call failed.');
        })

}

export const deleteCourtCategory = (courtCategoryId) => dispatch => {
    return API.delete(`/courtCategory/${courtCategoryId}`)
        .catch(err => {
            console.log('Error: Could not delete court category. API call failed.');
        })
}

export const getCourtCategories = () => dispatch => {
    API.get(`/courtCategory`)
        .then(res => {
            console.log('-----------------------GET court catgories', res);
            dispatch({
                type: 'GET_COURT_CATEGORIES',
                courtCategories: [...res.data]
            })
        })
        .catch(err => {
            console.log('Error: Could not get court categories. API call failed.');
        })
}

