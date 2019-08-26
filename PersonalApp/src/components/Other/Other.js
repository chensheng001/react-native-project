import React, {Component} from 'react';
import {
  View,
  Text,
  Picker,
  Slider,
  ActivityIndicator,
  Modal,
  Image,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import ScreenWidth from '../../model/ScreenWidth';
import DatePicker from 'react-native-datepicker';
import FadeInView from '../common/FadeInView';

class Other extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'ts',
      list: ['java', 'js', 'ts'],
      date: '2019-08-26',
      modalVisible: false,
    };
  }

  componentDidMount(): void {
    //this.makeReq();
  }

  promise1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('promise1执行');
        resolve(1111);
      }, 300);
    });
  }

  promise2() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('promise2执行');
        resolve(22222);
      }, 200);
    });
  }

  promise3(value1, value2) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('promise3执行');
        console.log(value1, value2)
        resolve(33333);
      }, 100);
    });
  }

  makeReq = async () => {
    //1
    /*return this.promise1().then(value1 => {
      return this.promise2().then(value2 => {
        return this.promise3(value1, value2).then(value3 => {
          console.log('done');
        });
      });
    });*/

    //2
    /*return this.promise1()
      .then(value1 => {
        return Promise.all([value1, this.promise2(value1)]);
      })
      .then(([value1, value2]) => {
        return this.promise3(value1, value2).then(value3 => {
          console.log(value3);
        });
      });*/

    //3
    const value1 = await this.promise1();
    const value2 = await this.promise2();
    return this.promise3(value1, value2).then(value3 => {
      console.log(value3);
    });
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const style = {width: 50, height: 50};
    const copy = {...style, opacity: 0.5};
    return (
      <View>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: ScreenWidth}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          {this.state.list.map((item, index) => {
            return <Picker.Item key={index} label={item} value={item} />;
          })}
        </Picker>
        <Slider
          style={{width: ScreenWidth, height: 40}}
          minimumValue={10}
          maximumValue={2000}
          step={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <Text style={{fontSize: 30}}>DatePicker</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          /*显示的格式，calendar and spinner，only Android*/
          androidMode="spinner"
          placeholder="选择日期"
          format="YYYY-MM-DD"
          confirmBtnText="确定"
          cancelBtnText="取消"
          showIcon={true}
          minDate="2018-05-01"
          maxDate="2020-06-01"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 10,
            },
          }}
          locale={'zh_CN'}
          onDateChange={date => {
            this.setState({date: date});
          }}
        />
        <Text>{this.state.date}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>size small：</Text>
          <ActivityIndicator size="small" />
          <Text>size large：</Text>
          <ActivityIndicator size="large" />
        </View>
        <View style={{marginTop: 22}}>
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{height:Dimensions.get('window').height, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
              <View style={{height:250,  width:300, margin:20, backgroundColor:'white'}}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#eee'}}>
                  <Text>Hello World2!</Text>
                </View>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  style={{
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>Show Modal</Text>
          </TouchableOpacity>
        </View>

        <Image source={{uri: 'collect'}} style={{width: 40, height: 40}} />

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FadeInView
            style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
              Fading in
            </Text>
          </FadeInView>
        </View>
      </View>
    );
  }
}
export default Other;
