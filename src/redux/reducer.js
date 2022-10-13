import { 
    LOAD_CARDS,
    // ////////////////////////////////////////
    SET_LOADING,
    ADD_DINNERS,
    REMOVE_DINNER,
    SET_ACTUAL_DINNER,
    ADD_FOOD_DINNER,
    CLEAR_STATE,
    SET_TABLE,
    // ////////////////////////////////////////
    LOAD_OPERATIONS,
    EDIT_OPERATION,
} from './actions';

import { order } from './functionsFilters';
const initialState = {
    // ******************************
    // amountForPage: 10,
    // loading: true,
    // // ******************************
    operations: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_OPERATIONS:
            return {
                ...state,
                operations: [...action.payload]
            };
        case SET_LOADING:
            let loading;
            console.log(!state.loading);
            if ( action.payload === null ) 
                loading = !state.loading
            else 
                loading = action.payload;
            return {
                ...state,
                loading
            };
        // case EDIT_OPERATION:
        //     return {
        //         ...state,
        //     };
            // ///////////////////////////////////
        default: return {...state};
    
    }
};