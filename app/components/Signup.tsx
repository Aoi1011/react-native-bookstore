import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {} from 'react-native-paper';
import {AuthContext} from '../navigation/AuthProvider';

const Signup = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9wZW4lMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        }}
        style={styles.logo}
      />
      <View style={styles.inputView}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#003f5c"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={_email => setEmail(_email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={_password => setPassword(_password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={_password => setPassword(_password)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => register(email, password)}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  inputView: {
    backgroundColor: '#aae1bf',
    width: '70%',
    height: 45,
    marginBottom: 20,
    // alignItems: 'center',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'left',
    // marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginHorizontal: 20,
  },
  loginBtn: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#aaddf7',
  },
  horizontal: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  horizontalTitle: {
    textAlign: 'center',
  },
});

export default Signup;
