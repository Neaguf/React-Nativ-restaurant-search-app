import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"




const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
};


const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',


    },
    inputStyle: {
        fontSize: 18,
        flex: 1,

    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;