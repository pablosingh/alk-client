export const SET_LOADING = 'SET_LOADING';
export const BACKEND_URL = 'http://localhost:3001';

export const LOAD_OPERATIONS = 'LOAD_OPERATIONS';
export const EDIT_OPERATION = 'EDIT_OPERATION';
export const SET_BALANCE = 'SET_BALANCE';
export const SET_USER = 'SET_USER';


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
                .then( res => dispatch( setBalance() ))
                .catch( err => console.error(err) );
        } catch (e) {
            console.error(e);
        };
    };
};

// export const setLoading = () => ({ type: SET_LOADING, payload: null});


// export const editOperation = (op) => ({ type: EDIT_OPERATION, payload: op });
export const setBalance = () => ({ type: SET_BALANCE, payload: null });

export function setUser (user) {
    return async function (dispatch){
        // const { email, password, name, balance } = user;
        try {
            await fetch( `${BACKEND_URL}/login`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then( js => js.json() )
                .then( res => {
                    console.log(res);
                    user.id = res.person.id;
                    console.log(user);
                    return res;
                })
                .then( res => dispatch({ type: SET_USER, payload: user }) )
                .then( res => loadOperations(user.id))
                .catch( err => console.error(err) );
        } catch (e) {
            console.error(e);
        };
    };
};
