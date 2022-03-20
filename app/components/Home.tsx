import React, {useEffect, useState} from 'react';
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

const Home = () => {
  // const data = sampleData;
  const [isLoading, setIsLoading] = useState(true);
  const [titles, setTitles] = useState<string[]>();
  const [data, setData] = useState<any[]>([]);

  const getBooks = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=a',
      );
      const json = await response.json();

      let bookData = json.items.map(item => {
        let vi = item.volumeInfo;
        return {
          id: item.id,
          title: vi.title,
          description: vi.description,
          link: vi.infoLink,
          image: vi.imageLinks ? vi.imageLinks.smallThumbnail : '',
        };
      });
      setData(bookData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
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
      <List data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0 + 0,
    marginHorizontal: 0,
  },
});

export default Home;
