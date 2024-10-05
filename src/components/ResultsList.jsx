import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  
  // If there are no results, do not render anything
  if (!results || results.length === 0) {
    return null; // Prevent rendering if results are empty
  }

   // Function to render each item in the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity
    //// Navigate to the ResultsShow screen when an item is pressed
      onPress={() => navigation.navigate("ResultsShow", { id: item.id })}
      style={styles.touchable}
    >
      <ResultsDetail result={item} /> 
    </TouchableOpacity>
    // ResultsDetail-> Render details for each result
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(result) => result.id.toString()} //  Unique key for each item
        horizontal
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
        contentContainerStyle={styles.listContainer} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 12,
  },
  touchable: {
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#BDC3C7",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
});

export default ResultsList;
