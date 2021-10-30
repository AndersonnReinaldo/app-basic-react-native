// yarn add @react-native-picker/picker

import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';

const picker = () => {
    const [carroSelecionado, setCarroSelecionado] = useState(0);
    const [carros, setCarros] = useState([
        {key:1, nome:'Golf 1.6', valor: 62.000},
        {key:2, nome:'Saveiro 1.6', valor: 29.300},
        {key:3, nome:'Gol 1.6', valor: 25.200},
        {key:4, nome:'BMW', valor: 100.000},
        {key:5, nome:'Strada', valor: 10.100},

    ]);


    let carrosItem = carros.map((value, key) => {
        
        return <Picker.Item key={key} value={key} label={value.nome}/>     

    })

    return (
        <View style={styles.container}>

            <Picker selectedValue={carroSelecionado} 
            onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue)}>
            
            {carrosItem}
            
            </Picker>

           <Text style={styles.carroSelecionado}>Carro: {carros[carroSelecionado].nome}</Text>
           <Text style={styles.carroSelecionado}>Valor R$: {carros[carroSelecionado].valor.toFixed(3)}</Text>

    
        </View>
    )
}

export default picker

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:35
    },
    carroSelecionado:{
        marginTop:15,
        fontSize:25,
        marginLeft:20
    }
})
