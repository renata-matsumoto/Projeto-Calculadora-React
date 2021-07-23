import { Component } from "react";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    header:{
        height:100,
        backgroundColor: '#6d6875',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'

    },

    imagem:{
        height:50,
        width:50,
        margin:25
    },  
    
    imagemFundo:{
        flex:1,
        resizeMode:'cover'
       
    },

    textHeader:{
        color:'white',
        fontWeight:'bold',
        fontSize: 18
    },

    content:{
        // backgroundColor:'#e5989b',
        height:690,
        justifyContent:'center',
        alignItems:'center'
    },

    rodape:{
        height:100,
        backgroundColor:'#6d6875',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#6d6875',
        flexDirection:'row'
    },

    textLight:{
        color:'white',
        fontWeight:'bold',

    },
    


    // Calculadora
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#ffcdb2',
        width:400,
        height:400,
        borderRadius:50
    },

    text1:{
        // border: '1px solid black',
        height:40,
        width:350,
        backgroundColor: '#caffbf',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20
    },

    container1:{
        // border: '1px solid black',
        flexDirection:'row',
        justifyContent:'center',
        width:80,
        height:45,
        margin:5
    },

    linha4:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },

    button1:{
        alignItems: 'center',
        backgroundColor: '#caffbf',
        borderRadius:10,
        padding: 10,
        width: 50,
        margin:10,
    },
    
    button2:{
        // border: '1px solid black',
        alignItems: 'center',
        backgroundColor: '#caffbf',
        borderRadius:10,
        padding: 10,
        width: 100,
        margin:10,
    },

    textInput:{
        padding: 10,
        borderWidth: 2,
        fontSize:16,
        backgroundColor:'gray',
        color:'white'
    },

    // produto:{
    //     // border:'1px solid #6d6875',
    //     borderRadius:10,
    //     padding:20,
    //     backgroundColor: '#b5838d',
    //     color:'white',
    //     // fontSize: bold
    // },

    // button:{
    //     alignItems: 'center',
    //     backgroundColor: '#DDDDDD',
    //     borderRadius:10,
    //     padding: 10,
    //     width: 300,
    //     marginTop: 30,
    //     marginBottom:30,
    //     },

})