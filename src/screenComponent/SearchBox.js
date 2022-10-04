import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

const SearchBox = () => {
  return (
    <View style={styles.seacrhBox}>
      <Ionicons
        name="search"
        style={{
          fontSize: 25,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 20,
          color: 'grey',
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="grey"
        style={styles.searchInput}
      />
      <FontAwesome
        name="microphone"
        size={25}
        style={{ color: 'red', right: 30 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  seacrhBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    paddingVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  searchInput: {
    width: '90%',
    height: 60,
    backgroundColor: '#F3F9FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    padding: 10,
    paddingLeft: 40,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
});
export default SearchBox;
