import react, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import CharactersCard from '../components/CharactersCard';
import axios from 'axios';

var logo = require ('../../assets/images/Comics-Iron-America-icon.png');

const {width, height} = Dimensions.get("screen")
const setWidth = (w) => (width / 100) * w


export default function HomeScreen() {
    const [characters, setCharacters] = useState(['a', 'b']);

    useEffect(()=>{
        axios
        .get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f7a9b0d8dfa07041696a04e6df7da8c2&hash=6c8619175e88472183b745e1dfd021c9`)
        .then((response) => {
            // console.log(response.data.data.results);
            setCharacters(response.data.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
        
    }, [])

    return (
        <ScrollView >
            <StatusBar style="auto" />

            <View style={styles.headercontainer}>
			    <Image source={logo} style={styles.logoimage} />
			    <Text style={styles.loginbutton}>Logout</Text>
		    </View>

            <Text style={styles.welcome} >Welcome</Text>
            <Text style={styles.explore} >Explore the Famous Marvel Characters</Text>
            <FlatList data={characters} horizontal keyExtractor={(item)=> item.id} renderItem={({item})=> <CharactersCard title = {item.name} thumbnail = {item.thumbnail.path} 
            extension={item.thumbnail.extension} /> } 
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headercontainer : {
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        color:'red',
        padding:'10%',
        justifyContent:'space-between',
		flexDirection:'row',
    },
	logoimage: {
		width: 65,
		height:65,
	},
	loginbutton: {
		backgroundColor: '#046bf6',
		borderRadius:4,
		paddingVertical:13,
		paddingHorizontal:45,
		color:'#fff',
		fontSize:18,
		fontWeight:'900',
		alignItems:'center',
		justifyContent:'center',
	},
    test: {
		backgroundColor: '#046bf6',
		borderRadius:4,
		paddingVertical:13,
		paddingHorizontal:45,
		color:'#fff',
		fontSize:18,
		fontWeight:'900',
		alignItems:'center',
		justifyContent:'center',
        width : setWidth(23),
	},
    explore : {
        fontSize: 30,
        color: '#9292ed',
        fontWeight: '900',
        textAlign:'center',
        marginBottom:20,
    },
    welcome : {
        fontSize: 30,
        color: 'red',
        fontWeight: '900',
        textAlign:'center',
        marginBottom:10,
    }
});
