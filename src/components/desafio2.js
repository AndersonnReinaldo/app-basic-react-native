import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native'
import {Picker} from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

const desafio2 = () => {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [sexo, setSexo] = useState([
    {key:1, sexo:'Masculino'},
    {key:2, sexo:'Feminino'},
    {key:3, sexo:'Prefiro nao dizer'} ]); 
    const [sexoSelect, setSexoSelect] = useState(0) 
    const [limite, setLimite] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const [statusEstudante, setStatusEstudante] =  useState(false)
    
    let datepicker = sexo.map((value, key) => {
        return <Picker.Item key={key} value={key} label={value.sexo}/>
    })

    function cadastrar(){
        alert(`
        
        Cadastrado com sucesso!

         Nome: ${nome}

        Idade: ${idade}

        Sexo: ${sexo[sexoSelect].sexo}

        Limite escolhido: R$ ${limite.toFixed(0)}

        Estudante? : ${statusEstudante ? 'SIM' : 'NAO'}

        `)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Banco Anderson</Text>
            <View style={styles.containerForm}>
                <Text style={styles.titleForm}>Preencha os dados para abrir sua conta!</Text>

                <Text style={styles.titleInput}>Como vamos lhe chamar ? </Text>
                <TextInput style={styles.input} placeholder='Nome completo' onChangeText={setNome} />

                <Text style={styles.titleInput}>Sua idade ?</Text>
                <TextInput style={[styles.input]} placeholder='Digite sua idade' onChangeText={setIdade} />

                <Text style={styles.titleInput}>Qual seu sexo?</Text>
                <Picker
                style={styles.picker}
                    selectedValue={sexoSelect}
                    onValueChange={(value, index) => setSexoSelect(value)}
                >{datepicker}</Picker>

                    <Text style={styles.titleInput}>Quanto de limite?</Text>

                <View style={styles.containerLimit}>
                <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={5000}
                value={limite}
                onValueChange={(value) => setLimite(value)}
                />
                <Text style={styles.textLimit}>R$: {limite.toFixed(0)}</Text>
                </View>
             

                <View style={styles.containerSwitch}>

                <Text style={styles.textSwitch}>Estudante?</Text>
                    
                <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={statusEstudante ? "#f5dd4b" : "#f4f3f4"}
                value={statusEstudante}
                onValueChange={(value) => setStatusEstudante(value)}     
                />
                </View>

                <TouchableOpacity style={styles.btnCadastrar} onPress={() => cadastrar()}>
                    <Text style={styles.textBtn}>Finalizar cadastro</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default desafio2

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#303952',
        color:'#000'
    },
    containerForm: {
        flex:1,
        padding:5,
        backgroundColor:'#596275',
        justifyContent:'space-between',
        
    },
    containerLimit:{
        padding:10,
        borderRadius:4,
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#FDFDFD'
    },
    title:{
        fontSize:30,
        textAlign: 'center',
        fontWeight: 'bold',
       padding:10,
       color:'#FDFDFD'
    },
    titleForm:{
        padding:10,
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center',
        color: '#63cdda'
    },
    titleInput:{
        padding:10,
        fontWeight:'bold',
        fontSize:15,
        color: '#FDFDFD'
    },
    textSwitch:{
        fontSize:20
    },
    textLimit:{
        fontWeight:'bold',
        fontSize:25
    },
    slider:{
        width: 250,
        height: 40
    },
    containerSwitch:{
        marginTop:20,
        padding:15,
        borderRadius:4,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#FDFDFD'
    },
    input:{
        backgroundColor:'#FDFDFD',
        borderRadius:4,
    },
    picker:{
        backgroundColor:'#FDFDFD',
    },
    btnCadastrar:{
        marginTop:20,
        marginLeft:50,
        marginRight:50,
        backgroundColor:'#009432',
        padding:20,
        borderRadius:15,
        alignItems: 'center',
    },
    textBtn:{
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'#FDFDFD'
    }
   


})
