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
    style: {
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
    if (this.props.style.width) {
      width = this.props.style.width;
      height = Math.floor(imgH / (imgW / this.props.style.width));
    }
    if (this.props.style.height) {
      height = this.props.style.height;
      width = Math.floor(imgW / (imgH / this.props.style.height));
    }
    if (this.props.style.width && this.props.style.height) {
      width = this.props.style.width;
      height = this.props.style.height;
    }
    this.setState({
      width: width,
      height: height,
    });
  }

  render() {
    //传递来的样式
    const propStyle = this.props.style;
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
