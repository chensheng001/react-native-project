import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from '../common/Carousel';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount(): void {
    var url = 'https://facebook.github.io/react-native/movies.json';
    /*this.getDate(url).then(data => {
      console.log(data);
    });*/
  }

  getDate = url => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(respones => respones.json())
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
          console.error(err);
        });
    });
  }

  render() {
    return <Carousel />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
  },
});

export default News;
