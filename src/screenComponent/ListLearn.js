import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { learn } from '../data/Learn_data';
import { useNavigation } from '@react-navigation/native';

const ListLearn = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={learn}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View
            style={{
              height: 67,
              width: 333,
              backgroundColor: '#76B9FF',
              marginBottom: 12,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Baloo2_SemiBold',
                color: 'white',
                fontSize: 16,
              }}
            >
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ListLearn;
