// npm install @react-native-community/slider
import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

const slider = () => {

    const [valor, setValor] = useState(50)


    return (
        <View style={styles.container}>
           <Slider
            minimumValue={0}
            maximumValue={100}
            value={valor}
            onValueChange={(valueSelected) => setValor(valueSelected)}
            minimumTrackTintColor="#000FFF"
            maximumTrackTintColor="#FF0000"
            thumbTintColor="#FF0000"
           />
           <Text style={styles.text}>Voce tem: {valor.toFixed(0)} Kg</Text>
        </View>
    )
}

export default slider

const styles = StyleSheet.create({

    container:{
        flex: 1,
        marginTop:35
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25
    }
})
