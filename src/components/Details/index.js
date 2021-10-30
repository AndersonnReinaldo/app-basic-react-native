import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const index = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerModal}>
        <Text style={styles.title}>Seja bem vindo!</Text>
        <Button title="Fechar modal" onPress={() => props.onClose(!props.onOpen)} />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin:15,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  containerModal:{
    backgroundColor:'#292929',
    width:'100%',
    height:350,
    borderTopStartRadius:10,
    borderTopEndRadius:10
  },
  title:{
      fontSize:25,
      color:'#FDFDFD',
      textAlign:'center',
      padding:20
  }
});
