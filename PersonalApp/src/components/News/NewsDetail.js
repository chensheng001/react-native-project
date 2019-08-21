import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
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

  /*static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.navigation.state.params) {
      console.log(nextProps.navigation.state.params);
      return {
        detailObj: nextProps.navigation.state.params,
      };
    }
    return null;
  }*/

  componentDidMount(): void {
    if (this.props.navigation.state.params) {
      this.setState({
        detailObj: this.props.navigation.state.params,
      });
      //获取图片高度
      getScreenImageHeight(this.props.navigation.state.params.imgUrl).then(
        height => {
          this.setState({
            displayImgH: height,
          });
        },
      );
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>{this.state.detailObj.title}</Text>
          <Text style={styles.dateStyle}>{this.state.detailObj.date}</Text>
          <Image
            style={[styles.imgStyle, {height: this.state.displayImgH}]}
            source={{uri: this.state.detailObj.imgUrl}}
          />
          {/*<HTML html={this.state.detailObj.detail} containerStyle={htmlStyle} imagesMaxWidth={Dimensions.get('window').width - 30} />*/}
          <Text style={styles.contentStyle}>{this.state.detailObj.detail}</Text>
        </View>
      </ScrollView>
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
