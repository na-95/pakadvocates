const defaultState = {
    unapprovedLawyers: []
};

const LawyerReducer = (state = defaultState, action ) => {
    switch (action.type){
        case "GET_PENDING_LAWYERS":
            return {
                unapprovedLawyers: [...action.unapprovedLawyers]
            }
        default:
            return state;
    }
};

export default LawyerReducer;
