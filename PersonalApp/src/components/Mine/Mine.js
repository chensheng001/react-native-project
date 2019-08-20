import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

class Mine extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>我是Mine</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
  },
});

export default Mine;
