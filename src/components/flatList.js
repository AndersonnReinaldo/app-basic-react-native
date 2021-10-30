import React,{useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Pessoa from '../components/Pessoa/index';

export default function appBasic() {

  const [feed , setFeed ] = useState([
    {_id:'1', nome: 'Anderson', idade: 50, email:"andersonnreinaldo@gmail.com"},
    {_id:'2', nome: 'Paulo', idade: 20, email:"paulo@gmail.com"},
    {_id:'3', nome: 'Mario', idade: 17, email:"mario@gmail.com"},
    {_id:'4', nome: 'Maria', idade: 25, email:"maria@gmail.com"},
    {_id:'5', nome: 'Jose', idade: 29, email:"jose@gmail.com"},

  ])

 return (
   <View style={styles.container}>
    <Text style={styles.text}>MINHA LISTA</Text>
     <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item._id} // Caso a listao nao possua id para identificar os itens.
        data={feed}
        renderItem={({item}) => <Pessoa data={item}/>}
        sh

     />

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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

