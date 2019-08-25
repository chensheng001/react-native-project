import {createStackNavigator} from 'react-navigation';
import React from 'react';
import HomePage from '../Home/HomePage';
import HomeShopCenterDetail from '../Home/HomeShopCenterDetail';

const HomeStackNavigator = createStackNavigator(
  {
    HomeList: {
      screen: HomePage,
      navigationOptions: {
        header: null,
      },
    },
    HomeShopCenterDetail: {
      screen: HomeShopCenterDetail,
      navigationOptions: {
        title: '购物中心详情',
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
