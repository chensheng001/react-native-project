import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HomeMenuSlider from './HomeMenuSlider';
import HomeNavBar from './HomeNavBar';
import HomeHotTop from './HomeHotTop';
import HomeHotMiddle from './HomeHotMiddle';
import HomeHotBottom from './HomeHotBottom';
import HomeShopCenter from './HomeShopCenter';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    //默认距离顶部间隙
    gap: 15,
  };

  render() {
    return (
      <View style={styles.container}>
        {/*头部导航*/}
        <HomeNavBar />
        <ScrollView>
          {/*菜单轮播*/}
          <HomeMenuSlider />

          {/*热点top*/}
          <HomeHotTop gap={this.props.gap} />

          {/*热点middle*/}
          <HomeHotMiddle gap={this.props.gap} />
          <HomeHotBottom />

          {/*购物中心*/}
          <HomeShopCenter gap={this.props.gap} />
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
});

export default HomePage;
