import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

// Component to display detailed information about a specific result
const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null); // State to hold the fetched result
  const id = route.params.id; // Extract the id from route parameters

  // Function to fetch the result from the Yelp API using the id
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`); // Make the API call to fetch result
    setResult(response.data); // Update state with the fetched data
  };

  // useEffect to call getResult function when the component mounts
  useEffect(() => {
    getResult(id); // Call the function to get result data
  }, []); // Empty dependency array means this runs only once on mount

  // Render null if result is still being fetched
  if (!result) {
    return null; 
  }

  return (
    <View style={styles.container}> 
      <Text style={styles.header}>{result.name}</Text> 
      <FlatList
        data={result.photos} // Use the photos from the result
        keyExtractor={(photo) => photo} // Unique key for each photo
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />; // Render each photo as an Image
        }}
        contentContainerStyle={styles.imageList} // Add styling to the FlatList container
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: '#333',
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 10,
    marginBottom: 16,
  },
  imageList: {
    alignItems: "center",
  },
});

export default ResultsShowScreen;
