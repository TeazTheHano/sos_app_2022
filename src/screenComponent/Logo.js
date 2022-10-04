import { View, Text, Image } from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
  );
};

export default Logo;
