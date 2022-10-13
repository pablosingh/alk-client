export const SET_LOADING = 'SET_LOADING';
export const BACKEND_URL = 'http://localhost:3001';

export const LOAD_OPERATIONS = 'LOAD_OPERATIONS';
export const EDIT_OPERATION = 'EDIT_OPERATION';


export function loadOperations(id){
    return async function (dispatch){
        const all = [];
        // dispatch( { type: SET_LOADING, payload: true } );
        try {
            await fetch( `${BACKEND_URL}/getOperationByPerson/${id}` )
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


// export const editOperation = (op) => ({ type: EDIT_OPERATION, payload: op });