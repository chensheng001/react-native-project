import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ScreenWidth from '../../model/ScreenWidth';
import HomeCommonCell from './common/HomeCommonCell';
import fetchApi from '../common/fetchApi';

class HomeHotBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotDataBottom: '',
    };
  }

  //请求热点数据
  componentDidMount(): void {
    //请求热点下部分
    var url = 'http://49.234.3.245:8002/data/react-native/HomeHotData.json';
    this.getData(url).then(res => {
      console.log(res)
      this.setState({
        hotDataBottom: res.bottomData,
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

  _renderItem = ({item}) => {
    return (
      <View>
        <HomeCommonCell
          mainTitle={item.title}
          subTitle={item.subTitle}
          imgUrl={'asset:/' + item.hotImage + '.png'}
          mainTitleColor={'green'}
        />
      </View>
    );
  };

  // 绑定唯一key
  _extraUniqueKey(item, index) {
    return 'index' + index + item;
  }

  render() {
    return this.state.hotDataBottom ? (
      <View style={styles.hotBottomViewStyle}>
        <FlatList
          data={this.state.hotDataBottom}
          renderItem={this._renderItem}
          keyExtractor={this._extraUniqueKey}
          horizontal={false}
          numColumns={2}
        />
      </View>
    ) : null;
  }
}
const styles = StyleSheet.create({
  hotBottomViewStyle: {
    flex: 1,
  },
});
export default HomeHotBottom;
