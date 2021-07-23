import React from 'react';
import { StatusBar,StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import { styles} from '../../Style/style';



export default function Calc (){
    return(

        <View style={styles.header}>
        <Text style={styles.textHeader}>Minha Calculadora Calc</Text>
        <Image style={styles.imagem} source={require("../../img/ico.png")}/>
        </View>
    )
}

