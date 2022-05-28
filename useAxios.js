import {StyleSheet} from 'react-native';
import  {useEffect, useState} from 'react';
import axios from 'axios';

const useAxios = url => {
  const [data, setdata] = useState();
  const [error, seterror] = useState('null');
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const baseUrl = `https://jsonplaceholder.typicode.com/${url}`;
    const fetchData = async () => {
      await axios
        .get(baseUrl)
        .then(res => {
          console.log('then ');
          setdata(res.data);
        })
        .catch(err => {
          console.log('catch');
          seterror(err.message);
        })
        .finally(() => {
          setTimeout(() => {
              setloading(false);
          }, 5000);
        });
      return {data, error, loading};
    };
    fetchData();
  }, [url]);
  console.log(data);
  console.log(error);
  console.log(loading);

  return {
    data,
    error,
    loading,
  };
};

export default useAxios;

const styles = StyleSheet.create({});
