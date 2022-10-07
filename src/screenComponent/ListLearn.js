import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { learn } from '../data/Learn_data';
import { useNavigation } from '@react-navigation/native';

class categoriesInfo {
  text: string;
  category: number;
}

const categories: categoriesInfo[] = [
  {
    text: 'Bỏng nhiệt/ điện',
    category: '1',
  },
  {
    text: 'Điện giật',
    category: '2',
  },
  {
    text: 'Hóc dị vật',
    category: '3',
  },
  {
    text: 'Say nắng',
    category: '4',
  },
  {
    text: 'Đuối nước',
    category: '5',
  },
  {
    text: 'Đột quỵ',
    category: '6',
  },
];

const ListLearn = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {categories.map((info) => (
          <TouchableOpacity
            key={info.text}
            onPress={() =>
              navigation.navigate('DetailLearn', { category: info.category })
            }
          >
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
                {info.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ListLearn;
