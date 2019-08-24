import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MenuCell from '../common/MenuCell';

class HomeShopCenter extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={[styles.container, {marginTop: this.props.gap}]}>
        <MenuCell
          leftTitle={'购物中心'}
          leftImg={'asset:/gwzx.png'}
          leftImgStyle={{width: 30}}
          rightTitle={'全部4家'}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
});
export default HomeShopCenter;
