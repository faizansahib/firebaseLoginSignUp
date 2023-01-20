import { View, Text,  StyleSheet, Button } from 'react-native'
import React,{useState, useContext} from 'react'
import { Title } from 'react-native-paper';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import { AuthContext } from '../Navigations/AuthProvider';
import { add, login } from '../store/reducer/userReducer';

import { useDispatch } from 'react-redux';


export default function Login({navigation}) {

  const [data, setData] =useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
});

  // const { login, loading,user } = useContext(AuthContext);
  const dispatch = useDispatch()
  

  const newUser = () => {
    dispatch(add(email))
    dispatch(add(password))
    navigation.navigate('HomeStack');
  }

  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}

const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
    }
}



  return (
    <View style={styles.container}>
        <Title style={styles.titleText}>Welcome!</Title>
        <FormInput
            labelName="Email"
           
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
        />
        <FormInput
            labelName="Password"
            
            secureTextEntry={true}
            onChangeText={(val) => handlePasswordChange(val)}
        />
        <FormButton
            title="Login"
            modeValue="contained"
            labelStyle={styles.loginButtonLabel}
            onPress={() => {login( data.username, data.password )}}
        />
        <FormButton
            title="Sign up here"
            modeValue="text"
            uppercase={false}
            labelStyle={styles.navButtonText}
            onPress={() => navigation.navigate('SignUp')}
        />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
});