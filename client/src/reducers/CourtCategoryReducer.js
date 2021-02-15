const defaultState = {
    courtCategories: [],
};

const CourtCategoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_COURT_CATEGORIES":
            return {
                ...state,
                courtCategories: [...action.courtCategories]
            }
        default:
            return state;
    }
};

export default CourtCategoryReducer;
