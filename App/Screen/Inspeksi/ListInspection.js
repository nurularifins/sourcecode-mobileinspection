import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';
import Colors from '../../Constant/Colors'
import { NavigationActions, StackActions  } from 'react-navigation';
import PropTypes from 'prop-types';

export default class ListInspection extends Component {


  constructor(props) {
    super(props);
  }

  clickHandler = () => {

    //function to handle click on floating Action Button
    // Alert.alert('Floating Button Clicked');
    this.props.navigation.navigate('BuatInspeksi');
    console.log(this.props.navigation);
  };

  navigateScreen(screenName) {
    const navigation = this.props.navigation;
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: screenName })],
    });
    const pushAction = StackActions.push({
      routeName: screenName,
      params: {
        myUserId: 9,
      },
    });
    navigation.dispatch(pushAction);
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ActionButton buttonColor={Colors.tintColor} onPress={() => {this.navigateScreen('BuatInspeksi')}}></ActionButton>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  ActionButtonStyle: {
    color: Colors.tintColor,
    backgroundColor: Colors.tintColor
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});
