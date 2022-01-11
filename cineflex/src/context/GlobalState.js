import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    watchlist: [],
    favourites: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addToWatchlist = (movie) =>  {
        dispatch({type: "ADD_TO_WATCHLIST", payload: movie});
    }

    return (
        <GlobalContext.Provider value={{
                watchlist: state.watchlist, 
                favourites: state.favourites, 
                addToWatchlist,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}