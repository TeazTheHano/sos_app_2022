import { View, Text, Image } from 'react-native';
import React from 'react';

const Call = () => {
  return (
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
                marginHorizontal: 20,
              }}
            >
              Gọi trợ giúp khẩn cấp
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Call;
