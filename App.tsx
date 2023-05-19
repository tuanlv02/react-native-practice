/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import {StatusBar} from 'react-native';
import BottomTab from './src/components/BottomTab';
import ProductPage from './src/screens/Product';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BottomTab}
            options={{headerShown: false, title: 'Trang chủ'}}
          />
          <Stack.Screen
            name="Product"
            component={ProductPage}
            options={{
              title: 'Sản phẩm',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
