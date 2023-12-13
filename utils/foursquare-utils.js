import {createApi} from "unsplash-js";

const unsplash= createApi({ accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY });


const getFourSquareUrl = (query, latLong, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};


/**
 * This function is used to fetch the coffee shop image from the Unsplash API
 * @returns {Promise<string[]>}
 */
const getCoffeeShopImageUrl = async () => {
    const photos = await unsplash.search.getPhotos({
        query: 'coffee',
        page: 1,
        perPage: 25,
    });
    return photos.response.results.map(smallPhoto => smallPhoto.urls.small);
};



/**
 * This function is used to fetch the coffee shops from the Foursquare API
 * @returns {Promise<*>}
 */
export const fetchCoffeeShops = async (latLong='39.7392,-104.9903') => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.NEXT_PUBLIC_FOUR_SQUARE_API_KEY
        }
    };

    const response = await fetch(getFourSquareUrl('coffee shop', latLong, 6), options)
    const data = await response.json();
    const photos = await getCoffeeShopImageUrl();

    return data.results.map((result, index) => {
        return {
            id: result.fsq_id,
            name: result.name,
            address: result.location.address,
            city: result.location.locality,
            imgUrl: photos[index]
        }
    })
};

