import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Reusable component to display details of a single result
const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>
          <MaterialIcons name="star" size={18} color="#FFD700" /> 
          {` ${result.rating}`} 
        </Text>
        <Text style={styles.reviewCount}>
          {`${result.review_count} Reviews`} 
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginRight: 8,
  },
  reviewCount: {
    fontSize: 14,
    color: '#A0A0A0',
  },
});

export default ResultsDetail;
