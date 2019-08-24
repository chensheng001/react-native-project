import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWidth from '../../model/ScreenWidth';
import HomeCommonCell from './common/HomeCommonCell';
import fetchApi from '../common/fetchApi';

class HomeHotMiddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotDataMiddle: '',
    };
  }

  //请求热点数据
  componentDidMount(): void {
    //请求热点中部
    var url = 'http://49.234.3.245:8002/data/react-native/HomeTopMiddle.json';
    this.getData(url).then(res => {
      this.setState({
        hotDataMiddle: res.data[0],
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
    return this.state.hotDataMiddle ? (
      <View style={[{marginTop: this.props.gap}, styles.hotMiddleViewStyle]}>
        <HomeCommonCell
          viewWidth={ScreenWidth}
          viewHeight={80}
          mainTitle={this.state.hotDataMiddle.title}
          mainTitleColor={'orange'}
          subTitle={this.state.hotDataMiddle.subTitle}
          imgUrl={'asset:/' + this.state.hotDataMiddle.image + '.png'}
          imgHeight={70}
        />
      </View>
    ) : null;
  }
}
const styles = StyleSheet.create({
  hotMiddleViewStyle: {},
});
export default HomeHotMiddle;
