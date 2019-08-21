import React, {Component} from 'react';
import {Image, Platform} from 'react-native';

class MyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }
  //设置默认图片大小
  static defaultProps = {
    imgStyle: {
      width: 30,
      height: 30,
    },
  };

  getSize(imgUrl) {
    if (Platform.OS !== 'ios') {
      Image.getSize(imgUrl, (w, h) => {
        this.dealSize(w, h);
      });
    }
  }

  dealSize(imgW, imgH) {
    let width, height;
    if (this.props.imgStyle.width) {
      width = this.props.imgStyle.width;
      height = Math.floor(imgH / (imgW / this.props.imgStyle.width));
    }
    if (this.props.imgStyle.height) {
      height = this.props.imgStyle.height;
      width = Math.floor(imgW / (imgH / this.props.imgStyle.height));
    }
    if (this.props.imgStyle.width && this.props.imgStyle.height) {
      width = this.props.imgStyle.width;
      height = this.props.imgStyle.height;
    }
    this.setState({
      width: width,
      height: height,
    });
  }

  render() {
    //传递来的样式
    const propStyle = this.props.imgStyle;
    //计算出的图片宽高
    const calcStyle = {
      width: this.state.width,
      height: this.state.height,
    };
    const finalStyle = {};
    //综合要展示的样式
    Object.assign(finalStyle, propStyle, calcStyle);
    return (
      <Image
        style={finalStyle}
        source={{uri: this.props.source}}
        onLoadStart={() => {
          this.getSize(this.props.source);
        }}
      />
    );
  }
}

export default MyImage;
