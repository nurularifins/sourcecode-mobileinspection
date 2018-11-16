import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView } from 'react-native';

import Colors from '../../Constant/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import CardView from 'react-native-cardview';

export default class MoreScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.tintColor
    },
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontSize: 18,
      fontWeight: '400',
      marginHorizontal: 12,
    },
    title: 'Lainnya',
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity onPress={() => alert('Underconstruc')}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: 12 }}>
          <Image style={{ width: 28, height: 28 }} source={require('../../Images/icon/ic_inbox.png')} />
        </View>
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => alert('This is a button!')}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 12 }}>
          <Image style={{ width: 28, height: 28 }} source={require('../../Images/icon/ic_sync.png')} />
        </View>
      </TouchableOpacity>
    )
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ padding: 6 }} >
          <View style={styles.marginCard}>
            <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={10}>
              <View style={styles.sectionCardView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                  <Image style={{ height: 40, width: 40, borderRadius: 50, marginLeft: 24, marginRight: 16 }} source={require('../../Images/icon/menu/ic_profile_menu.png')}></Image>
                  <Text style={styles.textTitle}>Profile</Text>
                </View>
                <View style={{ marginRight: 24 }}>
                  <Icon size={32} name='ios-arrow-round-forward' color='grey' />
                </View>
              </View>
            </CardView>
          </View>

          <View style={styles.marginCard}>
            <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={10}>
              <View style={styles.sectionCardView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                  <Image style={{ height: 40, width: 40, borderRadius: 50, marginLeft: 24, marginRight: 16 }} source={require('../../Images/icon/menu/ic_games_menu.png')}></Image>
                  <Text style={styles.textTitle}>Games</Text>
                </View>
                <View style={{ marginRight: 24 }}>
                  <Icon size={32} name='ios-arrow-round-forward' color='grey' />
                </View>
              </View>
            </CardView>
          </View>

          <View style={styles.marginCard}>
            <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={10}>
              <View style={styles.sectionCardView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                  <Image style={{ height: 40, width: 40, borderRadius: 50, marginLeft: 24, marginRight: 16 }} source={require('../../Images/icon/menu/ic_ranking_menu.png')}></Image>
                  <Text style={styles.textTitle}>Ranking</Text>
                </View>
                <View style={{ marginRight: 24 }}>
                  <Icon size={32} name='ios-arrow-round-forward' color='grey' />
                </View>
              </View>
            </CardView>
          </View>

          <View style={styles.marginCard}>
            <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={10}>
              <View style={styles.sectionCardView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                  <Image style={{ height: 40, width: 40, borderRadius: 50, marginLeft: 24, marginRight: 16 }} source={require('../../Images/icon/menu/ic_minidashboard_menu.png')}></Image>
                  <Text style={styles.textTitle}>Mini Dashboard</Text>
                </View>
                <View style={{ marginRight: 24 }}>
                  <Icon size={32} name='ios-arrow-round-forward' color='grey' />
                </View>
              </View>
            </CardView>
          </View>

          <View style={styles.marginCard}>
            <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={10}>
              <View style={styles.sectionCardView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                  <Image style={{ height: 40, width: 40, borderRadius: 50, marginLeft: 24, marginRight: 16 }} source={require('../../Images/icon/menu/ic_help_menu.png')}></Image>
                  <Text style={styles.textTitle}>Help</Text>
                </View>
                <View style={{ marginRight: 24 }}>
                  <Icon size={32} name='ios-arrow-round-forward' color='grey' />
                </View>
              </View>
            </CardView>
          </View>

          <View style={styles.marginCard}>
            <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={10}>
              <View style={styles.sectionCardView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                  <Image style={{ height: 40, width: 40, borderRadius: 50, marginLeft: 24, marginRight: 16 }} source={require('../../Images/icon/menu/ic_contactcenter_menu.png')}></Image>
                  <Text style={styles.textTitle}>Contact Center</Text>
                </View>
                <View style={{ marginRight: 24 }}>
                  <Icon size={32} name='ios-arrow-round-forward' color='grey' />
                </View>
              </View>
            </CardView>
          </View>

          <View style={styles.marginCard}>
            <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={10}>
              <View style={styles.sectionCardView}>
                <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }} >
                  <Image style={{ height: 40, width: 40, borderRadius: 50, marginLeft: 24, marginRight: 16 }} source={require('../../Images/icon/menu/ic_signout_menu.png')}></Image>
                  <Text style={styles.textTitle}>Sign Out</Text>
                </View>
                <View style={{ backgroundColor: 'white', paddingRight: 24 }}>
                  <Icon size={32} name='ios-arrow-round-forward' color='grey' />
                </View>
              </View>
            </CardView>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 4,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    flex: 1
  },
  sectionCardView: {
    alignItems: 'stretch',
    height: 64,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textTitle: {
    fontSize: 18
  },
  marginCard: {
    marginTop: 12
  }
});