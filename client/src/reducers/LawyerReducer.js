const defaultState = {
    unapprovedLawyers: [],
    approvedLawyers: [],
};

const LawyerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_PENDING_LAWYERS":
            return {
                ...state,
                unapprovedLawyers: [...action.unapprovedLawyers]
            }
        case "GET_APPROVED_LAWYERS":
            return {
                ...state,
                approvedLawyers: [...action.approvedLawyers]
            }
        default:
            return state;
    }
};

export default LawyerReducer;
