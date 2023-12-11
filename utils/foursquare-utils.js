const getFourSquareUrl = (query, latLong, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};


/**
 * This function is used to fetch the coffee shops from the Foursquare API
 * @returns {Promise<*>}
 */
export const fetchCoffeeShops = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.NEXT_PUBLIC_FOUR_SQUARE_API_KEY
        }
    };

    const response = await fetch(getFourSquareUrl('coffee shop', '39.7392,-104.9903', 6), options)
    const data = await response.json();
    return data.results
};

