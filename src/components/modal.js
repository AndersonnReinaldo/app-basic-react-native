import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import Details from '../components/Details';

const modal = () => {

const [onOpen, setOnOpen] = useState(false);

    return (
        <View style={styles.container}>
            
        <Button title='Acessar' onPress={() => setOnOpen(!onOpen)}/>

            <Modal
                visible={onOpen}
                animationType='slide'
                transparent={true}    
            >
                <Details onClose={setOnOpen} onOpen={onOpen}/>
            </Modal>

        </View>
    )
}

export default modal

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
