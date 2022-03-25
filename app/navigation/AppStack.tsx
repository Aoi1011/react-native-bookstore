import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../components/Home';
import Detail from '../components/Detail';
import MenuScreen from '../components/Menu';
import Bookmark from '../components/Bookmark';

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerRight: () => <MenuScreen navigation={navigation} />,
        })}
      />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Bookmark" component={Bookmark} />
    </Stack.Navigator>
  );
};

export default AppStack;
