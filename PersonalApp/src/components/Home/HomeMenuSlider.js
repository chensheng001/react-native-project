import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import ScreenWidth from '../../model/ScreenWidth';
import fetchApi from '../common/fetchApi';
import MyImage from '../common/MyImage';

class HomeMenuSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      menuList: [],
    };
  }
  //颜色标记
  static defaultProps = {
    menuList: [],
  };

  //请求菜单数据
  componentDidMount(): void {
    this.getMenuList();
  }

  getMenuList() {
    const url = 'http://49.234.3.245:8002/data/react-native/TopMenu.json';
    fetchApi(url)
      .then(res => {
        this.setState({
          menuList: res.data,
        });
      })
      .catch(err => {
        console.log(err);

      });
  }

  //轮播组件
  _renderSlider() {
    return (
      <View style={styles.sliderViewStyle}>
        {this.state.menuList.map((item, index) => {
          return (
            <View key={index} style={styles.sliderItemStyle}>
              {this._renderMenuItem(item)}
            </View>
          );
        })}
      </View>
    );
  }

  _renderMenuItem(item) {
    return item.map((it, index) => {
      return (
        <View key={index} style={styles.sliderItemCellStyle}>
          <MyImage source={'asset:/' + it.image + '.png'} style={{width: 50, borderRadius: 25}} />
          <Text>{it.title}</Text>
        </View>
      );
    });
  }

  //滑动结束设置当前索引
  scrollEndDone = e => {
    const activePage = Math.round(e.nativeEvent.contentOffset.x / ScreenWidth);
    this.setState({
      currentPage: activePage,
    });
  };
  // 分页
  _renderIndicator() {
    return (
      <View style={styles.pageViewStyle}>
        {this.state.menuList.map((item, index) => {
          return (
            <Text style={[styles.pageItemStyle, {color: this.state.currentPage === index ? 'orange' : '#333'}]} key={index}>
              &bull;
            </Text>
          );
        })}
      </View>
    );
  }
  //渲染一次数据
  _renderData() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.scrollEndDone}
          pagingEnabled={true}>
          {this._renderSlider()}
        </ScrollView>
        {/*分页*/}
        {this._renderIndicator()}
      </View>
    );
  }
  render() {
    return this.state.menuList.length ? this._renderData() : null;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 200,
  },
  sliderViewStyle: {
    flexDirection: 'row',
  },
  sliderItemStyle: {
    width: ScreenWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sliderItemCellStyle: {
    width: ScreenWidth / 5,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageViewStyle: {
    height: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageItemStyle: {
    fontSize: 40,
    color: '#333',
  },
});
export default HomeMenuSlider;
