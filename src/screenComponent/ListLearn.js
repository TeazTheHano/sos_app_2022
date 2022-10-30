import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TouchableOpacityComponent,
} from 'react-native';
import React, { useState } from 'react';
import { learn } from '../data/Learn_data';
import { useNavigation } from '@react-navigation/native';
import datas from '../data/data';


const categories = [
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
  const [cateNum, setCateNum] = useState(null)
  const [showQuiz, setShowQuiz] = useState(false)
  const [borderColorAns1, setBorderColorAns1] = useState(false)
  const [borderColorAns2, setBorderColorAns2] = useState(false)
  const [borderColorAns3, setBorderColorAns3] = useState(false)
  const [optionBackground1, setOptionBackground1 ] = useState('white')
  const [optionBackground2, setOptionBackground2 ] = useState('white')
  const [optionBackground3, setOptionBackground3 ] = useState('white')
  const check = () => {
    if (datas[cateNum][0].ans) {
      
    } else {
      
    }
  }
  const navigation = useNavigation();

  const listOfContent = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {categories.map((categories) => (
            <TouchableOpacity
              key={categories.category}
              onPress={() => {
                console.log(categories.category),
                setCateNum(categories.category),
                console.log('hehe' + cateNum)
                setShowQuiz(true)
              }}
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
                  {categories.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  const quizView = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* QUEST 1 */}
      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{datas[cateNum][0].ques}</Text>
        <TouchableOpacity
          key={datas[1][0].choose[0]}
          onPress={() => {
            setBorderColorAns1(!borderColorAns1)
            console.log('1')
          }}
        >
          <View 
            borderColor = {borderColorAns1? 'orange' : '#76B9FF'}
            style={{
            width: 333,
            borderWidth: 2,
            marginTop: 10,
            borderRadius: 15,
            backgroundColor: optionBackground1
          }}>
            <Text style={{fontSize: 18, paddingVertical: 20, paddingHorizontal: 2, alignSelf: 'center', width: 300}}>{datas[1][0].choose[0]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          key={datas[1][0].choose[1]}
          onPress={() => {
            setBorderColorAns2(!borderColorAns2)
            console.log('1')
          }}
        >
          <View 
            borderColor = {borderColorAns2? 'orange' : '#76B9FF'}
            style={{
            width: 333,
            borderWidth: 2,
            marginTop: 10,
            borderRadius: 15,
            backgroundColor: optionBackground2
          }}>
            <Text style={{fontSize: 18, paddingVertical: 20, paddingHorizontal: 2, alignSelf: 'center', width: 300}}>{datas[1][0].choose[1]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          key={datas[1][0].choose[2]}
          onPress={() => {
            setBorderColorAns3(!borderColorAns3)
            console.log('1')
          }}
        >
          <View 
            borderColor = {borderColorAns3? 'orange' : '#76B9FF'}
            style={{
            width: 333,
            borderWidth: 2,
            marginTop: 10,
            borderRadius: 15,
            backgroundColor: optionBackground3
          }}>
            <Text style={{fontSize: 18, paddingVertical: 20, paddingHorizontal: 2, alignSelf: 'center', width: 300}}>{datas[1][0].choose[2]}</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }

  if (!showQuiz) {
    return (
      <SafeAreaView>
        {listOfContent()}
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView>
        {quizView()}
      </SafeAreaView>
    )
  }
};


export default ListLearn;
