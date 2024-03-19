import React from "react";
import { Text } from "react-native";


function TelaTime(navigation, route){

    const{time, img, descricao} = route.params
    return(
        <>
        <Text>Tela do time:</Text>
        <Text> {time} </Text>
        </>
    )
}

export default TelaTime;