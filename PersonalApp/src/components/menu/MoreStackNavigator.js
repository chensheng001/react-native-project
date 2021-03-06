import {createStackNavigator} from 'react-navigation';
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Antd from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import More from '../More/More';

const MoreStackNavigator = createStackNavigator(
  {
    MoreList: {
      screen: More,
      navigationOptions: {
        title: '更多',
        headerRight: (
          <TouchableOpacity
            onPress={() => {
              alert('点击');
            }}>
            <Text>
              <Icon style={{fontSize: 20, color: '#fff'}} name={'cog'} />
            </Text>
          </TouchableOpacity>
        ),
        headerRightContainerStyle: {
          marginRight: 10,
        },
      },
    },
  },
  {
    initialRouteName: 'MoreList',
    headerLayoutPreset: 'center', //标题居中
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontSize: 18,
        height: 60,
        lineHeight: 60,
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'orange',
      },
    },
  },
);
export default MoreStackNavigator;
