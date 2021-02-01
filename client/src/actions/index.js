import API from '../api/jsonPlaceholder'
import config from '../config/config';
import history from '../history';

export const postNewLawyer = (lawyer, path) => dispatch => {

    API.post('/lawyer/', lawyer)
        .then(res => {
            console.log('New lawyer created:', res.data);
            history.push(path);
        })
        .catch(err => {
            console.log('Error: Could not create new lawyer.');
        })

}
