import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';

export default function appBasic() {
 return (
   <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  constainer :{
    flex:1
  },
  box1:{
    height:250,
    backgroundColor:'red'
  },
  box2:{
    height:250,
    backgroundColor:'green'
  },
  box3:{
    height:250,
    backgroundColor:'blue'
  },
  box4:{
    height:250,
    backgroundColor:'yellow'
  }
})