import react, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions } from 'react-native';

var logo = require ('../../assets/images/Comics-Iron-America-icon.png');

const {width, height} = Dimensions.get("screen")
const setWidth = (w) => (width / 100) * w


export default function HomeScreen() {
    const [characters, setCharacters] = useState(['a', 'b', 'c', 'd', 'e']);

    

    return (
        <ScrollView >
            <StatusBar style="auto" />

            <View style={styles.headercontainer}>
			    <Image source={logo} style={styles.logoimage} />
			    <Text style={styles.loginbutton}>Logout</Text>
		    </View>

            <FlatList data={characters} horizontal keyExtractor={(item)=> item} renderItem={({item, index})=>{
                return <View style={styles.test} ></View>
            }} ></FlatList>

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
});
