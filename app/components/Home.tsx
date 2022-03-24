import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import SearchBar from './SearchBar';
import List from './List';
import Data from '../data.json';

const Home = ({navigation}) => {
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

  const searchBook = async (text: string) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${text}`,
      );
      const json = await response.json();

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

  useEffect(() => {
    getBooks();
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
