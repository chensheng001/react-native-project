import {createStackNavigator} from 'react-navigation';
import {Text} from 'react-native';
import React from 'react';
import AddressBook from '../AddressBook/AddressBook';
import Antd from 'react-native-vector-icons/AntDesign';

const AddressBookStackNavigator = createStackNavigator(
  {
    AddressBook: {
      screen: AddressBook,
      navigationOptions: {
        title: '通讯录',
        headerRight: (
          <Text>
            <Antd style={{fontSize: 18}} name={'addusergroup'} />
          </Text>
        ),
        headerRightContainerStyle: {
          marginRight: 10,
        },
      },
    },
  },
  {
    initialRouteName: 'AddressBook',
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
export default AddressBookStackNavigator;
