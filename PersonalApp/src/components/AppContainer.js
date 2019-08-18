import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import HomePage from './Home/HomePage';
import News from './News/News';
import AddressBook from './AddressBook/AddressBook';
import Mine from './Mine/Mine';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {StyleSheet} from 'react-native';

/*底部菜单栏*/
const BottomMater = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: '首页',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          return (
            <AntDesign
              style={[styles.iconStyle, {color: tintColor}]}
              name={'home'}
            />
          );
        },
      },
    },
    News: {
      screen: News,
      navigationOptions: {
        title: '新闻',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          return (
            <AntDesign
              style={[styles.iconStyle, {color: tintColor}]}
              name={'instagram'}
            />
          );
        },
      },
    },
    AddressBook: {
      screen: AddressBook,
      navigationOptions: {
        title: '通讯录',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          return (
            <AntDesign
              style={[styles.iconStyle, {color: tintColor}]}
              name={'book'}
            />
          );
        },
      },
    },
    Mine: {
      screen: Mine,
      navigationOptions: {
        title: '我的',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          return (
            <AntDesign
              style={[styles.iconStyle, {color: tintColor}]}
              name={'user'}
            />
          );
        },
      },
    },
  },
  {
    initialRouteName: 'Home', //第一次加载时初始选项卡路由的 routeName
    order: ['Home', 'News', 'AddressBook', 'Mine'], //定义选项卡顺序的 routeNames 数组
    tabBarOptions: {
      activeTintColor: 'orange', //标签和图标选中颜色
      activeBackgroundColor: 'white', //导航选中背景色
      inactiveTintColor: '#333', //标签和图标未选中颜色
      inactiveBackgroundColor: 'white', //导航未选中背景色
      showIcon: true, //是否显示 Tab 的图标,默认不显示
      style: {
        backgroundColor: 'white', //tabBar背景色
        height: 55,
      },
      labelStyle: {
        fontSize: 16,
      },
      // labelStyle 选项卡标签的样式对象
      // tabStyle 选项卡的样式对象
    },
    defaultNavigationOptions: {},
  },
);

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 20,
  },
})

const AppContainer = createAppContainer(BottomMater);
export default AppContainer;
