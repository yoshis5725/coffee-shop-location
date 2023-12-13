import {fetchCoffeeShops} from "../../../utils/foursquare-utils";


const GetCoffeeStores = async (req, res) => {

    try {
        const {latLong} = req.query;
        const response = await fetchCoffeeShops(latLong);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
};


export default GetCoffeeStores;