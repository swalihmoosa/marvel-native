import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';
import SingleCharacterCard from '../components/SingleCharacterCard';

var logo = require ('../../assets/images/Comics-Iron-America-icon.png');

export default function Character({route, navigation}) {
  const {CharacterId} = route.params
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${CharacterId}?ts=1&apikey=f7a9b0d8dfa07041696a04e6df7da8c2&hash=6c8619175e88472183b745e1dfd021c9`)
    .then((response) => {
      setCharacters(response.data.data.results);
    })
    .catch((error) => {
        console.log(error);
    });
    
}, [])

  return (
    <ScrollView >
        <View style={styles.headercontainer} >
          <Image source={logo} style={styles.logoimage} />
          <Text style={styles.loginbutton}>Logout</Text>
        </View>

        <Text style={styles.explore}  >Here is Your Single Character</Text>
        <FlatList data={characters} horizontal keyExtractor={(item)=> item.id} renderItem={({item})=>( <SingleCharacterCard title = {item.name} thumbnail = {item.thumbnail.path} 
        extension = {item.thumbnail.extension} description = {item.description} comics={item.comics.items} /> )}
        />
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    headercontainer : {
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    explore : {
        fontSize: 30,
        color: '#9292ed',
        fontWeight: '900',
        textAlign:'center',
        marginBottom:20,
    },
});
