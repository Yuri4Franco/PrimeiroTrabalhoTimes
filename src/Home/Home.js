import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text } from "react-native";
import ItemLista from "../ItemLista/ItemLista";
//Pagina inicial onde será exibida a lista de times
function Home({navigation}) {
    return (
        <SafeAreaView>
            <Text>Lista de times:</Text>
            <ScrollView>
                <Pressable onPress={() => {navigation.navigate('TelaTime', {time:"Grêmio", img:"https://logodownload.org/wp-content/uploads/2017/02/gremio-logo-escudo.png", descricao:"get nunc lobortis mattis aliquam suspendisse potenti nullam ac tortor vitae ornare suspendisse sed nisi lacus"})}}><ItemLista nome="Grêmio" descricao="get nunc lobortis mattis aliquam suspendisse potenti nullam ac tortor vitae ornare suspendisse sed nisi lacus" img="https://logodownload.org/wp-content/uploads/2017/02/gremio-logo-escudo.png" /></Pressable>
                <Pressable onPress={() => {navigation.navigate('TelaTime', {time:"Internacional", img:"https://logodownload.org/wp-content/uploads/2015/05/internacional-porto-alegre-logo-escudo-4.png", descricao:"eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget "})}}><ItemLista nome="Internacional" descricao="eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget " img="https://logodownload.org/wp-content/uploads/2015/05/internacional-porto-alegre-logo-escudo-4.png" /></Pressable>
                <Pressable onPress={() => {navigation.navigate('TelaTime', {time:"Palmeiras", img:"https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-4.png", descricao:"feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor"})}}><ItemLista nome="Palmeiras" descricao="feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor" img="https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-4.png" /></Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;