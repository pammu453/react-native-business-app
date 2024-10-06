import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const ResultsDetails = ({ item }) => {
    return (
        <View style={styles.imageTitle} >
            <Image source={{ uri: item.image_url }} style={styles.imageStyle} />
            <Text style={styles.resultTitle}>{item.name}</Text>
            <View style={styles.priceName}>
                <Text style={styles.priceName}>Price - {item.price}</Text>
                <Text style={styles.rating}>{item.rating} rating</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 300,
        height: 150,
        borderRadius: 10
    },
    resultTitle: {
        fontWeight: "bold",
        fontSize: 15,
        marginVertical: 2
    },
    imageTitle: {
        padding: 10
    },
    priceName: {
        flexDirection: "row",
        fontStyle: "italic",
        fontSize: 16,
        justifyContent: "space-between"
    },
})

export default ResultsDetails;
