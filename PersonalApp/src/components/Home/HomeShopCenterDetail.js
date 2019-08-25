import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

class HomeShopCenterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: '',
    };
  }

  componentDidMount(): void {
    this.setState({
      params: this.props.navigation.state.params.detailData
    });
  }

  renderNode(node, index, siblings, parent, defaultRenderer) {
    if (node.name == 'iframe') {
      return null;
    }
  }

  render() {
    let url = null;
    if (this.state.params.detailurl) {
      url = this.state.params.detailurl.replace(
        'imeituan://www.meituan.com/web/?url=',
        '',
      );
    }
    return (
      <View style={styles.container}>
        <WebView source={{uri: url}} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
export default HomeShopCenterDetail;
