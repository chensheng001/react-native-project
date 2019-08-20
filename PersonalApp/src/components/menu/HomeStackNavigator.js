import {createStackNavigator} from 'react-navigation';
import React from 'react';
import HomePage from '../Home/HomePage';

const HomeStackNavigator = createStackNavigator(
  {
    HomeList: {
      screen: HomePage,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'HomeList',
    headerLayoutPreset: 'center', //标题居中
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontSize: 18,
        height: 50,
        lineHeight: 50,
      },
      headerTintColor: '#333',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
);
export default HomeStackNavigator;
