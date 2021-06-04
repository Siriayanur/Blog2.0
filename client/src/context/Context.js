import { createContext, useEffect, useReducer } from 'react';
import { Reducer } from './Reducer';

const init_state = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error : false
}

export const Context = createContext(init_state);
export const ContextProvider = ({children}) =>
{
    const [state, dispatch] = useReducer(Reducer, init_state);

    //Whenever the user property changes the useEffect is called that many times : 
    // So even during logout, The user is set to null so useEffect is called and also sets the localStorage entry of user: null
    useEffect(() =>
    {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);
    return (
        <Context.Provider value={{user : state.user, isFetching : state.isFetching, error : state.error,dispatch}}>
            {children}
        </Context.Provider>
    )
} 