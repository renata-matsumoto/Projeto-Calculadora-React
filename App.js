// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar,ImageBackground} from 'react-native';
import Calc from './src/Componetes1/Calc';
import Calculadora from './src/Componetes1/Calculadora';
import Footer1 from './src/Componetes1/Footer1';
import { styles } from './Style/style';


export default function App() {
  return (
   
      <View>
            <ImageBackground source={require('./img/fundo3.jpg')}
            style={styles.imagemFundo}>
              <Calc/>
              <Calculadora/>
              <Footer1/>

              <StatusBar hidden ={false} backgroundColor = "#154875"></StatusBar>
            </ImageBackground>
      </View>

  );
}


