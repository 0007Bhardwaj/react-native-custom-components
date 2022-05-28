import {StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import useAxios from '../hooks/useAxios';

const Home = () => {
  const {data, error, loading} = useAxios('users');
  const navigation = useNavigation();

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={styles.button}>
        <Text style={{alignSelf: 'center'}}> move to search Screen</Text>
      </TouchableOpacity>
      {data &&
        data.map(data => {
          return <Text>{data.name}</Text>;
        })}
      {error && <Text> {error}</Text>}
      {loading && <Text> loading...</Text>}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddItem')}
        style={styles.button}>
        <Text style={{alignSelf: 'center'}}> move to Add Item Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('GetApi')}
        style={styles.button}>
        <Text style={{alignSelf: 'center'}}> move to Redux Api </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ReducerApi')}
        style={styles.button}>
        <Text style={{alignSelf: 'center'}}> move to Reducer Api</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('CustomGraphQL')}
        style={styles.button}>
        <Text style={{alignSelf: 'center'}}> move to CustomGraphQL Api</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('NewStorage')}
        style={styles.button}>
        <Text style={{alignSelf: 'center'}}> move to MMKV Storage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewStorage')}
        style={styles.button}>
        <Text style={{alignSelf: 'center'}}> move to MMKV Storage</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 20,
    marginVertical: 20,
  },
});
