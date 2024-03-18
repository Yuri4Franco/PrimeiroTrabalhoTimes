import React from "react";
import { StyleSheet, View, Image, Text } from "react-native-web";

function ItemLista(props){
    return(
        <View style={styles.card}>
            <Image 
            style={styles.img}
            source={{uri: props.img}}
            />

            <View>
                <Text style={styles.nome}>Nome do time: {props.nome} </Text>
                <Text style={styles.descricao}>Descrição: {props.descricao} </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        pading: 10,
        alignItens: 'center',
        marginBottom: 10

    },

    img:{
        width: 100,
        height: 100

    },

    nome:{
        fontSize:20

    },

    descricao:{
        fontSize:16
    }
})

export default ItemLista;