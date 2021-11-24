import React, { useState, useEffect } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    Platform,
    
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../Firebase';




const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = async() => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            navigation.navigate('Sign In');
        })
        .catch(error => alert(error.message))
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Register An Account</Text>
            </View>

            <Animatable.View style={styles.footer}
            animation="fadeInUpBig">
                <Text style={styles.emailTitle}>Email</Text>
                <View style={styles.email}>
                    <FontAwesome
                        name="envelope-o"
                        color="#000000"
                        size={20}
                    />
                    <TextInput
                        style={styles.emailTextInput}
                        placeholder="Enter Email Here"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        autoCapitalize="none"
                        // method for checking text input
                        
                    />
              
                </View>
                
                <Text style={styles.passwordTitle}>Password</Text>
                <View style={styles.password}>
                    <FontAwesome
                        name="key"
                        color="#000000"
                        size={20}
                    />
                    <TextInput
                        style={styles.passwordTextInput}
                        placeholder="Enter Password Here"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        autoCapitalize="none"
                        
                    />
                    
                </View>

                
                    
                <View style={styles.footerButton}>
                    
                     <TouchableOpacity 
                        onPress={handleSignUp}
                        style={styles.signUp}
                    >
                        <Text style={styles.signUpText}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                   
                    
                    <View style={styles.goBackMessage}>

                        <Text>
                        Already have an account? 
                        </Text>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('Sign In')}
                        style={styles.goBack}
                    >

                        <Text style={styles.goBackText}>
                             Sign in                       
                        </Text>
                    </TouchableOpacity>
                    </View>

                </View>

            </Animatable.View >
        </View>

    );
};

export default SignUpScreen;

const {height} = Dimensions.get("screen")

//for the logo height to be consistent calculated based on device height
const height_logo = height * 0.20;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#e48d20'
    },
    header:{
        flex: 2,
        justifyContent:'flex-start',
        alignItems: 'center',
        flexDirection:'row',
        paddingLeft:29.69
    },

    headerText:{
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 36,
    },

    logo: {
        width: height_logo,
        height: height_logo
    },

    footer:{
        flex: 3,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },

    emailTitle:{
        fontSize: 20,
        color: '#222725'
    },

    email:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor: '#121113',
        paddingBottom: 5,
    },

    emailTextInput:{
        flex: 1,
        paddingLeft:10,
        color: '#05375a'
    },

    passwordTitle:{
        paddingTop:15,
        fontSize: 20,
        color: '#222725'
    },

    password:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor: '#121113',
        paddingBottom: 5,
    },

    passwordTextInput:{
        flex: 1,
        paddingLeft:10,
        color: '#05375a'
    },

    footerButton:{
        alignItems: 'center',
        marginTop: 50
    },
    
    signIn:{
        width: 335,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor: '#f4d433',
        borderColor:'#222725',
        borderWidth: 1,
        marginTop: 15,
    },

    signInText:{
        fontSize:24,
        color: '#222725'
    },

    signUp:{
        width: 335,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:'#222725',
        backgroundColor:'#f4d433',
        borderWidth: 1,
        marginTop: 15,
    },

    signUpText:{
        fontSize:24,
        color:'#222725',
    },

    goBack:{
        width:'100%',
        height:20,
        alignItems:'center',
              
    },

    goBackText:{
        fontSize:14,
        color: '#f4d433',
        fontWeight: 'bold',
        marginLeft:5,
    },

    goBackMessage:{
        width: '100%',
        height:20,
        marginLeft:120,
        marginTop: 15,
        flexDirection:'row',
    }

});