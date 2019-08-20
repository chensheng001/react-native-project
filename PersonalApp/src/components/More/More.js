import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

class More extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>我是More</Text>
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

export default More;
