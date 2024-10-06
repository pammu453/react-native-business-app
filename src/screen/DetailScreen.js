import React, { useEffect, useState } from 'react'
import { Text, Image, StyleSheet, FlatList } from 'react-native'
import yelp from '../api/yelp'

const DetailScreen = ({ route }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState();

    const { id } = route.params

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await yelp.get(`/${id}`)
                setData(res.data)
                setError(null)
            } catch (error) {
                setError("Something went wrong")
            }
        }
        fetchData()
    }, [id])

    if (!data) return null

    return (
        <>
            <Text>{error && error}</Text>
            <FlatList
                data={data.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => <Image style={styles.imageStyle} source={{ uri: item }} />}
            />
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200,
        marginVertical: 10
    }
})

export default DetailScreen
