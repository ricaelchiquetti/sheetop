import React from "react";
import { View } from "react-native";
import TextComponentOrdem from "../atoms/TextComponentOrdem";
import InputComponentOrdem from "../atoms/InputComponentOrdem";

export default function ({ name, limit, keyboardType }) {
    return (
        <View>
            <TextComponentOrdem text={name} />
            <InputComponentOrdem
                keyboardType={keyboardType}
                limit={limit}
            />
        </View>
    );
}
