import react from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


export default function CharactersCard() {
    return (
        <View style={styles.container} >
            <Text style={styles.charactertitle} >
                ashgdhgd
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        width: 340,
        height :440,
        backgroundColor : 'red',
        marginLeft:20,
        borderRadius:20,
        padding:10,
    }
})