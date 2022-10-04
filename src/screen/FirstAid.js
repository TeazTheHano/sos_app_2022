import { View, Text, SafeAreaView, Image, FlatList } from 'react-native';
import React from 'react';
import Logo from '../screenComponent/Logo';
import SearchBox from '../screenComponent/SearchBox';
import { firstaid } from '../data/FirstAid_data';

const FirstAid = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 47 }}>
        <Logo />
      </View>
      <View style={{ marginTop: 16 }}>
        <SearchBox />
      </View>
      <View>
        {firstaid.map((data, index) => {
          return (
            <FlatList key={data.id}>
              <Image source={data.img} style={{ width: 160, height: 141 }} />
            </FlatList>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default FirstAid;
