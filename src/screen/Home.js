import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

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
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 91,
          }}
        >
          <Image source={require('../storage/icon/logo.png')} />
          <View style={{ marginLeft: 5 }}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontFamily: 'Baloo2_ExtraBold',
                fontSize: 24,
                lineHeight: 38,
              }}
            >
              E-First Aid
            </Text>
            <Text
              style={{
                textTransform: 'uppercase',
                fontFamily: 'Baloo2_Medium',
                fontSize: 11,
                lineHeight: 15.4,
              }}
            >
              Sơ cứu kịp thời
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 87,
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(241,77,66,0.5)',
            width: 265,
            height: 265,
            borderRadius: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(241,77,66,0.5)',
              width: 230.09,
              height: 230.09,
              borderRadius: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                backgroundColor: 'rgb(241,77,66)',
                width: 195.71,
                height: 195.71,
                borderRadius: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={require('../storage/icon/call.png')}
                style={{ width: 57, height: 57 }}
              />
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontSize: 18,
                  textAlign: 'center',
                  fontFamily: 'Baloo2_Bold',
                  marginTop: 13,
                  color: 'white',
                }}
              >
                Gọi trợ giúp khẩn cấp
              </Text>
            </View>
          </View>
        </View>
      </View>

      <StatusBar barStyle="auto" />
    </SafeAreaView>
  );
};

export default Home;
