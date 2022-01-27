import react from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


export default function ComicsCard({title, thumbnail, extension, onPress}) {

    return (
        <View style={styles.maincontainer} onPress={onPress} >
            <Image style={styles.container} source={{uri: `${thumbnail}.${extension}` }} />
            <Text style={styles.charactertitle} >
                {title}
            </Text>
        </View>
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
        backgroundColor : 'red',
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