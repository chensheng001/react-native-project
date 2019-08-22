import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenWidth from '../../model/ScreenWidth';
import HomeMenuSlider from './HomeMenuSlider';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //头部搜索组件
  _renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        <View style={styles.navBarLeftStyle}>
          <Text style={{color: '#fff'}}>广州</Text>
          <AntDesign style={styles.iconStyle} name={'down'} />
        </View>
        <TextInput
          //指定左侧图片
          inlineImageLeft={'search_icon'}
          inlineImagePadding={10}
          placeholderTextColor={'gray'}
          style={styles.navBarInputStyle}
          placeholder={'请输入.......'}
        />
        <View style={styles.navBarRightStyle}>
          <TouchableOpacity
            onPress={() => {
              alert('alarm');
            }}>
            <Image
              source={{uri: 'asset:/icon_homepage_message.png'}}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('scan');
            }}>
            <Image
              source={{uri: 'asset:/icon_homepage_scan.png'}}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderNavBar()}
        <ScrollView>
          {/*菜单轮播*/}
          <HomeMenuSlider />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBarStyle: {
    height: 60,
    backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navBarLeftStyle: {
    flexDirection: 'row',
  },
  navBarInputStyle: {
    width: ScreenWidth * 0.65,
    height: 30,
    fontSize: 16,
    lineHeight: 30,
    borderRadius: 15,
    padding: 0,
    paddingLeft: 5,
    backgroundColor: '#fff',
  },
  navBarRightStyle: {
    flexDirection: 'row',
  },
  iconStyle: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
});

export default HomePage;
