import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function ({ keyboardType, limit }) {
    return (
        <TextInput
            style={styles.input}
            keyboardType={keyboardType}
            maxLength={limit}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        color: "#fff",
        borderColor: "#fff",
        fontSize: 18,
        width: "94%",
        marginTop: 2,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
});