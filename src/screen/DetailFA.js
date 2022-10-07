import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Theory from '../screenComponent/Theory';

const DetailFA = ({ route, navigation }) => {
  const { vid } = route.params;
  const { title } = route.params;
  const { sign } = route.params;
  const { fa } = route.params;
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: 91,
          backgroundColor: '#447DB9',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 43 }}>
          <Entypo
            name="chevron-left"
            size={28}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              textAlign: 'center',
              textTransform: 'uppercase',
              fontFamily: 'Baloo2_Medium',
              fontSize: 28,
              color: 'white',
              marginLeft: '30%',
            }}
          >
            Sơ cứu
          </Text>
        </View>
      </View>
      <ScrollView style={{ height: '84%', width: '100%' }}>
        <View style={styles.pageCSS}>
          {/* all page */}
          <View>
            <Video
              style={styles.video}
              source={vid}
              useNativeControls
              resizeMode="contain"
            />
            <View style={styles.videoInfo}>
              <Text style={styles.videoTitle}>{title}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 8 }}>
          <View
            style={{
              width: '100%',
              height: 'auto',
              backgroundColor: '#447DB9',
              paddingBottom: 19,
            }}
          >
            <View style={{ marginHorizontal: '5%', width: '80%' }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 33,
                  }}
                >
                  <View
                    style={{
                      width: 38,
                      height: 38,
                      backgroundColor: 'white',
                      borderRadius: 50,
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontFamily: 'Baloo2_Bold',
                        color: '#447DB9',
                      }}
                    >
                      01
                    </Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        letterSpacing: '1.2%',
                        fontFamily: 'Baloo2_Bold',
                        color: 'white',
                      }}
                    >
                      Dấu hiệu nhận biết
                    </Text>
                  </View>
                </View>
                <View
                  style={{ marginLeft: '15%', marginTop: 17, width: '100%' }}
                >
                  <Text
                    style={{
                      lineHeight: 16,
                      letterSpacing: '1.2%',
                      fontSize: 14,
                      color: 'white',
                    }}
                  >
                    {sign}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 33,
                }}
              >
                <View
                  style={{
                    width: 38,
                    height: 38,
                    backgroundColor: 'white',
                    borderRadius: 50,
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      fontFamily: 'Baloo2_Bold',
                      color: '#447DB9',
                    }}
                  >
                    02
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      letterSpacing: '1.2%',
                      fontFamily: 'Baloo2_Bold',
                      color: 'white',
                    }}
                  >
                    Các Bước Sơ Cứu
                  </Text>
                </View>
              </View>
              <View style={{ marginLeft: '15%', marginTop: 17, width: '100%' }}>
                <Text
                  style={{
                    lineHeight: 16,
                    letterSpacing: '1.2%',
                    fontSize: 14,
                    color: 'white',
                  }}
                >
                  {fa}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageCSS: { paddingTop: 15 },
  topNav: {
    width: '100%',
    height: 96,
    backgroundColor: '#F5B870',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  topNavTitle: {
    fontSize: 18,
    lineHeight: 21.94,
    color: 'white',
    marginLeft: 16,
  },
  video: {
    width: '84%',
    height: 350,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
  },
  videoInfo: {
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  videoTitle: {
    fontSize: 20,
    letterSpacing: 1,
    width: '100%',
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'Baloo2_Bold',
    textTransform: 'uppercase',
    color: '#447DB9',
  },

  text: {
    fontSize: 14,
    marginVertical: 20,
  },
  img: {
    width: null,
    flex: 1,
    height: 250,
  },
});

export default DetailFA;
