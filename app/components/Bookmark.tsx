import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import SearchBar from './SearchBar';
import List from './List';
import Data from '../data.json';
import {firebase} from '@react-native-firebase/database';

import {AuthContext} from '../navigation/AuthProvider';

const Bookmark = ({navigation}) => {
  const [data, setData] = useState<any[]>([]);
  const {user, setUser} = useContext(AuthContext);

  const getBooks = async () => {
    try {
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

        let bookmarkArray: any[] = [];

        for (let bookmark in userData) {
          console.log(bookmarkArray);
          console.log(userData[bookmark]);
          bookmarkArray.push(userData[bookmark]);
        }

        setData(bookmarkArray);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bookmark List</Text>
      {data.length !== 0 ? (
        <List data={data} navigation={navigation} />
      ) : (
        <Text style={{textAlign: 'center', marginTop: 40}}>No data</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0 + 0,
    marginHorizontal: 0,
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontSize: 30,
  },
});

export default Bookmark;
