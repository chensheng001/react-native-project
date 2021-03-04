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
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Carousel from '../common/Carousel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          "title":"莫雷：哈登是比迈克尔-乔丹更出色的得分手",
          "detail":"北京时间8月19日，据ESPN报道，火箭总经理莫雷在接受采访时提出了一个大胆的观点，在莫雷看来，詹姆斯-哈登是比迈克尔-乔丹更出色的得分手。在说出此话时，莫雷也意识到了，人们可能会不太喜欢他的观点，于是他决定用数据说话：“我们从这个角度衡量：把球权给一个球员，看他能为球队创造多少得分。从这点来说，哈登是历史第一的。”",
          "date":"2019-08-19 09:29:48",
          "commentCount":"1587",
          "imgUrl":"http://www.haowen108.com/haowen_imgs/personal/rn/150498983.jpg"
        },
        {
          "title":"琼斯：期待重返NBA 盼能助力火箭竞逐总冠军",
          "detail":"北京时间8月19日，火箭总经理达里尔-莫雷近日参加播客节目时透露，球队会考虑引进旧将特伦斯-琼斯，而琼斯也表示自己盼能重返NBA并助力火箭竞逐总冠军。",
          "date":"2019-08-19 10:09",
          "commentCount":"1587",
          "imgUrl":"http://www.haowen108.com/haowen_imgs/personal/rn/150498726.jpg"
        },
        {
          "title":"诺克斯：多兰是个很好的人 安东尼仍旧出色",
          "detail":"北京时间8月19日，尼克斯老板詹姆斯-多兰向来备受争议，球队连年沉沦摆烂更是将他推向舆论的风口浪尖，但球队的年轻球员凯文-诺克斯仍然力挺老板。",
          "date":"2019-08-19 10:09",
          "commentCount":"1587",
          "imgUrl":"http://www.haowen108.com/haowen_imgs/personal/rn/150498990.jpg"
        },
        {
          "title":"巴恩斯：有听到质疑 重要的是延续历届水准",
          "detail":"北京时间8月18日，《印第安纳星报》消息，步行者队夏天发生巨大的变化。赛迪斯-杨去了公牛，博格达诺维奇加盟爵士，约瑟夫投奔国王，科里森则选择退役。据球队后卫奥拉迪波透露，自己仍跟这些前队友保持着联系。",
          "date":"2019-08-19 10:09",
          "commentCount":"1587",
          "imgUrl":"http://www.haowen108.com/haowen_imgs/personal/rn/150498244.jpg"
        },
      ],
      refreshing: false,
    };
  }

  componentDidMount(): void {
    var url = 'http://www.haowen108.com/haowen_imgs/personal/data/news.json';
    /*this.getData(url).then(data => {
      this.setState({
        list: data.data,
      });
    });*/
  }

  // 查询新闻列表
  getData = url => {
    return new Promise((resolve, reject) => {
      fetch(url + '?' + new Date().getTime())
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

  //下拉刷新
  _onRefresh() {
    this.setState({refreshing: true});
    var url = 'http://www.haowen108.com/haowen_imgs/personal/data/news.json';
    this.getData(url).then(data => {
      this.setState({
        list: data.data,
      });
    });
  }

  render() {
    return this.state.list.length ? (
      <View>
        <ScrollView style={styles.container}>
          <Carousel imgDatas={this.state.list} />
          <View style={styles.listStyle}>
            <FlatList
              refreshControl={
                <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
              }
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
    ) : (
      <ActivityIndicator size="large" />
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
