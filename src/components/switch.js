import React, {useState} from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'

const SwitchComponent = () => {
    const [status, setStatus] = useState(false);
    return (
        <View style={styles.container}>
            <Switch 
            onValueChange={(value) => setStatus(value)}
             value={status}
             trackColor={{false:'#121212', true: '#00ff00'}}
             thumbColor={status ? '#00ff00' : '#f4f4f4'}
             
             />
            <Text style={[styles.text, status ? styles.switchTrue : null]}>{status ? 'Ativo' : 'Inativo'}</Text>
        </View>
    )
}

export default SwitchComponent

const styles = StyleSheet.create({

    container:{
        flex: 1,
        marginTop:35
    },
    text:{
        textAlign:'center',
        fontSize:25,
        color:'#000',
        fontWeight:'bold'
    },
    switchTrue:{
        color:'#00ff00',

    },
})
