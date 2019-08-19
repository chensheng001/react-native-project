import {createStackNavigator} from 'react-navigation';
import {Text} from 'react-native';
import React from 'react';
import Antd from 'react-native-vector-icons/AntDesign';
import News from '../News/News';
import NewsDetail from '../News/NewsDetail';

const NewsStackNavigator = createStackNavigator(
  {
    NewsList: {
      screen: News,
      navigationOptions: {
        header: null,
      },
    },
    NewsDetail: {
      screen: NewsDetail,
      navigationOptions: {
        title: '新闻详情',
      },
    },
  },
  {
    initialRouteName: 'NewsList',
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
export default NewsStackNavigator;
