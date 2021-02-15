import { combineReducers } from "redux";
import LawyerReducer from './LawyerReducer';
import AdminReducer from './AdminReducer';
import CourtCategoryReducer from './CourtCategoryReducer';

const rootReducers = combineReducers({
    LawyerReducer,
    AdminReducer,
    CourtCategoryReducer
});

export default rootReducers;