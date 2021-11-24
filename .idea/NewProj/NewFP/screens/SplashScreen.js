import React from 'react';
import { 
    Dimensions,
    StyleSheet, 
    Text,
    View,
    TouchableOpacity,

} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = ({navigation}) => {
  

  return (
    <View style = {styles.container}>
        <View style={styles.header}>
            <Animatable.Image
              animation="bounceIn"
              duration={2000}
              source={require('../assets/icons/FreshLogo.png')}
              style={styles.logo}
              resizeMode="stretch"
            />
        </View>

        <Animatable.View 
        style={styles.footer}
        animation="fadeInUpBig"
        >
            <Text style={styles.title}>Worry Less About Expiration! </Text>
            <Text style={styles.text}> Sign in with account </Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('Sign In')}>
              <LinearGradient
                colors={['#f4d433' , '#f4d433']}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons
                  name="navigate-next"
                  color="#ffff"
                  size={20} 
                />
              </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get("screen")
//for the logo height to be consistent calculated based on device height


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFF'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#e48d20',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: 300,
      height: 300,
     tintColor: '#e48d20'
  },
  title: {
      color: '#222725',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: '#222725',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }

});