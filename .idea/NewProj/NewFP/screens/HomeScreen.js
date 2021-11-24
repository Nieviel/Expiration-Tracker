import React, {useState, Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddFood from '../component/AddFood'
import { auth } from '../Firebase';


const HomeScreen = ({navigation,route}) => {
    let Category = '';
    

    DairyCategory = () => {
    
        let Category = 'Dairy';
        
        navigation.navigate('ListScreen',{paramKey: Category})
        
    }
    BeverageCategory = () => {
    
        let Category = 'Beverage';
        
        navigation.navigate('ListScreen',{paramKey: Category})
    }
    ProduceCategory = () => {
    
        let Category = 'Produce';
        
        navigation.navigate('ListScreen',{paramKey: Category})
    }
    SaucesCategory = () => {
    
        let Category = 'Sauces';
       
        navigation.navigate('ListScreen',{paramKey: Category})
    }
    MeatCategory = () => {
    
        let Category = 'Meat';
        
        navigation.navigate('ListScreen',{paramKey: Category})
    }
    
    return(
        <View style={styles.container}>
           <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Products
                </Text>

                </View>
                <View style={styles.header2}>

                <View >
                <TouchableOpacity activeOpacity={0.8} style={styles.iconStyle} onPress={DairyCategory} >
                <Image 
                style={styles.iconstyles} 
                source={{uri: 'https://img.icons8.com/ios/50/000000/tetra-pak.png'}}>
                </Image>
                <Image source={require('../assets/icons/Dairy.png')} style={{
                    width:180,
                    height:40,
                    marginLeft:15,
                    
                    
                }}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.iconStyle} onPress={BeverageCategory} >
                <Image 
                style={styles.iconstyles2} 
                source={{uri: 'https://img.icons8.com/ios/50/000000/soda-cup.png'}}>
                </Image>
                <Image source={require('../assets/icons/Beverage.png')} style={{
                    width:270,
                    height:60,
                    marginLeft:15
                    
                    
                    
                }}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.iconStyle} onPress={ProduceCategory} >
                <Image 
                style={styles.iconstyles3} 
                source={{uri: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-vegetables-nature-resource-vitaliy-gorbachev-lineal-vitaly-gorbachev.png'}}>
                </Image>
                <Image source={require('../assets/icons/Produce.png')} style={{
                    width:230,
                    height:48,
                    marginLeft:15,
                    
                    
                }}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.iconStyle} onPress={SaucesCategory} >
                <Image 
                style={styles.iconstyles4} 
                source={{uri: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-sauces-fast-food-vitaliy-gorbachev-lineal-vitaly-gorbachev.png'}}>
                </Image>
                <Image source={require('../assets/icons/Sauce.png')} style={{
                    width:200,
                    height:40,
                    marginLeft:15,
                    marginBottom:5
                    
                }}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.iconStyle} onPress={MeatCategory} >
                <Image 
                style={styles.iconstyles5} 
                source={{uri: 'https://img.icons8.com/carbon-copy/100/000000/steak-rare.png'}}>
                </Image>
                <Image source={require('../assets/icons/Meat.png')} style={{
                    width:140,
                    height:38,
                    marginLeft:15,
                    marginBottom:5
                    
                }}>
                    </Image>
                </TouchableOpacity>
               



                </View>
            </View>
            
            </ScrollView>
           
            
        </View>

    );
};

export default HomeScreen; 
 
 
const styles = StyleSheet.create ({
    container:{ 
        flex:1,
        backgroundColor: '#FFF'
 
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

    },
    header2:{
        minHeight:495,
        backgroundColor: '#FFF',
        marginBottom:80
    },

    body:{
        flex:2,
        backgroundColor: '#E4E6C3'
    },
    iconStyle:{
        flexDirection:'row',

        marginTop:10,
        marginLeft:10,
        width:370,
        height:100,
        paddingLeft:15,
        backgroundColor: 'white',
        borderWidth: 1,
        
        borderRadius: 5,
        
        alignItems:'center',
        
      },
      imageStyle:{
          width:35,
          height:35,
          tintColor: 'white'
      },
      textInputWrapper:{
          position:'absolute',
          bottom:100,
          left:20,
          width: '100%',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
      },
      textUI:{
          paddingVertical: 15,
          paddingHorizontal: 15,
          backgroundColor: '#FFF',
          borderRadius:60,
          borderColor: '#C0C0C0',
          borderWidth:1,
          width:265,
      },
      iconstyles:{
        width:50,
        height:50,
        tintColor:'#e48d20'
      },
      iconstyles2:{
        width:50,
        height:50,
        tintColor:'#e48d20'
      },
      iconstyles3:{
        width:50,
        height:50,
        tintColor:'#e48d20'
      },
      iconstyles4:{
        width:50,
        height:50,
        tintColor:'#e48d20'
      },
      iconstyles5:{
        width:50,
        height:50,
        tintColor:'#e48d20'
      }
      
      
      
      
      
});