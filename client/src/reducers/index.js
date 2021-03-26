import { combineReducers } from "redux";
import LawyerReducer from './LawyerReducer';
import AdminReducer from './AdminReducer';
import CourtCategoryReducer from './CourtCategoryReducer';
import ClientReducer from './ClientReducer';

const rootReducers = combineReducers({
    LawyerReducer,
    AdminReducer,
    CourtCategoryReducer,
    ClientReducer
});

export default rootReducers;