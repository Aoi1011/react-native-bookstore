import React, {useState} from 'react';

import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {MaterialIcon} from '../components/Icon';

export default function MenuScreen({navigation}: {navigation: any}) {
  const [visible, setVisible] = useState(false);

  const handleLogin = () => {
    navigation.push('Login');
    setVisible(false);
  };

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <View
      style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <Menu
        visible={visible}
        anchor={
          <Button
            icon={<MaterialIcon name="menu" size="large" color="black" />}
            type="clear"
            // style={styles.right}
            onPress={showMenu}
          />
        }
        onRequestClose={hideMenu}>
        <MenuItem onPress={handleLogin}>LOGIN</MenuItem>
      </Menu>
    </View>
  );
}
