import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';
import films from '../helpers/films_data';
import FilmItem from './film_item';

export default class Search extends Component {
  render() {
    return (
      <View style= { styles.main_container } >
        <TextInput style= { styles.textinput } placeholder='search' />
        <Button title='GO' onPress= { () => {} } />
        <FlatList
          data= { films }
          keyExtractor={(item) => item.id.toString()}
          renderItem= { ({ item }) => <FilmItem film= { item } /> }
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 50
  },
  textinput : {
    marginLeft: 10, 
    marginRight: 10, 
    height: 50, 
    borderColor: '#000000',
    borderWidth: 1, 
    paddingLeft: 5
  }
})