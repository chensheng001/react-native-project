import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>我是home</Text>
        <AntDesign name={'home'} />
        <Image
          style={{width: 300, height: 200}}
          source={{uri: 'asset:/img_01.png'}}
        />
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
