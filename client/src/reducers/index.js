import {combineReducers} from "redux";
import LawyerReducer from './LawyerReducer';
import AdminReducer from './AdminReducer';

const rootReducers = combineReducers({
    LawyerReducer,
    AdminReducer
});

export default rootReducers;