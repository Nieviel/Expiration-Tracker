
import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const AddFood =(props) => {


    return (
            <View style={styles.container}>

            <Text style={styles.itemText}>
                {props.text}
                
            </Text>

            </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
            alignItems: 'center',
            marginLeft:12,
            padding: 30,
            width:370,
            marginTop: 10,
            borderRadius: 5,
            backgroundColor: '#f4d433',
    },

});

export default AddFood;