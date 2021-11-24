import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firstTab from './CustomNavigation'
import SplashScreen from './screens/SplashScreen'
import LogInScreen from './screens/LogInScreen'
import SignUpScreen from './screens/SignUpScreen'
import Profile from './screens/ProfileScreen'
import AboutUs from './screens/AboutUsScreen'
import ListScreen from './screens/ListScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="splash_Screen"
        component={SplashScreen}
        options={{headerShown:false}}/>
      <Stack.Screen name="Welcome" component={SplashScreen} />
      <Stack.Screen name="Sign In" component={LogInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Home" component ={firstTab} />
      <Stack.Screen name="Profile" component ={Profile} />
      <Stack.Screen name="AboutUs" component ={AboutUs} />
      <Stack.Screen name="ListScreen" component = {ListScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}