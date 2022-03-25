import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableHighlight,
} from 'react-native';
import {Button} from 'react-native-elements';

import {MaterialIcon} from './Icon';

const Item = ({
  photo,
  navigation,
}: {
  photo: any;
  navigation: any;
}): JSX.Element => {
  const handleDetail = selfLink => {
    navigation.navigate('Detail', {
      selfLink: selfLink,
    });
  };
  useEffect(() => {
    console.log(photo);
    photo.image = 'https://reactnative.dev/img/tiny_logo.png';
    // console.log(photo.authors);
  }, [photo]);

  return (
    <View style={styles.container}>
      <MaterialIcon name="book-open-blank-variant" size="large" color="black" />
      <TouchableHighlight
        onPress={() => handleDetail(photo.selfLink)}
        underlayColor="white">
        <View style={styles.center}>
          <Text style={styles.title} numberOfLines={1}>
            {photo.title}
          </Text>
          <Text style={styles.author}>
            {photo.authors ? photo.authors : '-'}
          </Text>
          <Text style={styles.publishedDate}>{photo.publishedDate}</Text>
        </View>
      </TouchableHighlight>

      <Button
        icon={
          <MaterialIcon name="book-search-outline" size="large" color="black" />
        }
        type="clear"
        style={styles.right}
        onPress={() => {
          Linking.openURL(photo.previewLink);
        }}
      />
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
  center: {
    // paddingRight: 10,
    // paddingLeft: 10,
    paddingLeft: 40,
    width: 250,
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
  right: {
    // flex: 1,
    // textAlign: 'end',
    // justifyContent: 'flex-end',
    // borderWidth: 1,
    // borderColor: 'black',
    width: '100%',
    paddingLeft: 30,
  },
});
export default Item;
