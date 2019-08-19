import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HTMLView from 'react-native-htmlview';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlData: `<div><h1>我是h1</h1><a href="http://www.baidu.com">我是a标签</a></div>`,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>我是home</Text>
        <AntDesign name={'home'} />
        <Image
          style={{width: 300, height: 200}}
          source={{uri: 'asset:/img_01.png'}}
        />
        <HTMLView value={this.state.htmlData} stylesheet={styles} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 100,
  },
});

export default HomePage;
