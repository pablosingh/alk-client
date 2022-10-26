import { 
    // LOAD_CARDS,
    // ////////////////////////////////////////
    SET_LOADING,
    // ADD_DINNERS,
    // REMOVE_DINNER,
    // SET_ACTUAL_DINNER,
    // ADD_FOOD_DINNER,
    // CLEAR_STATE,
    // SET_TABLE,
    // ////////////////////////////////////////
    // EDIT_OPERATION,
    LOAD_OPERATIONS,
    SET_BALANCE,
    SET_USER
} from './actions';

import { order } from './functionsFilters';
const initialState = {
    // ******************************
    // amountForPage: 10,
    // loading: true,
    // // ******************************
    operations: [],
    id: 0,
    balance: 0,
    name: '',
    email: '',
    password: '',
    token: '',
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
        case SET_BALANCE:
            const balanceAux = state.operations.reduce( (total, op)=> {
                    if(op.type === 'withdraw')
                        return total -= op.amount;
                    else
                        return total += op.amount;
                }, 0);
            return {
                ...state,
                balance: balanceAux
            };
        case SET_USER:
            const { email, password, name, balance, id } = action.payload;
            return {
                ...state,
                email, password, name, balance, id
            };
            // ///////////////////////////////////
        default: return {...state};
    
    }
};