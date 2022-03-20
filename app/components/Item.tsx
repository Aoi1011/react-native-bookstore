import React, {useEffect} from 'react';
import {StyleSheet, Image, Dimensions, View, Text} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const Item = ({photo}: {photo: any}): JSX.Element => {
  useEffect(() => {
    console.log(photo.image);
  }, [photo]);

  return (
    <View>
      <Image
        style={styles.item}
        resizeMode={'cover'}
        source={{uri: photo.image}}
      />
      <Text>{photo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'aqua',
    margin: 4,
    // width: deviceWidth / 2 - 4 * 2,
    // height: 200,
    width: 50,
    height: 50,
  },
});
export default Item;
