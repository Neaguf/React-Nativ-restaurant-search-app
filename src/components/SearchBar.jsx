import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

// SearchBar component for inputting search terms
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    // Container for styling the search bar/
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle} // Style for the input field
        placeholder="Search" // Placeholder text in the input field
        value={term} // Current value of the search input
        autoCapitalize="none" // Do not auto-capitalize
        autoCorrect={false} // Disable auto-correction
        onChangeText={onTermChange} // Function called when text changes
        onEndEditing={onTermSubmit} // Function called when editing ends
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 10,
  },
  iconStyle: {
    fontSize: 24,
    alignSelf: "center",
    marginHorizontal: 15,
    color: "#888",
  },
});

export default SearchBar;
