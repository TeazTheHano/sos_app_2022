import { View, Text } from 'react-native';
import React from 'react';
import { firstaid } from '../data/FirstAid_data';
import { useNavigation } from '@react-navigation/native';

const Theory = ({ route }) => {
  const navigation = useNavigation();
  const { sign } = route.params;
  const { fa } = route.params;
  return (
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
                  lineHeight: 16,
                  letterSpacing: '1.2%',
                  fontFamily: 'Baloo2_Bold',
                  color: 'white',
                }}
              >
                Dấu hiệu nhận biết
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
                lineHeight: 16,
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
          <Text
            style={{
              lineHeight: 16,
              letterSpacing: '1.2%',
              fontSize: 14,
              marginTop: 20,
              color: 'white',
            }}
          >
            - Có thể thổi ngạt trực tiếp hoặc gián tiếp thông qua một miếng vải
            mỏng đặt trên miệng bệnh nhân.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Theory;
