import {useContext, useState} from "react";
import {ACTION_TYPES} from "../reducers/coffee-store-reducer";
import {CoffeeStoreContext} from "../contexts/coffee-store-context";


const FindGeoLocation = () => {
    const [locationErrorMsg, setLocationErrorMsg] = useState('');
    const {dispatch} = useContext(CoffeeStoreContext)
    const [locatingUser, setLocatingUser] = useState(false);


    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        dispatch(
            {
                type: ACTION_TYPES.SET_LAT_LONG,
                payload: {latLong: `${latitude},${longitude}`}
            }
        );
        setLocationErrorMsg('')
        setLocatingUser(false);
    }

    const error = () => {
        setLocatingUser(false);
        setLocationErrorMsg("Unable to retrieve your location");
    }

    const getUsersLocation = () => {
        setLocatingUser(true);

        if (!navigator.geolocation) {
            setLocatingUser(false);
            setLocationErrorMsg("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };

    return {locationErrorMsg, locatingUser, setLocationErrorMsg, getUsersLocation};
};

export default FindGeoLocation;

