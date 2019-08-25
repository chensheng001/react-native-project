import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyImage from '../../common/MyImage';
import ScreenWidth from '../../../model/ScreenWidth';
class HomeCommonCell extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    viewBackgroundColor: '#fff',
    viewWidth: ScreenWidth / 2,
    viewHeight: 60,
    mainTitleColor: 'orange',
    mainTitleFontSize: 16,
    imgHeight: 35,
    imgBorderRadius: 0,
  };

  render() {
    const _inputStyle = {
      container: {
        height: this.props.viewHeight,
        width: this.props.viewWidth,
        backgroundColor: this.props.viewBackgroundColor,
      },
      mainTitleStyle: {
        color: this.props.mainTitleColor,
        fontSize: this.props.mainTitleFontSize,
      },
      imgStyle: {
        height: this.props.imgHeight,
        borderRadius: this.props.imgBorderRadius,
      },
    };

    return (
      <View style={[styles.container, _inputStyle.container]}>
        <View style={styles.cellViewStyle}>
          <Text style={_inputStyle.mainTitleStyle}>{this.props.mainTitle}</Text>
          <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
        </View>
        <MyImage source={this.props.imgUrl} style={_inputStyle.imgStyle} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: '#f6f6f6',
    borderRightColor: '#f6f6f6',
  },
  cellViewStyle: {
    justifyContent: 'flex-start',
  },
  subTitleStyle: {
    color: 'gray',
    fontSize: 12,
    marginTop: 5,
  },
});
export default HomeCommonCell;
