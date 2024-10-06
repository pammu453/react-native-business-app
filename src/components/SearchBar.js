import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";

const SearchBar = ({ search, setSearch, onEndEditing }) => {

    return (
        <View style={styles.viewStyle}>
            <Image
                style={styles.searchIcon}
                source={require("../../assets/search-interface-symbol.png")}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                value={search}
                onChangeText={setSearch}
                onEndEditing={onEndEditing}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#e6e8e6",
        flexDirection: "row",
        margin: 10,
        padding: 10,
        gap: 10,
        border: 2,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        alignItems: "center"
    },
    searchIcon: {
        width: 25,
        height: 25,
    },
    textInput: {
        flex: 1,
        borderRadius: 10,
        height: 30,
        fontSize: 20,
        fontWeight: "400",
    }
})

export default SearchBar
