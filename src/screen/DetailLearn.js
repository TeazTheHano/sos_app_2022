import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import datas from '../data/data';
import ListLearn from '../screenComponent/ListLearn';

const DetailLearn = ({ navigation }) => {
  const allQuestions = datas;
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  

  const renderQuestion = () => {
    return (
      <View>
        <Text>{}</Text>
        {/* <View style={{ flexDirection: 'row' }}>
          <Text>{currentQuestionIndex + 1} </Text>
          <Text>/ {allQuestions.length}</Text>
        </View>
        <Text>{datas[currentQuestionIndex]?.ques}</Text> */}
      </View>
    );
  };

  const renderOption = () => {};
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

      <View style={{ alignSelf: 'center', width: '90%', marginTop: 48 }}>
        <View>
          <Text
            style={{
              fontFamily: 'Baloo2_Regular',
              fontSize: 16,
              lineHeight: 20.8,
              letterSpacing: '1%',
            }}
          >
            Bước thứ 2 trong quy trình thực hiện hô hấp nhân tạo {categoryNum}
          </Text>
        </View>
        <View>{renderQuestion()}</View>
      </View>
    </SafeAreaView>
  );
};

export default DetailLearn;
