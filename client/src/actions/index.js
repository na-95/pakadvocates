import API from '../api/jsonPlaceholder'
import config from '../config/config';
import history from '../history';

export const postLawyer = (lawyer, path) => dispatch => {

    API.post('/lawyer/', lawyer)
        .then(res => {
            console.log('New lawyer created:', res.data);
            history.push(path);
        })
        .catch(err => {
            console.log('Error: Could not create new lawyer.');
        })

}

export const deleteLawyer = (lawyerId) => dispatch => {

    return API.delete(`/lawyer/${lawyerId}`)
        .then(res => {
            console.log('Lawyer request deleted', res.data);
        })
        .catch(err => {
            console.log('Error: Could not delete lawyer request.');
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

export const adminLoginVerify = (admin, path) => dispatch => {

    return API.post('/admin/login', admin)
        .then(res => {
            console.log('Admin found:', res.data);
            history.push(path);

            let {data:admin} = res;

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