import react from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';


export default function CharactersCard({title, thumbnail, extension, onPress}) {

    return (
        <TouchableOpacity  onPress={onPress} >
            <View style={styles.maincontainer} >
                <Image style={styles.container} source={{uri: `${thumbnail}.${extension}` }} />
                <Text style={styles.charactertitle} >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    maincontainer :{
        width: 400,
        height :540,
        backgroundColor : 'transparent',
        marginLeft:20,
        borderRadius:20,
    },
    container :{
        width: 360,
        height :440,
        marginLeft:20,
        marginBottom:10,
        borderRadius:20,
        padding:10,
    },
    charactertitle :{
        fontSize:25,
        textAlign:'center',
        fontWeight:'900',
    },
})