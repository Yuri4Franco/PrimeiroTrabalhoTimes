import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import ItemLista from "../ItemLista/ItemLista";

function Home(){
    return(
        <SafeAreaView>
            <Text>Lista de times:</Text>
            <ScrollView>
                <ItemLista nome="Grêmio" descricao="get nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus" img="https://logodownload.org/wp-content/uploads/2017/02/gremio-logo-escudo-1.png"/>
                <ItemLista nome="Internacional" descricao="eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget " img="https://logodownload.org/wp-content/uploads/2015/05/internacional-porto-alegre-logo-escudo-4.png"/>
                <ItemLista nome="Palmeiras" descricao="eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor" img="https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-4.png"/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;