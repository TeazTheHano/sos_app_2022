import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import FirstAid from './src/screen/FirstAid';
import Home from './src/screen/Home';
import Learn from './src/screen/Learn';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{ top: -30, justifyContent: 'center', alignItems: 'center' }}
    onPress={onPress}
  >
    <View
      style={{
        width: 105,
        height: 105,
        borderRadius: 50,
        backgroundColor: '#F14D42',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const StackNavigator = () => {};

function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: 'white',
          height: 108,
        },
      })}
    >
      <Tab.Screen
        name="FirstAid"
        component={FirstAid}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={
                  focused
                    ? require('./src/storage/icon/FirstAid1.png')
                    : require('./src/storage/icon/FirstAid.png')
                }
                resizeMode="contain"
                style={{
                  width: 52,
                  height: 42,
                }}
              />
              <Text style={{ fontSize: 20, color: '#447DB9' }}>Sơ cứu</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./src/storage/icon/call.png')}
              resizeMode="contain"
              style={{
                height: 40,
                width: 40,
                tintColor: '#ffffff',
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={
                  focused
                    ? require('./src/storage/icon/List1.png')
                    : require('./src/storage/icon/List.png')
                }
                resizeMode="contain"
                style={{
                  width: 52,
                  height: 42,
                }}
              />
              <Text style={{ fontSize: 20, color: '#447DB9' }}>Bài học</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
