import axios from "axios"

const BASE_URL="https://api.pexels.com/v1/"
const PIXELS_TOKEN=import.meta.env.PIXELS_API_KEY

const headers = {
    Authorization: PIXELS_TOKEN
};

export const fetchDataFromApi = async (url,params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, 
            {
                headers:headers,
                params:params,
            
            });
            
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};