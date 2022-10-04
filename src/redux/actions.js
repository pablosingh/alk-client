// export const LOAD_CARDS = 'LOAD_CARDS';
export const SET_LOADING = 'SET_LOADING';

// export const ADD_DINNERS = 'ADD_DINNERS';
// export const REMOVE_DINNER = 'REMOVE_DINNER';
// export const SET_ACTUAL_DINNER = 'SET_ACTUAL_DINNER';
// export const ADD_FOOD_DINNER = 'ADD_FOOD_DINNER';
// export const CLEAR_STATE = 'CLEAR_STATE';
// export const SET_TABLE = 'SET_TABLE';

export const LOAD_OPERATIONS = 'LOAD_OPERATIONS';


export function loadOperations(id){
    return async function (dispatch){
        const all = [];
        // dispatch( { type: SET_LOADING, payload: true } );
        try {
            await fetch( `http://localhost:3001/getOperationByPerson/${id}` )
                .then( js => js.json() )
                .then( arrayJson => {
                    arrayJson.result.map( element => all.push(element) );
                })
                .then( res => dispatch( { type: LOAD_OPERATIONS, payload: all } ))
                .catch( err => console.error(err) );
        } catch (e) {
            console.error(e);
        }
    };
};

// export const setLoading = () => ({ type: SET_LOADING, payload: null});

// export const addDinner = (dinner) => ({ type: ADD_DINNERS, payload: dinner });
// export const removeDinner = (id) => ({ type: REMOVE_DINNER, payload: id });

// export const setActualDinner = (id) => ({ type: SET_ACTUAL_DINNER, payload: id });
// export const addFoodDinner = (food) => ({ type: ADD_FOOD_DINNER, payload: food });
// export const clearState = () => ({ type: CLEAR_STATE, payload: null });
// export const setTable = (number) => ({ type: SET_TABLE, payload: number });