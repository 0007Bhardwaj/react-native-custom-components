import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Search = () => {
  const [filteredData, setFilteredData] = useState([
    {name: 'ankit'},
    {name: 'ankur'},
    {name: 'ankush'},
    {name: 'vikas'},
    {name: 'bhardwaj'},
    {name: 'gita'},
    {name: 'gaur'},
    {name: 'mohit'},
    {name: 'yadav'},
    {name: 'bond'},
  ]);
  const [masterData, setMasterData] = useState(filteredData);
  const [search, setsearch] = useState('');

  const navigation = useNavigation();

  const searchFilter = text => {
    console.log(text);
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setsearch(text);
    } else {
      setFilteredData(masterData);
      setsearch(text);
    }
  };
  const ItemView = text => {
    const data = text.data;
    return <Text key={data.id}>{data.name}</Text>;
  };

  return (
    <View>
      <TextInput
        value={search}
        placeholder="search here"
        onChangeText={text => {
          searchFilter(text);
        }}
        style={styles.textInput}></TextInput>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        key={Math.random(0, 10)}
        renderItem={({item}) => <ItemView data={item} />}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
  },
});
