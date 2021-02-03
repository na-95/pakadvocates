const defaultState = {
    isAdminLoggedIn: false,
    admin: {},

};

const AdminReducer = (state = defaultState, action ) => {
    switch (action.type){
        case "ADMIN_LOGIN":
            return {
                ...state,
                isAdminLoggedIn: true,
                admin: action.admin
            }
        case "ADMIN_LOGOUT":
            return {
                isAdminLoggedIn: false,
                admin: {}
            }
        default:
            return state;
    }
};

export default AdminReducer;
