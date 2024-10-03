import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "../api/yelp";



const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'san jose',
                },
            });
            setResult(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong');
        }
    };


    return <View>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={searchApi}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text> Result Found:{result.length}</Text>
    </View>
};


const styles = StyleSheet.create({});

export default SearchScreen;