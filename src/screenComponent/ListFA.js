import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { firstaid } from '../data/FirstAid_data';
import { useNavigation } from '@react-navigation/native';

const ListFA = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={firstaid}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.push('DetailFA', {
              title: item.title,
              vid: item.vid,
              sign: item.sign,
              fa: item.fa,
            })
          }
        >
          <View
            style={{
              width: 160,
              height: 141.56,
              marginHorizontal: 10,
              marginBottom: 15,
            }}
          >
            <View
              style={{
                width: 160,
                height: 141.56,
                marginTop: 15,
              }}
            >
              <Image
                source={item.img}
                style={{
                  width: 160,
                  height: 141.56,
                  borderRadius: 18,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.5)',
                width: 160,
                height: 141.56,
                borderRadius: 18,
                alignSelf: 'center',
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Baloo2_SemiBold',
                  fontSize: 16,
                  color: 'white',
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '60%',
                }}
              >
                {item.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ListFA;
