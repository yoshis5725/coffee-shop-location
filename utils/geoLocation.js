import {useState} from "react";


const FindGeoLocation = () => {
    const [locationErrorMsg, setLocationErrorMsg] = useState('');
    const [latLong, setLatLong] = useState('');
    const [locatingUser, setLocatingUser] = useState(false);


    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatLong(`${latitude},${longitude}`);
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

    return {locationErrorMsg, latLong, locatingUser, getUsersLocation};
};

export default FindGeoLocation;

