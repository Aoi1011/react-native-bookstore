import React from 'react';
import {StyleSheet, FlatList, StatusBar} from 'react-native';
import Item from './Item';

const List = ({
  data,
  navigation,
}: {
  data: Array<any>;
  navigation: any;
}): JSX.Element => {
  const renderItem = ({item}: {item: any}) => (
    <Item photo={item} navigation={navigation} />
  );

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: any) => item.id.toString()}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    paddingTop: StatusBar.currentHeight || 0 + 0,
    marginHorizontal: 0,
  },
});
export default List;
