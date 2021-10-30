import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Pessoa(props) {
 return (
   <View style={styles.container}>
       <View style={styles.containerDados}>
            <Text style={styles.text}>Nome: {props.nome}</Text>
            <Text style={styles.text}>Cargo: {props.cargo}</Text>
       </View>
      
   </View>
  );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#151745',
        paddingBottom: 80,
    },
    containerDados:{
        marginTop:80,
        paddingStart:20

    },
    text:{
        fontSize:25,
        color:'#FDFDFD',
        fontWeight:'bold'
    }

})