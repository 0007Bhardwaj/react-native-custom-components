import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const AddItem = () => {
  const [addData, setaddData] = useState('');
  const [flatlistData, setflatlistData] = useState([
    {name: 'Ankit'},
    {name: 'Ankur'},
    {name: 'Ankush'},
    {name: 'Vikas'},
    {name: 'Bhardwaj'},
    {name: 'Gita'},
    {name: 'Gaur'},
    {name: 'Mohit'},
    {name: 'Yadav'},
    {name: 'Bond'},
  ]);

  flatlistData.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });

  const ItemView = text => {
    const data = text.data;
    return (
      <Text style={{padding: 10, fontSize: 20}} key={data.id}>
        {data.name}
      </Text>
    );
  };
  useEffect(() => {
    return () => {};
  }, [flatlistData]);

  const functionToAddItem = () => {
    console.log(addData);
    console.log(flatlistData.includes(addData));

    flatlistData.includes(addData)
      ? alert('user already exists')
      : flatlistData.push({name: addData});

    setaddData('');
  };
  return (
    <View style={{flex: 1}}>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setaddData(text);
        }}></TextInput>

      <FlatList
        data={flatlistData}
        keyExtractor={(item, index) => index.toString()}
        key={Math.random(0, 10)}
        renderItem={({item}) => <ItemView data={item} />}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => {
          functionToAddItem();
        }}>
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  input: {
    height: 70,
    backgroundColor: 'rgb(224,224,224)',
    borderRadius: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
  button: {
    padding: 15,
    backgroundColor: 'blue',
    marginBottom: 20,
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center',
  },
});
