import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pessoa from './Pessoa/pessoaDesafio';

export default function components() {

 return (
     
   <View style={styles.container}>
        <Text style={styles.title}>Seja bem vindo!</Text>
        <Pessoa nome='Anderson Reinaldo' cargo='Progamador' />
   </View>    
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    title:{
        color:'#000',
        textAlign:'center',
        fontSize:20,
        padding:20,
        fontWeight:'bold'
    }
})