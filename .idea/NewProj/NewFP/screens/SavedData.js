import React, {useState, Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddFood from '../component/AddFood'
import { auth } from '../Firebase';
const [food, setFood] = useState();
const [foodList, setFoodList]= useState([]);

const handleAddFood = () => {

    

    
        if(!food == ''){
            
            setFoodList([...foodList,food])
            setFood(null);
            array.push(food);
            console.log(foodList);

        }else{
            alert('please enter text')
        }
     
    }

    export default handleAddFood;