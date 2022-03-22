import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

import Login from '../components/Login';
import Signup from '../components/Signup';

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
