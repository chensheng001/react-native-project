import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MenuCell from '../common/MenuCell';
import MyImage from '../common/MyImage';
import ScreenWidth from '../../model/ScreenWidth';
import Icon from 'react-native-vector-icons/AntDesign';

class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myMoney: '100,000',
    };
  }

  //渲染头部
  _renderHeaderView() {
    return (
      <View style={styles.headerViewStyle}>
        <MyImage source={'asset:/see.png'} imgStyle={styles.headerImgStyle} />
        <View style={styles.headerRightStyle}>
          <Text style={styles.headerTextStyle}>他来了他来了</Text>
          <Icon name={'right'} style={{fontSize: 18, color: '#fff'}} />
        </View>
        {this._renderHeaderBottomview()}
      </View>
    );
  }

  //渲染头部底部栏
  _renderHeaderBottomview() {
    const data = [
      {text: '霸王餐', number: 5},
      {text: '评价', number: 1099},
      {text: '收藏', number: 101},
    ];
    return (
      <View style={styles.headerBottomViewStyle}>
        {data.map((item, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                alert('点击霸王餐');
              }}>
              <View
                style={[
                  styles.headerBottomItemStyle,
                  {borderRightWidth: key === data.length - 1 ? 0 : 1},
                ]}>
                <Text style={styles.headerBottomTextStyle}>{item.number}</Text>
                <Text style={styles.headerBottomTextStyle}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  // 渲染我的订单
  _renderMyOrderView() {
    const data = [
      {imgUrl: 'asset:/order1.png', text: '待付款'},
      {imgUrl: 'asset:/order2.png', text: '待使用'},
      {imgUrl: 'asset:/order3.png', text: '待评价'},
      {imgUrl: 'asset:/order4.png', text: '退款/售后'},
    ];
    const itemArr = [];
    // 方法一
    return (
      <View style={styles.myOrderViewStyle}>
        {data.map((item, key) => {
          return (
            <View key={key} style={styles.myOrderItemStyle}>
              <MyImage source={item.imgUrl} imgStyle={{width: 30}} />
              <Text style={styles.myOrderTextStyle}>{item.text}</Text>
            </View>
          );
        })}
      </View>
    );
    //方法二
    /*data.map((item, key) => {
      itemArr.push(
        <View key={key} style={styles.myOrderItemStyle}>
          <MyImage source={item.imgUrl} imgStyle={{width: 30}} />
          <Text style={styles.myOrderTextStyle}>{item.text}</Text>
        </View>,
      );
    });
    return itemArr;*/
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this._renderHeaderView()}
          <View style={{marginTop: 20}}>
            <MenuCell leftImg={'asset:/collect.png'} leftImgStyle={styles.leftImgStyle} leftTitle={'我的订单'} rightTitle={'查看全部订单'} />
            {this._renderMyOrderView()}
          </View>
          <View style={{marginTop: 20}}>
            <MenuCell leftImg={'asset:/draft.png'} leftImgStyle={styles.leftImgStyle} leftTitle={'我的钱包'} rightTitle={'账户余额:￥'+ this.state.myMoney} />
            <MenuCell leftImg={'asset:/like.png'} leftImgStyle={styles.leftImgStyle} leftTitle={'抵用券'} rightTitle={'0'} />
          </View>
          <View style={{marginTop: 20}}>
            <MenuCell leftImg={'asset:/card.png'} leftImgStyle={styles.leftImgStyle} leftTitle={'积分商城'} />
          </View>
          <View style={{marginTop: 20}}>
            <MenuCell leftImg={'asset:/new_friend.png'} leftImgStyle={styles.leftImgStyle} rightImgStyle={{width:30}} rightImg={'asset:/me_new.png'} leftTitle={'今日推荐'} />
          </View>
          <View style={{marginTop: 20}}>
            <MenuCell leftImg={'asset:/pay.png'} leftImgStyle={styles.leftImgStyle} leftTitle={'我要合作'} rightTitle={'轻松开店，招财进宝'} />
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
  },
  headerViewStyle: {
    height: 180,
    backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
  headerImgStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerTextStyle: {
    fontSize: 20,
    color: '#fff',
  },
  headerRightStyle: {
    flex: 1,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerBottomViewStyle: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: ScreenWidth,
  },
  headerBottomItemStyle: {
    height: 40,
    width: ScreenWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.5)',
  },
  headerBottomTextStyle: {
    color: '#fff',
  },
  myOrderViewStyle: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
  },
  myOrderItemStyle: {
    width: ScreenWidth / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myOrderTextStyle: {
    color: '#666',
  },
  leftImgStyle: {
    width: 26,
    borderRadius: 13,
    marginRight: 10,
  },
});

export default Mine;
