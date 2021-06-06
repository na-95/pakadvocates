const defaultState = {
    unapprovedLawyers: [],
    approvedLawyers: [],

    isLawyerLoggedIn: false,
    lawyer: {},
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
        case "LAWYER_LOGIN":
            return {
                ...state,
                isLawyerLoggedIn: true,
                lawyer: action.lawyer
            }
        case "LAWYER_LOGOUT":
            return {
                isLawyerLoggedIn: false,
                lawyer: {}
            }
        default:
            return state;
    }
};

export default LawyerReducer;
