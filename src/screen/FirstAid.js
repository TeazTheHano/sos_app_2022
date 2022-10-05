import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Logo from '../screenComponent/Logo';
import SearchBox from '../screenComponent/SearchBox';

import { useFonts } from 'expo-font';
import ListFA from '../screenComponent/ListFA';

const FirstAid = () => {
  const [loaded] = useFonts({
    Baloo2_Bold: require('../../assets/font/Baloo_2/static/Baloo2-Bold.ttf'),
    Baloo2_ExtraBold: require('../../assets/font/Baloo_2/static/Baloo2-ExtraBold.ttf'),
    Baloo2_Medium: require('../../assets/font/Baloo_2/static/Baloo2-Medium.ttf'),
    Baloo2_Regular: require('../../assets/font/Baloo_2/static/Baloo2-Regular.ttf'),
    Baloo2_SemiBold: require('../../assets/font/Baloo_2/static/Baloo2-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <View style={{ marginTop: 47 }}>
        <Logo />
      </View>
      <View style={{ marginTop: 16 }}>
        <SearchBox />
      </View>

      <View style={{ marginTop: 10, alignItems: 'center', marginBottom: 450 }}>
        <ListFA />
      </View>
    </SafeAreaView>
  );
};

export default FirstAid;
