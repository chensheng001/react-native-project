import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenWidth from '../../model/ScreenWidth';
import MyImage from '../common/MyImage';
import HomeCommonCell from './common/HomeCommonCell';
import fetchApi from '../common/fetchApi';

class HomeHotTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotData: '',
    };
  }

  //请求热点数据
  componentDidMount(): void {
    //请求热点头部
    var url = 'http://49.234.3.245:8002/data/react-native/HomeTopMiddleLeft.json';
    this.getData(url).then(data => {
      this.setState({
        hotData: data,
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
    if (this.state.hotData) {
      const leftData = this.state.hotData.dataLeft[0];
      return (
        <View style={[{marginTop: this.props.gap}, styles.hotTopViewStyle]}>
          <View style={styles.hotTopLeftViewStyle}>
            <MyImage source={'asset:/' + leftData.img1 + '.png'} style={{height: 30}} />
            <MyImage source={'asset:/' + leftData.img2 + '.png'} style={{height: 35}}/>
            <Text style={{color: 'gray'}}>{leftData.title}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#00c1e0'}}>{leftData.price}</Text>
              <Text style={{backgroundColor: 'yellow', color: 'orange', borderRadius: 5, marginLeft: 2, fontSize: 12}}>{leftData.sale}</Text>
            </View>
          </View>
          <View>
            {this.state.hotData.dataRight.map((item, key) => {
              return (
                <HomeCommonCell
                  key={key}
                  mainTitle={item.title}
                  mainTitleColor={item.titleColor}
                  subTitle={item.subTitle}
                  imgUrl={'asset:/' + item.rightImage + '.png'}
                  imgHeight={40}
                />
              );
            })}
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}
const styles = StyleSheet.create({
  //热点图1
  hotTopLeftViewStyle: {
    width: ScreenWidth / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#f6f6f6',
  },
  hotTopViewStyle: {
    flexDirection: 'row',
    height: 120,
  },
});
export default HomeHotTop;
