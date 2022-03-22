import React, {useContext, useState} from 'react';

import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {Menu, MenuItem} from 'react-native-material-menu';
import {MaterialIcon} from '../components/Icon';
import {AuthContext} from '../navigation/AuthProvider';

export default function MenuScreen({navigation}: {navigation: any}) {
  const [visible, setVisible] = useState(false);

  const {user, logout} = useContext(AuthContext);

  const handleLogin = () => {
    logout();
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
        <MenuItem onPress={handleLogin}>LOGOUT</MenuItem>
      </Menu>
    </View>
  );
}
