import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  LogBox,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SearchBar from './SearchBar';
import List from './List';
import Data from '../data.json';

const Home = ({navigation}) => {
  // const data = sampleData;
  const [titles, setTitles] = useState<string[]>();
  const [data, setData] = useState<any[]>([]);

  const getBooks = async () => {
    try {
      // const response = await fetch(
      //   'https://www.googleapis.com/books/v1/volumes?q=a',
      // );
      // const json = await response.json();
      const json = Data;

      let bookData = json.items.map(item => {
        let vi = item.volumeInfo;
        // let year = vi.publishedDate.split('-');
        return {
          id: item.id,
          title: vi.title,
          authors: vi.authors,
          description: vi.description,
          publishedDate: vi.publishedDate,
          previewLink: vi.previewLink,
          selfLink: item.selfLink,
          link: vi.infoLink,
          image: vi.imageLinks ? vi.imageLinks.smallThumbnail : '',
        };
      });
      setData(bookData);
    } catch (err) {
      console.error(err);
    }
  };

  //   const handleDetail = () => {
  //     navigation.navigate('Detail');
  //   };

  const searchBook = async (text: string) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${text}`,
      );
      const json = await response.json();

      let bookData = json.items.map(item => {
        let vi = item.volumeInfo;
        let year = vi.publishedDate.split('-');
        return {
          id: item.id,
          title: vi.title,
          authors: vi.authors,
          description: vi.description,
          publishedDate: year[0],
          previewLink: vi.previewLink,
          selfLink: item.selfLink,
          link: vi.infoLink,
          image: vi.imageLinks ? vi.imageLinks.smallThumbnail : '',
        };
      });
      setData(bookData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBooks();

    // responseItems.map(item => {
    //   console.log(item.volumeInfo.title);
    //   titles?.push(item.volumeInfo.title);

    //   console.log('Title 1', titles![1]);
    // });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <SearchBar searchBook={searchBook} />
      <List data={data} navigation={navigation} />
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

export default Home;
