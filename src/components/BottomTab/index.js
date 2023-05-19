import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../../screens/Home';
import AboutPage from '../../screens/About';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'HomeTab'}
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AboutTab"
        options={{
          title: 'Giới thiệu',
        }}
        component={AboutPage}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
