import react from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


export default function CharactersCard({title, thumbnail, extension}) {

    return (
        <View style={styles.container} >
            <Text style={styles.charactertitle} >
                {title}
            </Text>
            <Text style={styles.charactertitle} >
                {thumbnail}
            </Text>
            <Text style={styles.charactertitle} >
                {extension}
            </Text>
            <Text style={styles.charactertitle} >
            {thumbnail}.{extension}
            </Text>
            <Image style={styles.container} source={{uri: `${thumbnail}.${extension}` }} />
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