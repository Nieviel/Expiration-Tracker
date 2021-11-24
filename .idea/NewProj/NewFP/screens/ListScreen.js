import React, {useState, Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddFood from '../component/AddFood'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";
import HomeScreen from './HomeScreen'

const ListScreen = ({navigation,route }) => {
    const Category = route.params.paramKey
    
      
      

    const [food, setFood] = useState();
    const [foodList, setFoodList]= useState([]);
    const [Dairy ,setDairy] = useState([]);
    const [Beverage ,setBeverage] = useState([]);
    const [Produce ,setProduce] = useState([]);
    const [Sauces ,setSauces] = useState([]);
    const [Meat ,setMeat] = useState([]);
    

    // const CreateList= () => {
    //     const db = getDatabase();
    //     const CreateListRef  = ref(db, 'list');
    //     const newListRef = push(CreateListRef);
    //     set(newListRef,{
    //         "food": '',
            

    //     });
    //     Alert.alert('Added Successfully');
    // }

    
    const handleAddFood = () => {
        
        if(!food == ''){
            setFoodList([...foodList,food])
            setFood(null);
            if(Category == 'Dairy'){
            setDairy([...Dairy,food])
            console.log(Dairy)
            
            }
            else if(Category == 'Beverage'){
               
            }
            else if(Category == 'Produce'){
                
            }
            else if(Category == 'Sauces'){
               
            }
            else if(Category == 'Meat'){
                
            }
            
            //  CreateList(food);
            


        }else{
            alert('please enter text')
        }
     
    }
    
    return(
        
        <View style={styles.container}>
           <ScrollView>
            <View style={styles.header}>
            <TouchableOpacity onPress ={() => navigation.navigate('Home',{paramKey: Dairy})}>
                 <Text  style={{
                marginTop:50,
                height:30,
                borderRadius:20,
                marginLeft:10,
                textAlign:'center',
                backgroundColor:'white',
                paddingTop:4,
                width:80,
                borderWidth:2,
                
            }}>
                     Go Back
                 </Text>
            </TouchableOpacity> 
                <Text style={styles.headerText}>
                    Products
                </Text>

                </View>
                <View style={styles.header2}>

                <View >
                {
                foodList.map((item, index) =>{
                    return( <AddFood key={index} text={item}/>
                    )
                })
                }

                </View>
            </View>
            
            </ScrollView>
            <KeyboardAvoidingView style = {styles.textInputWrapper}>

                <TextInput 
                style={styles.textUI} 
                placeholder={'Food'}
                value={food} 
                onChangeText={text => setFood(text)}
                />

                

            <TouchableOpacity activeOpacity={0.8} style={styles.iconStyle} onPress={handleAddFood} >
                 
                 <Image source={require('../assets/icons/plus.png')} style={styles.imageStyle}>

                 </Image>

            </TouchableOpacity> 
            </KeyboardAvoidingView>
            
        </View>

    );
};

export default ListScreen; 
 
 
const styles = StyleSheet.create ({
    container:{ 
        flex:1,
        backgroundColor: '#FFF'
 
    }, 
    header:{
        height:160,
        backgroundColor: '#e48d20',

    },
    headerText:{
        
        color: '#F7F7F2',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop:30,
        marginLeft:135

    },
    header2:{
        minHeight:495,
        
        marginBottom:80
    },

    body:{
        flex:2,
        backgroundColor: '#E4E6C3'
    },
    iconStyle:{

        marginTop:560,
        marginLeft:285,
        flexWrap:'wrap',
        position: 'absolute',
        width:65,
        height:65,
        paddingLeft:15,
        backgroundColor: '#e48d20',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:65
      },
      imageStyle:{
          width:35,
          height:35,
          tintColor: 'white'
      },
      textInputWrapper:{
          position:'absolute',
          bottom:20,
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
      
      
      
      
});