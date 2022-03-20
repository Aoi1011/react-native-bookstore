/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   ActivityIndicator,
//   FlatList,
//   Image,
//   LogBox,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './components/Home';

// const Section: React.FC<{
//   title: string;
// }> = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const [isLoading, setIsLoading] = useState(true);
  // const [titles, setTitles] = useState<string[]>();
  // const [data, setData] = useState<any[]>([]);

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // const getBooks = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://www.googleapis.com/books/v1/volumes?q=a',
  //     );
  //     const json = await response.json();
  //     setData(json.items);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const renderItem = ({item}) => {
  //   console.log(item.volumeInfo.imageLinks.smallThumbnail);
  //   const linkString = item.volumeInfo.imageLinks.smallThumbnail.toString();
  //   return (
  //     <View>
  //       <Image
  //         source={{uri: item.volumeInfo.imageLinks.smallThumbnail}}
  //         style={{width: 100, height: 100}}
  //       />
  //       {/* // <Text>{item.volumeInfo.title}</Text> */}
  //     </View>
  //   );
  // };

  // useEffect(() => {
  //   getBooks();

  //   // responseItems.map(item => {
  //   //   console.log(item.volumeInfo.title);
  //   //   titles?.push(item.volumeInfo.title);

  //   //   console.log('Title 1', titles![1]);
  //   // });
  // }, []);

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
    //   <SafeAreaView style={backgroundStyle}>

    // {
    /* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */
    // }
    // {
    /* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">Hello World</Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */
    // }
    // <View style={{flex: 1, padding: 24}}>
    //   {isLoading ? (
    //     <ActivityIndicator />
    //   ) : (
    //     <View>
    //       <SearchBar />
    //       <FlatList
    //         data={data}
    //         keyExtractor={({id}) => id}
    //         renderItem={renderItem}
    //       />
    //     </View>
    //   )}
    // </View>
    //     </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;

// import React, {useEffect, useState} from 'react';
// import {ActivityIndicator, FlatList, Text, View} from 'react-native';

// const App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//     try {
//       const response = await fetch('https://reactnative.dev/movies.json');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{flex: 1, padding: 24}}>
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={({id}, index) => id}
//           renderItem={({item}) => (
//             <Text>
//               {item.title}, {item.releaseYear}
//             </Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default App;
