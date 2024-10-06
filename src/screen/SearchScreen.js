import React, { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [search, setSearch] = useState("");
    const [results, error, getData] = useResults();

    const filteredResults = (price) => {
        return results.filter((item) => item.price === price);
    };

    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
                onEndEditing={() => getData(search)}
            />

            {error && <Text>{error}</Text>}

            <ScrollView>
                <ResultsList title="Cost Effective" results={filteredResults("$")} />
                <ResultsList title="Bit Pricier" results={filteredResults("$$$")} />
                <ResultsList title="Bit Spender" results={filteredResults("$$")} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
