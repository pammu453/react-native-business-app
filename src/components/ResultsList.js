import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetails from './ResultsDetails'
import { useNavigation } from '@react-navigation/native'

const ResultsList = ({ title, results }) => {
    const navigation = useNavigation()

    if (results.length === 0) {
        return null;
    }

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                data={results}
                horizontal={true}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Detail Screen", { id: item.id })}>
                            <ResultsDetails item={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
        marginHorizontal: 10
    },
})

export default ResultsList
