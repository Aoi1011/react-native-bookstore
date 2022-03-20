import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import RenderHTML from 'react-native-render-html';

import {MaterialIcon} from './Icon';

const deviceWidth = Dimensions.get('window').width;
const Detail = ({route, navigation}) => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const getBook = async () => {
    try {
      const response = await fetch(route.params.selfLink);

      const json = await response.json();
      console.log(json);

      setData(json);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <View style={{}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcon
              name="book-open-page-variant-outline"
              size="extraLarge"
              color="black"
            />
          </View>
          <ImageBackground
            // style={styles.item}
            resizeMode="cover"
            source={{uri: data.volumeInfo.imageLinks.thumbnail}}
            // width={deviceWidth / 2 - 4 * 2}
            // height={200}
          />
          <ScrollView>
            <Text>{data.volumeInfo.title}</Text>
            <RenderHTML
              source={{
                html: data.volumeInfo.description,
              }}
            />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Detail;
