import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultsDetails({ result }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles}>{result.rating},{result.review_count}</Text>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom:5
    },
    name: {
        fontWeight: "bold",
    }

})