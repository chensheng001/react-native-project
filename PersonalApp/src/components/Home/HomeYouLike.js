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

class HomeYouLike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }

  //请求热点数据
  componentDidMount(): void {
    //请求热点中部
    var url = 'http://49.234.3.245:8002/data/react-native/XMG_Home_D5.json';
    this.getData(url).then(res => {
      this.setState({
        listData: res.data,
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

  render() {
    return (
      <View style={[styles.container, {marginTop: this.props.gap}]}>
        <MenuCell
          leftTitle={'猜你喜欢'}
          leftImg={'asset:/cnxh.png'}
          leftImgStyle={{width: 30}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({

});
export default HomeYouLike;
