import React, {useEffect} from 'react';
import {StyleSheet, Image, Dimensions, View, Text} from 'react-native';
import {MaterialIcon} from './Icon';

const deviceWidth = Dimensions.get('window').width;

const Item = ({photo}: {photo: any}): JSX.Element => {
  useEffect(() => {
    photo.image = 'https://reactnative.dev/img/tiny_logo.png';
    console.log(photo.authors);
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
      <View style={styles.right}>
        <Text style={styles.title} numberOfLines={1}>
          {photo.title}
        </Text>
        <Text style={styles.author}>{photo.authors ? photo.authors : '-'}</Text>
        <Text style={styles.publishedDate}>{photo.publishedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    borderColor: 'black',
    height: 100,
    paddingRight: 30,
    paddingLeft: 15,
  },
  item: {
    backgroundColor: 'aqua',
    margin: 4,
    // width: deviceWidth / 2 - 4 * 2,
    // height: 200,
    // width: 50,
    // height: 50,
  },
  right: {
    // paddingRight: 10,
    // paddingLeft: 10,
    padding: 10,
  },
  title: {
    // paddingLeft: 10,
  },
  author: {
    // paddingLeft: 10,
    // paddingTop: 1,
  },
  publishedDate: {
    backgroundColor: '#c2613d',
    width: 40,
  },
});
export default Item;
