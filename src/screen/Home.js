import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import Logo from '../screenComponent/Logo';
import Call from '../screenComponent/Call';

const Home = () => {
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
      <View style={{ marginTop: 91 }}>
        <Logo />
      </View>
      <Call />
      <StatusBar barStyle="auto" />
    </SafeAreaView>
  );
};

export default Home;
