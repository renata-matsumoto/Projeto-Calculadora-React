import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from '../../Style/style';


export default function Footer1() {
    return(
        <View style = {styles.rodape}>  
        <Image style={styles.imagem} source={require("../../img/ico.png")}/>
        <Text style = {styles.textLight}>Desenvolvido por Renata Matsumoto</Text>
        </View>
    )
}