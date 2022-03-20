import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
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
          <ScrollView
            style={{
              // paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#AFAFAF',
              }}>
              <MaterialIcon
                name="book-open-page-variant-outline"
                size="extraLarge"
                color="black"
              />
            </View>
            {/* <ImageBackground
            // style={styles.item}
            resizeMode="cover"
            source={{uri: data.volumeInfo.imageLinks.thumbnail}}
            // width={deviceWidth / 2 - 4 * 2}
            // height={200}
          /> */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                paddingBottom: 30,
              }}>
              <Text style={{fontSize: 30, width: 330}}>
                {data.volumeInfo.title}
              </Text>
              <TouchableHighlight
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcon
                  name="bookmark-outline"
                  size="large"
                  color="black"
                />
              </TouchableHighlight>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text>ORDER</Text>
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
            <View style={{paddingTop: 30, paddingBottom: 30}}>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 20,
                  paddingBottom: 20,
                  fontFamily: 'Cochin',
                }}>
                Publisher Description
              </Text>
              <RenderHTML
                source={{
                  html: data.volumeInfo.description,
                }}
              />
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
            <ScrollView
              horizontal={true}
              style={{paddingTop: 30, paddingBottom: 30}}>
              <View style={styles.horizontal}>
                <Text style={styles.horizontalTitle}>GENRE</Text>
                <Text style={styles.horizontalTitle}>
                  {data.volumeInfo.categories[0]}
                </Text>
              </View>
              <View
                style={{
                  borderEndColor: 'black',
                  borderEndWidth: 1,
                }}
              />
              <View style={styles.horizontal}>
                <Text style={styles.horizontalTitle}>PUBLISHED DATE</Text>
                <Text style={styles.horizontalTitle}>
                  {data.volumeInfo.publishedDate}
                </Text>
              </View>
              <View
                style={{
                  borderEndColor: 'black',
                  borderEndWidth: 1,
                }}
              />
              <View style={styles.horizontal}>
                <Text style={styles.horizontalTitle}>PUBLISHER</Text>
                <Text style={styles.horizontalTitle}>
                  {data.volumeInfo.publisher}
                </Text>
              </View>
              <View
                style={{
                  borderEndColor: 'black',
                  borderEndWidth: 1,
                }}
              />
              <View style={styles.horizontal}>
                <Text style={styles.horizontalTitle}>LANGUAGE</Text>
                <Text style={styles.horizontalTitle}>
                  {data.volumeInfo.language.toUpperCase()}
                </Text>
              </View>
            </ScrollView>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingBottom: 30,
    paddingHorizontal: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2ca4bb',
    padding: 10,
    marginBottom: 30,
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

export default Detail;
