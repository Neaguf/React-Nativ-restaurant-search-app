import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "../api/yelp";
import useRestaurants from "../hooks/useRestaurants";



const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, result, errorMessage] = useRestaurants();


    return <View>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text> Result Found:{result.length}</Text>
    </View>
};


const styles = StyleSheet.create({});

export default SearchScreen;