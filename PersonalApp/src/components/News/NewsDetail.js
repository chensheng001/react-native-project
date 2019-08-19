import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ScreenWidth from '../../model/ScreenWidth';
import getScreenImageHeight from '../../model/GetScreenImageHeight';
class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailObj: {},
      displayImgH: 0,
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

  componentDidMount(): void {
    // console.log(this.props.navigation.state.params)
    if (this.state.detailObj.imgUrl) {
      getScreenImageHeight(this.state.detailObj.imgUrl).then(height => {
        this.setState({
          displayImgH: height,
        });
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{this.state.detailObj.title}</Text>
        <Text style={styles.dateStyle}>{this.state.detailObj.date}</Text>
        <Image
          style={[styles.imgStyle, {height: this.state.displayImgH}]}
          source={{uri: this.state.detailObj.imgUrl}}
        />
        <Text style={styles.contentStyle}>
          &emsp;&emsp;{this.state.detailObj.detail}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  titleStyle: {
    fontSize: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  dateStyle: {
    fontSize: 15,
    color: '#6f7c84',
    marginBottom: 10,
    marginTop: 10,
  },
  imgStyle: {
    width: ScreenWidth - 30,
  },
  contentStyle: {
    fontSize: 16,
    lineHeight: 25,
    marginTop: 15,
  },
  a: {
    color: '#00c0e1',
  },
});
export default NewsDetail;
