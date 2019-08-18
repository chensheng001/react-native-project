import React, {Component} from 'react';
import {View, Text, StyleSheet, SectionList, Image} from 'react-native';

class AddressBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionListDatas: {
        data: [
          {
            data: [
              {
                icon: 'asset:/m_180_100.png',
                name: 'AC Schnitzer'
              },
              {
                icon: 'asset:/m_92_100.png',
                name: '阿尔法·罗密欧'
              },
              {
                icon: 'asset:/m_9_100.png',
                name: '奥迪'
              },
              {
                icon: 'asset:/m_97_100.png',
                name: '阿斯顿·马丁'
              }
            ],
            title: 'A'
          },
          {
            data: [
              {
                icon: 'asset:/m_172_100.png',
                name: '巴博斯'
              },
              {
                icon: 'asset:/m_157_100.png',
                name: '宝骏'
              },
              {
                icon: 'asset:/m_3_100.png',
                name: '宝马'
              },
              {
                icon: 'asset:/m_82_100.png',
                name: '保时捷'
              },
              {
                icon: 'asset:/m_163_100.png',
                name: '北京汽车'
              },
              {
                icon: 'asset:/m_211_100.png',
                name: '北汽幻速'
              },
              {
                icon: 'asset:/m_168_100.png',
                name: '北汽威旺'
              },
              {
                icon: 'asset:/m_14_100.png',
                name: '北汽制造'
              },
              {
                icon: 'asset:/m_2_100.png',
                name: '奔驰'
              },
              {
                icon: 'asset:/m_59_100.png',
                name: '奔腾'
              },
              {
                icon: 'asset:/m_26_100.png',
                name: '本田'
              },
              {
                icon: 'asset:/m_5_100.png',
                name: '标致'
              },
              {
                icon: 'asset:/m_127_100.png',
                name: '别克'
              },
              {
                icon: 'asset:/m_85_100.png',
                name: '宾利'
              },
              {
                icon: 'asset:/m_15_100.png',
                name: '比亚迪'
              },
              {
                icon: 'asset:/m_135_100.png',
                name: '布加迪'
              }
            ],
            title: 'B'
          },
          {
            data: [
              {
                icon: 'asset:/m_129_100.png',
                name: '昌河'
              }
            ],
            title: 'C'
          },
          {
            data: [
              {
                icon: 'asset:/m_113_100.png',
                name: '道奇'
              },
              {
                icon: 'asset:/m_165_100.png',
                name: '大通'
              },
              {
                icon: 'asset:/m_8_100.png',
                name: '大众'
              },
              {
                icon: 'asset:/m_27_100.png',
                name: '东风'
              },
              {
                icon: 'asset:/m_197_100.png',
                name: '东风风度'
              },
              {
                icon: 'asset:/m_141_100.png',
                name: '东风风神'
              },
              {
                icon: 'asset:/m_115_100.png',
                name: '东风风行'
              },
              {
                icon: 'asset:/m_205_100.png',
                name: '东风小康'
              },
              {
                icon: 'asset:/m_29_100.png',
                name: '东南'
              },
              {
                icon: 'asset:/m_179_100.png',
                name: 'DS'
              }
            ],
            title: 'D'
          },
          {
            data: [
              {
                icon: 'asset:/m_91_100.png',
                name: '法拉利'
              },
              {
                icon: 'asset:/m_199_100.png',
                name: '飞驰商务车'
              },
              {
                icon: 'asset:/m_164_100.png',
                name: '菲斯克'
              },
              {
                icon: 'asset:/m_40_100.png',
                name: '菲亚特'
              },
              {
                icon: 'asset:/m_7_100.png',
                name: '丰田'
              },
              {
                icon: 'asset:/m_67_100.png',
                name: '福迪'
              },
              {
                icon: 'asset:/m_190_100.png',
                name: '弗那萨利'
              },
              {
                icon: 'asset:/m_208_100.png',
                name: '福汽启腾'
              },
              {
                icon: 'asset:/m_17_100.png',
                name: '福特'
              },
              {
                icon: 'asset:/m_128_100.png',
                name: '福田'
              }
            ],
            title: 'F'
          },
          {
            data: [
              {
                icon: 'asset:/m_109_100.png',
                name: 'GMC'
              },
              {
                icon: 'asset:/m_110_100.png',
                name: '光冈'
              },
              {
                icon: 'asset:/m_147_100.png',
                name: '广汽'
              },
              {
                icon: 'asset:/m_63_100.png',
                name: '广汽吉奥'
              },
              {
                icon: 'asset:/m_133_100.png',
                name: '广汽日野'
              },
              {
                icon: 'asset:/m_182_100.png',
                name: '观致汽车'
              }
            ],
            title: 'G'
          },
          {
            data: [
              {
                icon: 'asset:/m_31_100.png',
                name: '哈飞'
              },
              {
                icon: 'asset:/m_196_100.png',
                name: '哈弗'
              },
              {
                icon: 'asset:/m_170_100.png',
                name: '海格'
              },
              {
                icon: 'asset:/m_32_100.png',
                name: '海马'
              },
              {
                icon: 'asset:/m_149_100.png',
                name: '海马商用车'
              },
              {
                icon: 'asset:/m_181_100.png',
                name: '恒天汽车'
              },
              {
                icon: 'asset:/m_58_100.png',
                name: '红旗'
              },
              {
                icon: 'asset:/m_52_100.png',
                name: '黄海'
              },
              {
                icon: 'asset:/m_112_100.png',
                name: '华泰'
              },
              {
                icon: 'asset:/m_45_100.png',
                name: '汇众'
              }
            ],
            title: 'H'
          },
          {
            data: [
              {
                icon: 'asset:/m_35_100.png',
                name: '江淮'
              },
              {
                icon: 'asset:/m_37_100.png',
                name: '江铃'
              },
              {
                icon: 'asset:/m_38_100.png',
                name: '江南'
              },
              {
                icon: 'asset:/m_98_100.png',
                name: '捷豹'
              },
              {
                icon: 'asset:/m_143_100.png',
                name: '吉利帝豪'
              },
              {
                icon: 'asset:/m_144_100.png',
                name: '吉利全球鹰'
              },
              {
                icon: 'asset:/m_148_100.png',
                name: '吉利英伦'
              },
              {
                icon: 'asset:/m_39_100.png',
                name: '金杯'
              },
              {
                icon: 'asset:/m_57_100.png',
                name: '金龙联合'
              },
              {
                icon: 'asset:/m_161_100.png',
                name: '金旅客车'
              },
              {
                icon: 'asset:/m_152_100.png',
                name: '九龙'
              },
              {
                icon: 'asset:/m_4_100.png',
                name: 'Jeep'
              }
            ],
            title: 'J'
          },
          {
            data: [
              {
                icon: 'asset:/m_188_100.png',
                name: '卡尔森'
              },
              {
                icon: 'asset:/m_107_100.png',
                name: '凯迪拉克'
              },
              {
                icon: 'asset:/m_150_100.png',
                name: '开瑞'
              },
              {
                icon: 'asset:/m_51_100.png',
                name: '克莱斯勒'
              },
              {
                icon: 'asset:/m_145_100.png',
                name: '科尼塞克'
              },
              {
                icon: 'asset:/m_212_100.png',
                name: 'KTM'
              }
            ],
            title: 'K'
          },
          {
            data: [
              {
                icon: 'asset:/m_86_100.png',
                name: '兰博基尼'
              },
              {
                icon: 'asset:/m_200_100.png',
                name: '蓝海房车'
              },
              {
                icon: 'asset:/m_80_100.png',
                name: '劳斯莱斯'
              },
              {
                icon: 'asset:/m_94_100.png',
                name: '雷克萨斯'
              },
              {
                icon: 'asset:/m_99_100.png',
                name: '雷诺'
              },
              {
                icon: 'asset:/m_146_100.png',
                name: '莲花'
              },
              {
                icon: 'asset:/m_153_100.png',
                name: '猎豹汽车'
              },
              {
                icon: 'asset:/m_76_100.png',
                name: '力帆'
              },
              {
                icon: 'asset:/m_16_100.png',
                name: '铃木'
              },
              {
                icon: 'asset:/m_166_100.png',
                name: '理念'
              },
              {
                icon: 'asset:/m_95_100.png',
                name: '林肯'
              },
              {
                icon: 'asset:/m_36_100.png',
                name: '陆风'
              },
              {
                icon: 'asset:/m_96_100.png',
                name: '路虎'
              },
              {
                icon: 'asset:/m_83_100.png',
                name: '路特斯'
              }
            ],
            title: 'L'
          },
          {
            data: [
              {
                icon: 'asset:/m_183_100.png',
                name: '迈凯伦'
              },
              {
                icon: 'asset:/m_93_100.png',
                name: '玛莎拉蒂'
              },
              {
                icon: 'asset:/m_18_100.png',
                name: '马自达'
              },
              {
                icon: 'asset:/m_79_100.png',
                name: 'MG'
              },
              {
                icon: 'asset:/m_81_100.png',
                name: 'MINI'
              },
              {
                icon: 'asset:/m_201_100.png',
                name: '摩根'
              }
            ],
            title: 'M'
          },
          {
            data: [
              {
                icon: 'asset:/m_155_100.png',
                name: '纳智捷'
              }
            ],
            title: 'N'
          },
          {
            data: [
              {
                icon: 'asset:/m_104_100.png',
                name: '欧宝'
              },
              {
                icon: 'asset:/m_84_100.png',
                name: '讴歌'
              },
              {
                icon: 'asset:/m_171_100.png',
                name: '欧朗'
              }
            ],
            title: 'O'
          },
          {
            data: [
              {
                icon: 'asset:/m_156_100.png',
                name: '启辰'
              },
              {
                icon: 'asset:/m_43_100.png',
                name: '庆铃'
              },
              {
                icon: 'asset:/m_42_100.png',
                name: '奇瑞'
              },
              {
                icon: 'asset:/m_28_100.png',
                name: '起亚'
              }
            ],
            title: 'Q'
          },
          {
            data: [
              {
                icon: 'asset:/m_30_100.png',
                name: '日产'
              },
              {
                icon: 'asset:/m_78_100.png',
                name: '荣威'
              },
              {
                icon: 'asset:/m_142_100.png',
                name: '瑞麒'
              }
            ],
            title: 'R'
          },
          {
            data: [
              {
                icon: 'asset:/m_25_100.png',
                name: '三菱'
              },
              {
                icon: 'asset:/m_209_100.png',
                name: '山姆'
              },
              {
                icon: 'asset:/m_195_100.png',
                name: '绅宝'
              },
              {
                icon: 'asset:/m_50_100.png',
                name: '双环'
              },
              {
                icon: 'asset:/m_102_100.png',
                name: '双龙'
              },
              {
                icon: 'asset:/m_111_100.png',
                name: '斯巴鲁'
              },
              {
                icon: 'asset:/m_10_100.png',
                name: '斯柯达'
              },
              {
                icon: 'asset:/m_89_100.png',
                name: 'smart'
              }
            ],
            title: 'S'
          },
          {
            data: [
              {
                icon: 'asset:/m_202_100.png',
                name: '泰卡特'
              },
              {
                icon: 'asset:/m_189_100.png',
                name: '特斯拉'
              }
            ],
            title: 'T'
          },
          {
            data: [
              {
                icon: 'asset:/m_140_100.png',
                name: '威麟'
              },
              {
                icon: 'asset:/m_186_100.png',
                name: '威兹曼'
              },
              {
                icon: 'asset:/m_19_100.png',
                name: '沃尔沃'
              },
              {
                icon: 'asset:/m_48_100.png',
                name: '五菱'
              }
            ],
            title: 'W'
          },
          {
            data: [
              {
                icon: 'asset:/m_13_100.png',
                name: '现代'
              },
              {
                icon: 'asset:/m_174_100.png',
                name: '星客特'
              },
              {
                icon: 'asset:/m_71_100.png',
                name: '新凯'
              },
              {
                icon: 'asset:/m_87_100.png',
                name: '西雅特'
              },
              {
                icon: 'asset:/m_49_100.png',
                name: '雪佛兰'
              },
              {
                icon: 'asset:/m_6_100.png',
                name: '雪铁龙'
              }
            ],
            title: 'X'
          },
          {
            data: [
              {
                icon: 'asset:/m_194_100.png',
                name: '扬州亚星客车'
              },
              {
                icon: 'asset:/m_138_100.png',
                name: '野马汽车'
              },
              {
                icon: 'asset:/m_100_100.png',
                name: '英菲尼迪'
              },
              {
                icon: 'asset:/m_53_100.png',
                name: '一汽'
              },
              {
                icon: 'asset:/m_41_100.png',
                name: '依维柯'
              },
              {
                icon: 'asset:/m_75_100.png',
                name: '永源'
              }
            ],
            title: 'Y'
          },
          {
            data: [
              {
                icon: 'asset:/m_136_100.png',
                name: '长安轿车'
              },
              {
                icon: 'asset:/m_159_100.png',
                name: '长安商用'
              },
              {
                icon: 'asset:/m_21_100.png',
                name: '长城'
              },
              {
                icon: 'asset:/m_203_100.png',
                name: '之诺'
              },
              {
                icon: 'asset:/m_60_100.png',
                name: '中华'
              },
              {
                icon: 'asset:/m_167_100.png',
                name: '中欧'
              },
              {
                icon: 'asset:/m_77_100.png',
                name: '众泰'
              },
              {
                icon: 'asset:/m_204_100.png',
                name: '中通客车'
              },
              {
                icon: 'asset:/m_33_100.png',
                name: '中兴'
              }
            ],
            title: 'Z',
          },
        ],
      },
    };
  }

  _renderItem = ({item}) => (
    <View style={styles.itemViewStyle}>
      <Image style={styles.carStyle} source={{uri: item.icon}} />
      <View style={styles.carTextStyle}>
        <Text style={styles.carTitle}>{item.name}</Text>
        <Text style={styles.carDes}>
          售价： <Text style={styles.price}>$200,000,000,000</Text>
        </Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.sectionListDatas.data}
          renderItem={this._renderItem}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          stickySectionHeadersEnabled={true}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#ddd',
  },
  itemViewStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  carStyle: {
    width: 80,
    height: 80,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  carTextStyle: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
  carTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  carDes: {
    marginTop: 20,
  },
  price: {
    fontSize: 18,
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default AddressBook;
