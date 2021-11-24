import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FillUpScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Template Screen
                </Text>

            </View>
                <View style={styles.header2}>
                    
              
                </View>
                    
        </View>

    );
};

export default FillUpScreen; 
 
 
const styles = StyleSheet.create ({
    container:{ 
        flex:1, 
 
    }, 
    header:{
        height:160,
        backgroundColor: '#009387',
        alignItems:'center',
        
        

    },
    headerText:{
        
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop:70,

    },
    header2:{
    backgroundColor: '#F4F5F5',
    
       
        
    },
});