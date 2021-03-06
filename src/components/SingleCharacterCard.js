import react from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';


export default function SingleCharacterCard({title, thumbnail, extension, description, comics}) {
    return (
        <View style={styles.maincontainer} >
            <Image style={styles.container} source={{uri: `${thumbnail}.${extension}` }} />
            <Text style={styles.charactertitle} >
                {title}
            </Text>
            <Text style={styles.characterdescription} >
                {description}
            </Text>

            {comics.map((item) => (
                <Text style={styles.charactercomics} key={item.name} >
                    {item.name}
                </Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer :{
        width: 400,
        height :'100%',
        backgroundColor : 'transparent',
        marginLeft:40,
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
        color : '#2ba3f9',
        textAlign:'center',
        fontWeight:'900',
        marginBottom : 20,
    },
    characterdescription :{
        fontSize:25,
        textAlign:'center',
        fontWeight:'900',
        marginBottom : 20,
    },
    charactercomics :{
        width:'100%',
        paddingVertical : 5,
        paddingHorizontal : 10,
        borderRadius : 20,
        borderWidth:2,
        fontSize:20,
        borderColor : '#9c9c9c',
        color : '#9c9c9c',
        marginBottom : 15,
        textAlign : 'center',

    },
})
