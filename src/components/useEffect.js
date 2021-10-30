import React, {useEffect, useState, useMemo, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = () => {
  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    async function onLoad() {
      await AsyncStorage.getItem('@nome').then(value => {
        setNome(value);
      });
    }
    onLoad();
  }, []);

  async function alterarNome() {
    await AsyncStorage.setItem('@nome', input);
    setNome(input);
    setInput('')
  }

  function chamarInput(){
      // inputRef.current.focus();
      inputRef.current.clear();
  }

  const letrasNomes = useMemo(() => {

  console.log('PEGANDO A QUANTIDADE DE LETRAS');
  return nome.length;

  },[nome])

  return (
    <View style={styles.container}>
      <View style={styles.viewinput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={value => setInput(value)}
          ref={inputRef}
        />
        <TouchableOpacity onPress={() => alterarNome()}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>Possui {letrasNomes} letras</Text>

      <TouchableOpacity onPress={() => chamarInput()}>
          <Text style={styles.botao}>Chamar input</Text>
        </TouchableOpacity>

    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewinput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 280,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    height: 50,
    color: '#FFF',
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
  },
});
