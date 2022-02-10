import axios from 'axios';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';
import SingleComicCard from '../components/SingleComicCard';

var logo = require ('../../assets/images/Comics-Iron-America-icon.png');

export default function Character({route, navigation}) {
  const {ComicId} = route.params
  const [comics, setComics] = useState([]);

  useEffect(()=>{
    axios
    .get(`https://gateway.marvel.com:443/v1/public/comics/${ComicId}?ts=1&apikey=f7a9b0d8dfa07041696a04e6df7da8c2&hash=6c8619175e88472183b745e1dfd021c9`)
    .then((response) => {
      setComics(response.data.data.results);
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

        <Text style={styles.explore}  >Here is Your Single Comic</Text>
        <FlatList data={comics} horizontal keyExtractor={(item)=> item.id} renderItem={({item})=>( <SingleComicCard key={item.id} title = {item.title}
         thumbnail = {item.thumbnail.path} 
        extension = {item.thumbnail.extension} description = {item.description} characters={item.characters.items} /> )}
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
