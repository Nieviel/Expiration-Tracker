import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Profile = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Profile
                </Text>

            </View>
                <View style={styles.body}>
                    
              
                </View>
                    
        </View>

    );
};

export default Profile; 
 
const styles = StyleSheet.create ({
    container:{ 
        flex:1, 
        
 
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
        backgroundColor: '#E4E6C3',     
    },
});