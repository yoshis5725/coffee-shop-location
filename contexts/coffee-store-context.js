import {createContext, useReducer} from "react";
import {coffeeStoreReducer} from "../reducers/coffee-store-reducer";


export const CoffeeStoreContext = createContext();


export const CoffeeStoreProvider = ({children}) => {
    const initialState = {
        latLong: '',
        localCoffeeStores: [],
    };

    const [state, dispatch] = useReducer(coffeeStoreReducer, initialState);

    return (
        <CoffeeStoreContext.Provider value={{ state, dispatch }}>
            {children}
        </CoffeeStoreContext.Provider>
    );
};