import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import MenuCell from '../common/MenuCell';
import fetchApi from '../common/fetchApi';
import MyImage from '../common/MyImage';
import ScreenWidth from '../../model/ScreenWidth';

class HomeShopCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: [],
    };
  }

  //请求热点数据
  componentDidMount(): void {
    //请求热点中部
    var url = 'http://49.234.3.245:8002/data/react-native/XMG_Home_D5.json';
    this.getData(url).then(res => {
      this.setState({
        shopData: res.data,
      });
    });
  }

  getData(url) {
    return new Promise((resolve, reject) => {
      fetchApi(url)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          alert('数据没请求到');
        });
    });
  }

  //跳转详情
  getDetail = data => {
    this.props.navigation.navigate('HomeShopCenterDetail', {detailData: data});
  };

  render() {
    return (
      <View style={[styles.container, {marginTop: this.props.gap}]}>
        <MenuCell
          leftTitle={'购物中心'}
          leftImg={'asset:/gwzx.png'}
          leftImgStyle={{width: 30}}
          rightTitle={'全部4家'}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            {this.state.shopData.map((item, key) => {
              return (
                <View key={key} style={styles.scrollItemView}>
                  <TouchableOpacity onPress={() => {this.getDetail(item)}}>
                    <MyImage source={item.img} style={styles.imgItemStyle} />
                  </TouchableOpacity>
                  <Text>{item.name}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
  },
  scrollItemView: {
    width: ScreenWidth / 3 - 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  imgItemStyle: {
    width: ScreenWidth / 3 - 30,
    marginBottom: 5,
    borderRadius: 5,
  },
});
export default HomeShopCenter;
