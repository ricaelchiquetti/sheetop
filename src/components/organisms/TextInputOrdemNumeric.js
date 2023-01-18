import React from "react";
import TextInputOrdem from "../molecules/TextInputOrdem";

export default function ({ name, limit }) {
    return (
        <TextInputOrdem
            name={name}
            keyboardType={'numeric'}
            limit={limit}
        />
    );
}
