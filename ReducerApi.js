import {StyleSheet, Text, ScrollView} from 'react-native';
import React, {useReducer} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const ReducerApi = () => {
  const navigation = useNavigation();

  const initialValue = {
    data: {},
    error: '',
    loading: true,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          loading: false,
          data: action.payload,
          error: '',
        };
      case 'FETCH_FAILURE':
        return {
          loading: false,
          data: {},
          error: 'Something Went Wrong',
        };

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);

  axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
      dispatch({type: 'FETCH_SUCCESS', payload: res.data});
    })
    .catch(err => {
      dispatch({type: 'FETCH_FAILURE'});
    });

  return (
    <ScrollView>
      {state.loading ? (
        <Text> 'loading'</Text>
      ) : (
        state.data.map(data => {
          return <Text> {data.name}</Text>;
        })
      )}
      {state.error ? <Text>{state.error}</Text> : null}
    </ScrollView>
  );
};

export default ReducerApi;

const styles = StyleSheet.create({});