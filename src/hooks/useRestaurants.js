import { useEffect,useState } from "react";
import yelp from "../api/yelp";


export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                },
            });
            setResult(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when component is first rendered
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, result, errorMessage];
};