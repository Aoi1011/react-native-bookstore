import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {firebase} from '@react-native-firebase/database';

import {MaterialIcon} from './Icon';
import {AuthContext} from '../navigation/AuthProvider';

const deviceWidth = Dimensions.get('window').width;
const Detail = ({route, navigation}) => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const {user, setUser} = useContext(AuthContext);

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

  const handleBookmark = async () => {
    const reference = firebase
      .app()
      .database(
        'https://book-store-8c0cb-default-rtdb.asia-southeast1.firebasedatabase.app/',
      )
      // @ts-ignore
      .ref(`/bookmarks/${user.uid}`);

    const val = await reference.once('value').then(snapshot => {
      let userData;
      console.log('User data: ', snapshot.val());

      userData = snapshot.val();

      if (userData === null) {
        const newReference = firebase
          .app()
          .database(
            'https://book-store-8c0cb-default-rtdb.asia-southeast1.firebasedatabase.app/',
          )
          // @ts-ignore
          .ref(`/bookmarks/${user.uid}`)
          .push();

        console.log('Auto generated key: ', newReference.key);

        newReference
          .set({
            id: data.id,
            title: data.volumeInfo.title,
            authors: data.volumeInfo.authors,
            description: data.volumeInfo.description,
            publishedDate: data.volumeInfo.publishedDate,
            previewLink: data.volumeInfo.previewLink,
            selfLink: data.selfLink,
            link: data.volumeInfo.infoLink,
            image: data.volumeInfo.imageLinks
              ? data.volumeInfo.imageLinks.smallThumbnail
              : '',
          })
          .then(() => {
            console.log('Data updated');
          });
      }

      if (userData !== null) {
        const length = userData.length;
        const newReference = firebase
          .app()
          .database(
            'https://book-store-8c0cb-default-rtdb.asia-southeast1.firebasedatabase.app/',
          )
          // @ts-ignore
          .ref(`/bookmarks/${user.uid}`)
          .push();

        console.log('Auto generated key: ', newReference.key);

        newReference
          .set({
            id: data.id,
            title: data.volumeInfo.title,
            authors: data.volumeInfo.authors,
            description: data.volumeInfo.description,
            publishedDate: data.volumeInfo.publishedDate,
            previewLink: data.volumeInfo.previewLink,
            selfLink: data.selfLink,
            link: data.volumeInfo.infoLink,
            image: data.volumeInfo.imageLinks
              ? data.volumeInfo.imageLinks.smallThumbnail
              : '',
          })
          .then(() => {
            console.log('Data updated');
          });
      }
    });

    console.log(val);
    // reference.

    // reference
    //   .set({
    //     // @ts-ignore
    //     user: user.uid,
    //     link: route.params.selfLink,
    //   })
    //   .then(() => console.log('Data set!'));

    // const newReference = database().ref('/bookmarks').push();
    // console.log('Auto generated key: ', newReference.key);
    // newReference
    //   .set({
    //     link: route.params.selfLink,
    //   })
    //   .then(() => console.log('Data updated'))
    //   .catch(err => {
    //     console.error(err);
    //   });
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
            {/* <View
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
            </View> */}
            <Image
              style={styles.logo}
              // resizeMode="cover"
              source={{
                uri: 'https://jblm.armymwr.com/application/files/4216/2809/3952/9388177-Afterthought-Book-Club-Web.gif',
              }}
              // width={deviceWidth / 2 - 4 * 2}
              // height={200}
            />

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
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={handleBookmark}>
                <MaterialIcon
                  name="bookmark-outline"
                  size="large"
                  color="black"
                />
              </TouchableOpacity>
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
                  html: data.volumeInfo?.description,
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
                  {data.volumeInfo?.categories &&
                    data.volumeInfo?.categories[0]}
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
                  {data.volumeInfo?.publishedDate}
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
                  {data.volumeInfo?.publisher}
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
  logo: {
    width: 360,
    height: 200,
    marginBottom: 30,
  },
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
