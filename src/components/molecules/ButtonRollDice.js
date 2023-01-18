import React from "react";
import { StyleSheet, Pressable, Image } from "react-native";

const onPressButton = (diceSize, numberDice, sumDice) => {
    let sum = 0,
        text = '(';

    for (let index = 0; index < numberDice; index++) {
        let res = Math.floor(Math.random() * diceSize);
        text += res + (index + 1 < numberDice ? ' + ' : ')')
        sum += res;
    }

    if (sumDice) {
        text += ' + ' + sumDice;
        sum += sumDice;
    }

    alert(text + ' = ' + sum);
}

export default function ({ diceSize, numberDice, sumDice }) {
    return (
        <Pressable style={styles.button} onPress={onPressButton(diceSize, numberDice, sumDice)}>
            <Image
                style={styles.img}
                resizeMode="center"
                source={require('../../assets/images/Atributes.webp')}
            />
        </Pressable >
    )
}



const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: "94%",
        height: 65,
        borderRadius: 4,
        elevation: 3,
        borderColor: "#ffffff",
        border: 1
    },
    img: {
        width: "94%",
        height: 65,
    },
});