import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { 
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import SettingsScreen from './screens/SettingsScreen'
import HomeScreen from './screens/HomeScreen'
import FillUpScreen from './screens/FillUpScreen'




const Tab = createBottomTabNavigator();

const firstTab = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'SettingsScreen') {
            icon = focused ? 'settings-sharp' : 'settings-outline';
          }

          return <Ionicons name={icon} size={30} color={"#e48d20"} />;
        },

        tabBarShowLabel:false,

        tabBarStyle:{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 15,
          marginHorizontal: 10,
          height:65,
          borderRadius:10,
          //shadow
          shadowColor: '#000000',
          shadowOpacity:0.06,
          shadowOffset:{
              width:10,
              height:10,
          }
      }

      })}>

       <Tab.Screen
        name="Home"
        component={HomeScreen}  
      />
       
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
       
      

    </Tab.Navigator>
)};


export default firstTab;

const styles = StyleSheet.create({
    container: {
        
    },
    iconStyle:{
      width:80,
      height:80,
      backgroundColor: '#222725',
      borderRadius: 40,
      justifyContent: 'center',
      alignItems:'center',
      marginBottom:65
    },
    imageStyle:{
        width:35,
        height:35,
        tintColor: 'white'
    }
  
    
});