import React, {useState} from 'react';
import { Text, View, TextInput, Button, StyleSheet, Image} from 'react-native';
import { styles } from '../../Style/style';
import { TouchableOpacity } from 'react-native';

export default function Calculadora(){
    
    const [valores, setValores] = useState ({
        a: 0,
        b: 0

    });


    const handleInputChange = (dados,valor) => {
        setValores ({
            ...valores, [dados]:valor
        })
    }


    const limpa = () => {
        setResultado({
           resultado:'',
        })
    }

    


    const [resultado, setResultado] = useState(0);

    console.log(valores);

    return(

        <View style = {styles.content}>
            <View style={styles.container}>

                
                <Text style={styles.text1}>{`  ${resultado}`}</Text> 
                
               <View style={styles.linha4}>       
            
                    <TouchableOpacity style={styles.button1} onPress={() => setResultado(valores.a + valores.b)}>
                    <View><Text>+</Text></View></TouchableOpacity> 
                
                    <TouchableOpacity style={styles.button1} onPress={() => setResultado(valores.a - valores.b)}>
                    <View><Text>-</Text></View></TouchableOpacity> 
                
                    <TouchableOpacity style={styles.button1} onPress={() => setResultado(valores.a * valores.b)}>
                    <View><Text>*</Text></View></TouchableOpacity> 
                
                    <TouchableOpacity style={styles.button1} onPress={() => setResultado(valores.a / valores.b)}>
                    <View><Text>/</Text></View></TouchableOpacity> 

                    <TouchableOpacity style={styles.button1} onPress={() => setResultado('.')}>
                    <View><Text>.</Text></View></TouchableOpacity> 
                    
                  
                </View>
                    
                <View style={styles.linha4}>       
            
                    <TouchableOpacity style={styles.button1} onPress={() => setResultado(valores.a % valores.b)}>
                    <View><Text>%</Text></View></TouchableOpacity>   
                
                    <TouchableOpacity style={styles.button1} onPress={() => setResultado(Math.pow(valores.a,2 ))}>
                    <View><Text>a²</Text></View></TouchableOpacity> 
                
                    <TouchableOpacity style={styles.button1} onPress={() => setResultado(Math.pow(valores.b,2))}>
                    <View><Text>b²</Text></View></TouchableOpacity> 
                
                    <TouchableOpacity style={styles.button1} onPress={() => setResultado(Math.pow(valores.a, valores.b))}>
                    <View><Text>ab</Text></View></TouchableOpacity> 

                    
                    <TouchableOpacity style={styles.button1} onPress={(limpa) => setResultado(valores.a='', valores.b='')}>
                    <View><Text>AC</Text></View></TouchableOpacity> 

                  
        
            
                </View>


            

                <View style={styles.linha4}>       
                    <TextInput placeholder=" Valor A" style={styles.button2}
                        onChangeText={
                            (valor) => handleInputChange ('a', parseInt(valor))}
                            keyboardType="numeric"
                        />
                    <TextInput placeholder=" Valor B" style={styles.button2}
                        onChangeText={
                            (valor) => handleInputChange ('b', parseInt(valor))}
                            keyboardType="numeric"
                        /> 
                    
                </View>

                
            
            </View>

        </View>
    )
}