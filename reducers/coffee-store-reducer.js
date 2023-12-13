

export const ACTION_TYPES = {
    SET_LAT_LONG: 'SET_LAT_LONG',
    SET_COFFEE_STORE: 'SET_COFFEE_STORE',
};


export const coffeeStoreReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_LAT_LONG:
            return {
                ...state,
                latLong: action.payload.latLong,
            };
        case ACTION_TYPES.SET_COFFEE_STORE:
            return {
                ...state,
                localCoffeeStores: action.payload.localCoffeeStores,
            };
        default:
            return state;
    }
};