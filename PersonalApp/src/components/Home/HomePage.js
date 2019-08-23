import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenWidth from '../../model/ScreenWidth';
import HomeMenuSlider from './HomeMenuSlider';
import HomeCommonCell from './common/HomeCommonCell';
import fetchApi from '../common/fetchApi';
import MyImage from '../common/MyImage';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotData: '',
      hotDataMiddle: '',
    };
  }

  static defaultProps = {
    //默认距离顶部间隙
    gap: 15,
  };

  //请求热点数据
  componentDidMount(): void {

    //请求头部
    var url = 'http://49.234.3.245:8002/data/react-native/HomeTopMiddleLeft.json';
    this.getData(url).then(data => {
      this.setState({
        hotData: data,
      });
    });

    //请求中部
    var urlMiddle = 'http://49.234.3.245:8002/data/react-native/HomeTopMiddle.json';
    this.getData(urlMiddle).then(res => {
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

  //头部搜索组件
  _renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        <View style={styles.navBarLeftStyle}>
          <Text style={{color: '#fff'}}>广州</Text>
          <AntDesign style={styles.iconStyle} name={'down'} />
        </View>
        <TextInput
          //指定左侧图片
          inlineImageLeft={'search_icon'}
          inlineImagePadding={10}
          placeholderTextColor={'gray'}
          style={styles.navBarInputStyle}
          placeholder={'请输入.......'}
        />
        <View style={styles.navBarRightStyle}>
          <TouchableOpacity
            onPress={() => {
              alert('alarm');
            }}>
            <Image
              source={{uri: 'asset:/icon_homepage_message.png'}}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('scan');
            }}>
            <Image
              source={{uri: 'asset:/icon_homepage_scan.png'}}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // 热点top
  _renderHotTop() {
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
                  imgHeight={30}
                />
              );
            })}
          </View>
        </View>
      );
    }
  }
  
  //热点中间部分
  _renderHotMiddel() {
    if (this.state.hotDataMiddle) {
      return (
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
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderNavBar()}
        <ScrollView>
          {/*菜单轮播*/}
          <HomeMenuSlider />

          {/*热点top*/}
          {this._renderHotTop()}

          {/*热点middle*/}
          {this._renderHotMiddel()}
        </ScrollView>
      </View>
    );
  };


}

const styles = StyleSheet.create({
  navBarStyle: {
    height: 60,
    backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navBarLeftStyle: {
    flexDirection: 'row',
  },
  navBarInputStyle: {
    width: ScreenWidth * 0.65,
    height: 30,
    fontSize: 16,
    lineHeight: 30,
    borderRadius: 15,
    padding: 0,
    paddingLeft: 5,
    backgroundColor: '#fff',
  },
  navBarRightStyle: {
    flexDirection: 'row',
  },
  iconStyle: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  hotTopViewStyle: {
    flexDirection: 'row',
    height: 120,
  },

  //热点图1
  hotTopLeftViewStyle: {
    width: ScreenWidth / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
});

export default HomePage;
