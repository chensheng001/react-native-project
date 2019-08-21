import React, {Component} from 'react';
import {View, Text, StyleSheet, Switch, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class MenuCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }

  // 右侧内容
  _renderRightView() {
    return this.props.isSwitch ? (
      <Switch
        value={this.state.isOn}
        style={{transform: [{scaleX: 1.2}, {scaleY: 1.2}]}}
        onValueChange={() => {
          this.setState({isOn: !this.state.isOn});
        }}
      />
    ) : (
      <View style={styles.rightTextStyle}>
        <Text style={{marginRight: 5, color: '#666'}}>
          {this.props.rightTitle}
        </Text>
        {this.props.rightImg ? (
          <Image source={{uri: this.props.rightImg}} style={this.props.rightImgStyle} />
        ) : null}
        <Icon name={'right'} style={{fontSize: 18, color: '#b3b3b3'}} />
      </View>
    );
  }
  //左侧内容
  _renderLeftView() {
    return (
      <View style={styles.leftTextStyle}>
        {this.props.leftIcon ? (
          <Icon name={this.props.leftIcon} style={styles.iconStyle} />
        ) : null}
        {this.props.leftImg ? (
          <Image source={{uri: this.props.leftImg}} style={styles.imgStyle} />
        ) : null}
        <Text style={styles.textStyle}>{this.props.leftTitle}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderLeftView()}
        {this._renderRightView()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
  },
  iconStyle: {
    fontSize: 20,
    marginRight: 10,
    color: 'orange',
  },
  imgStyle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 10,
  },
  textStyle: {
    fontSize: 14,
    color: '#444',
    fontFamily: 'Helvetica,Arial',
  },
  leftTextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightTextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
MenuCell.defaultProps = {
  title: '默认title',
  isSwitch: false,
};
export default MenuCell;
