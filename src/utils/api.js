import { createClient } from 'pexels';
const PIXELS_KEY=import.meta.env.PIXELS_API_KEY

const client = createClient("EdVvxKQs82mNtNF7w5GF1be61iHhBvinBFKI79CeFCX9Lhm0HamF16eq");

const fetchDataFromAPI = async(endpoint) =>{
    try {
        const query =`${endpoint}`
        const data = await client.photos.search({ query, per_page: 1 })
        return data
        
    } catch (error) {
        console.log(error)
    }
    
}

export default fetchDataFromAPI
