import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import AppContainer from './AppContainer';
class Launcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarting: true,
    };
  }
  componentDidMount(): void {
    setTimeout(() => {
      this.setState({
        isStarting: false,
      });
    }, 3000);
  }

  render() {
    return this.state.isStarting ? (
      <View style={styles.container}>
        <Image
          source={{uri: 'asset:/app_launcher.jpg'}}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
      </View>
    ) : (
      <AppContainer />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
export default Launcher;
