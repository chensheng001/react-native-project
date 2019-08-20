import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';
import Carousel from '../common/Carousel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount(): void {
    var url = 'http://49.234.3.245:8002/data/react-native/news.json?' + new Date().getTime();
    this.getData(url).then(data => {
      this.setState({
        list: data.data,
      });
    });
  }

  // 查询新闻列表
  getData = url => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(respones => {
          return respones.json();
        })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
          console.error(err);
        });
    });
  };

  // 查询新闻详情
  _getDetail = item => {
    this.props.navigation.navigate('NewsDetail', item);
  };

  _renderItem = ({item}) => (
    <TouchableHighlight onPress={() => {this._getDetail(item)}}>
      <View style={styles.imgItemStyle}>
        <Image style={styles.imgStyle} source={{uri: item.imgUrl}} />
        <View>
          <Text style={styles.textStyle}>{item.title}</Text>
          <View style={styles.textBottomStyle}>
            <Text style={{color: '#777', fontSize: 18}}>{item.date}</Text>
            <Text style={{color: '#777'}}>
              <FontAwesome style={styles.commentIconStyle} name={'commenting'} />
              {item.commentCount}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  // 绑定唯一key
  _extraUniqueKey(item, index) {
    return 'index' + index + item;
  }

  // 分割线
  _separator() {
    return <View style={{height: 1, backgroundColor: '#999999'}} />;
  }

  //空布局
  _createEmptyView() {
    return (
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 16}}>暂无列表数据，下啦刷新</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.container}>
          <Carousel imgDatas={this.state.list} />
          <View style={styles.listStyle}>
            <FlatList
              data={this.state.list}
              // 空布局
              ListEmptyComponent={this._createEmptyView}
              keyExtractor={this._extraUniqueKey}
              // 分割线 ItemSeparatorComponent={this._separator}
              renderItem={this._renderItem}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
  },
  listStyle: {
    marginTop: 20,
  },
  imgItemStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  textStyle: {
    fontSize: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width - 130,
  },
  textBottomStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 130,
    position: 'absolute',
    bottom: 0,
  },
  commentIconStyle: {
    color: '#6f7c84',
    fontSize: 18,
  },
});

export default News;
