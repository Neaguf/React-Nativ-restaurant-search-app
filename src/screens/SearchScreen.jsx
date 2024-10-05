import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar"
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList"




const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useRestaurants();

const filterResultsByPrice = (price) => {
    return results.filter(results => {
        return results.price === price;
    });
}


    return <View style={{flex:1}}>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text> Result Found:{results.length}</Text>
        <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricer"/>
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
    </View>
};


const styles = StyleSheet.create({});

export default SearchScreen;