import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import ListLearn from '../screenComponent/ListLearn';

const Learn = () => {
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
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          width: '100%',
          height: 91,
          backgroundColor: '#447DB9',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontFamily: 'Baloo2_Medium',
            fontSize: 28,
            color: 'white',
            marginTop: 43,
          }}
        >
          Bài học
        </Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 64, marginBottom: 290 }}>
        <ListLearn />
      </View>
    </SafeAreaView>
  );
};

export default Learn;
