import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pessoa({data}) {
    return(
        <View style={styles.areaPessoa}>
          <Text style={styles.textSecundario}>{data.nome}</Text>
          <Text style={styles.textSecundario}>{data.idade}</Text>
          <Text style={styles.textSecundario}>{data.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    areaPessoa:{
      backgroundColor:"#121212",
      height:200,
      marginBottom:5
    },
    text:{
      fontSize:30,
      textAlign:"center",
      color:"red"
    },
    textSecundario:{
      fontSize: 25,
      color:'blue'
    }
  })