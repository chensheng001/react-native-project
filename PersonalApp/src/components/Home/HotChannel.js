import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MenuCell from '../common/MenuCell';
import fetchApi from '../common/fetchApi';
import HomeCommonCell from './common/HomeCommonCell';
import ScreenWidth from '../../model/ScreenWidth';
import MyImage from '../common/MyImage';

class HotChannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelData: [],
    };
  }

  //请求热点数据
  componentDidMount(): void {
    //请求热点中部
    var url = 'http://49.234.3.245:8002/data/react-native/XMG_Home_D6.json';
    this.getData(url).then(res => {
      this.setState({
        channelData: res.data[0].resource.cateArea,
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

  _renderTop() {
    return (
      <View style={styles.topViewStyle}>
        <HomeCommonCell
          viewHeight={100}
          viewWidth={ScreenWidth / 2 - 5}
          viewBackgroundColor={'#f6f6f6'}
          mainTitle={this.state.channelData[0].mainTitle}
          subTitle={this.state.channelData[0].deputyTitle}
          imgUrl={this.state.channelData[0].entranceImgUrl}
          imgHeight={80}
        />
        <HomeCommonCell
          viewHeight={100}
          viewBackgroundColor={'#f6f6f6'}
          viewWidth={ScreenWidth / 2 - 5}
          mainTitle={this.state.channelData[1].mainTitle}
          subTitle={this.state.channelData[1].deputyTitle}
          imgUrl={this.state.channelData[1].entranceImgUrl}
          imgHeight={80}
        />
      </View>
    );
  }

  _renderBottom() {
    return (
      <View style={styles.bottomViewStyle}>
        {this.state.channelData.slice(2, 6).map((item, key) => {
          return (
            <View key={key} style={styles.bottomItemStyle}>
              <Text style={{fontSize: 16, marginTop: 10}}>{item.mainTitle}</Text>
              <Text style={{fontSize: 12, color: 'gray', marginTop: 5}}>
                {item.deputyTitle}
              </Text>
              <MyImage source={item.entranceImgUrl} style={styles.bottomImgStyle} />
            </View>
          );
        })}
      </View>
    );
  }

  render() {
    return (
      <View style={[styles.container, {marginTop: this.props.gap}]}>
        {/*导航条*/}
        <MenuCell
          leftImg={'asset:/rm.png'}
          leftImgStyle={{width: 30}}
          leftTitle={'热门频道'}
          rightTitle={'查看全部'}
        />
        {/*头部*/}
        {this.state.channelData.length ? this._renderTop() : null}

        {/*底部*/}
        {this.state.channelData.length ? this._renderBottom() : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  topViewStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    paddingBottom: 5,
  },
  bottomViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  bottomItemStyle: {
    width: (ScreenWidth - 15) / 4,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
  },
  bottomImgStyle: {
    width: (ScreenWidth - 15) / 4 - 20,
    borderRadius: 5,
  },
});
export default HotChannel;
