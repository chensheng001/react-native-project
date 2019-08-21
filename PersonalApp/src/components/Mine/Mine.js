import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MenuCell from '../common/MenuCell';

class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myMoney: '100,000',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{marginTop: 20}}>
            <MenuCell leftImg={'asset:/collect.png'} leftTitle={'我的订单'} rightTitle={'查看全部订单'} />
          </View>
          <View style={{marginTop: 20}}>
            <MenuCell leftImg={'asset:/draft.png'} leftTitle={'我的钱包'} rightTitle={'账户余额:￥'+ this.state.myMoney} />
            <MenuCell leftImg={'asset:/like.png'} leftTitle={'抵用券'} rightTitle={'0'} />
          </View>
          <View style={{marginTop: 20}}>
            <MenuCell leftImg={'asset:/card.png'} leftTitle={'积分商城'} />
          </View>
          <View style={{marginTop: 20}}>
            <MenuCell leftImg={'asset:/new_friend.png'} rightImgStyle={{width:24, height: 13}} rightImg={'asset:/me_new.png'} leftTitle={'今日推荐'} />
          </View>
          <View style={{marginTop: 20}}>
            <MenuCell leftImg={'asset:/pay.png'} leftTitle={'我要合作'} rightTitle={'轻松开店，招财进宝'} />
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

export default Mine;
