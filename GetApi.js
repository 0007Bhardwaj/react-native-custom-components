import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Actions} from '../../persistance/actions/actions';

const GetApi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      Actions.getListOfItems('https://jsonplaceholder.typicode.com/posts'),
    )
      .then(res => {
        console.log('res');
        console.log(res);
        console.log('res');
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Text>GetApi</Text>
    </View>
  );
};

export default GetApi;

const styles = StyleSheet.create({});
