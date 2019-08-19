import React, {Component} from 'react';
import {View, Text} from 'react-native';
class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailObj: {},
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.navigation.state.params) {
      return {
        detailObj: nextProps.navigation.state.params,
      };
    }
    return null;
  }

  render() {
    return (
      <View>
        <Text>我是详情！</Text>
        <Text>
          {this.state.detailObj.title}
        </Text>
      </View>
    );
  }
}
export default NewsDetail;
