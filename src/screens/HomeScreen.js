import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

var logo = require ('../../assets/images/Comics-Iron-America-icon.png');


export default function HomeScreen() {
    return (
        <ScrollView >
            <StatusBar style="auto" />

            <View style={styles.headercontainer}>
			    <Image source={logo} style={styles.logoimage} />
			    <Text style={styles.loginbutton}>Logout</Text>
		    </View>
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
});
