import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,array,Image  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
           <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Settings
                </Text>

                </View>
                <View style={styles.body}>
                    
                    <View style={styles.content}>
                    

                        <TouchableOpacity 
                            style={styles.settings2}
                            onPress={()=>navigation.navigate('AboutUs')}
                        >
                            <Ionicons 
                            name="information-circle-outline"
                            size={40}
                            
                            />
                            <Text style={styles.settings2Text}>  About Us</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.settings3}
                            onPress={()=>navigation.navigate('Sign In')}
                        >
                            <Ionicons 
                            name="exit-outline"
                            size={40}
                            />
                            <Text style={styles.settings3Text}>  Log Out</Text>
                        </TouchableOpacity>

                    </View>
                    
                </View>

            </ScrollView>
        </View>

    );
};

export default SettingsScreen; 
 
 
const styles = StyleSheet.create ({
    container:{ 
        flex:1, 
        backgroundColor: '#FFF',
        
 
    }, 
    header:{
        height:160,
        backgroundColor: '#e48d20',
        alignItems:'center',
        
        

    },
    headerText:{
        
        color: '#F7F7F2',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop:70,
        paddingBottom:20
    

    },
    body:{
        minHeight:578,
        backgroundColor: '#FFF',     
    },

    content:{

    },

    settings1:{
        width: 370,
         height:60,
         padding:10,
        justifyContent:'flex-start',
        alignItems:'center',
        borderColor:'#222725',
        borderRadius:10,
        borderWidth: 1,
        marginLeft:13,
        marginTop: 15,
        flexDirection:'row'
    },

    settings1Text:{
        fontSize:26
    },

    settings2:{
        width: 370,
        height:60,
        padding:10,
        justifyContent:'flex-start',
        alignItems:'center',
        borderColor:'#222725',
        borderWidth: 1,
        marginLeft: 13,
        borderRadius:10,
        marginTop: 15,
        flexDirection:'row'
    },

    settings2Text:{
        fontSize:26
    },

    settings3:{
        width: 370,
        height:60,
        padding:10,
        justifyContent:'flex-start',
        alignItems:'center',
        borderColor:'#222725',
        borderWidth: 1,
        marginLeft: 13,
        borderRadius:10,
        marginTop: 15,
        flexDirection:'row',
    },

    settings3Text:{
        fontSize:26
    },

});