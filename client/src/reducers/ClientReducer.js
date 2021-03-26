const defaultState = {
    isClientLoggedIn: false,
    client: {},

};

const ClientReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CLIENT_LOGIN":
            return {
                ...state,
                isClientLoggedIn: true,
                client: action.client
            }
        case "CLIENT_LOGOUT":
            return {
                isClientLoggedIn: false,
                client: {}
            }
        default:
            return state;
    }
};

export default ClientReducer;
