import React, {useEffect} from 'react';
import {StyleSheet, Image, Dimensions, View, Text} from 'react-native';
import {MaterialIcon} from './Icon';

const deviceWidth = Dimensions.get('window').width;

const Item = ({photo}: {photo: any}): JSX.Element => {
  useEffect(() => {
    photo.image = 'https://reactnative.dev/img/tiny_logo.png';
    console.log(photo.image);
  }, [photo]);

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.item}
        resizeMode={'cover'}
        source={{uri: photo.image}}
        width={deviceWidth / 2 - 4 * 2}
        height={200}
      /> */}
      <MaterialIcon
        name="book-open-blank-variant"
        size="extraLarge"
        color="black"
      />
      <Text>{photo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  item: {
    backgroundColor: 'aqua',
    margin: 4,
    // width: deviceWidth / 2 - 4 * 2,
    // height: 200,
    // width: 50,
    // height: 50,
  },
});
export default Item;
