import React, {Component} from 'react';
import {Image} from 'react-native';

class MyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {};
    return (
      <Image style={styles} source={{uri: this.props.imgUrl}} />
    );
  }
}

export default MyImage;
