import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Picker,
  Slider
} from 'react-native';
import MenuCell from '../common/MenuCell';

class HomeYouLike extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
