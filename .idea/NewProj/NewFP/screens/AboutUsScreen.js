import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AboutUs = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    About Us
                </Text>

            </View>
                <View style={styles.body}>
                    
                <Text style={styles.bodyText}>
                Fresh & Nature, is a simple mobile application that tracks the expiry date of almost any food. The app was created to prevent further more waste of food and resources. It is intended for users who wants to list their food in order for them to track it and prevent waste of food due to spoilage.
                    
                </Text>
                
                
                </View>
                <TouchableOpacity onPress ={() => navigation.navigate('Home')}>
                 <Text  style={{
                marginTop:50,
                height:30,
                borderRadius:20,
                marginLeft:160,
                textAlign:'center',
                backgroundColor:'white',
                paddingTop:4,
                width:80,
                borderWidth:2,
                
            }}>
                     Go Back
                 </Text>
                 

                 

            </TouchableOpacity> 
                
                    
        </View>

    );
};

export default AboutUs; 
 
 
const styles = StyleSheet.create ({
    container:{ 
        flex:1, 
        backgroundColor: '#e48d20',

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
        marginTop:60,
        paddingBottom:20

    },
    bodyText:{
        color: 'black',
        fontSize: 18,
        padding:20
        
    },
    body:{
        borderColor:'black',
        borderRadius:20,
        backgroundColor:'white',
        width:370,
        marginLeft:10,
        height:300,
        borderWidth:2
        
            
    },
    backButton:{

        marginLeft:170,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        height:50,
        width:50
    }
    
});