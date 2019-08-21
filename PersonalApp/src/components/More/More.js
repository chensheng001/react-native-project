import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MenuCell from '../common/MenuCell';

class More extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <MenuCell leftIcon={'scan1'} leftTitle={'扫一扫'} />
          </View>

          <View style={{marginTop: 20}}>
            <MenuCell leftTitle={'省流量模式'} isSwitch={true} />
            <MenuCell leftTitle={'消息提醒'} />
            <MenuCell leftTitle={'邀请好友'} />
            <MenuCell rightTitle={'20.14M'} leftTitle={'清空缓存'} />
          </View>

          <View style={{marginTop: 20, marginBottom: 40}}>
            <MenuCell leftTitle={'意见反馈'} />
            <MenuCell leftTitle={'问卷调查'} />
            <MenuCell leftTitle={'支付帮助'} />
            <MenuCell leftTitle={'网络诊断'} />
            <MenuCell leftTitle={'我要应聘'} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 20,
  },
});

export default More;
