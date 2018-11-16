import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icons from 'react-native-vector-icons/FontAwesome5'
import Colors from '../../Constant/Colors'

import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import PropTypes from 'prop-types';

export default class ListFinding extends Component {
  
  constructor(props) {
    super(props);
  }

  clickHandler = () => {

    //function to handle click on floating Action Button
    // Alert.alert('Floating Button Clicked');
    this.props.navigation.push('BuatInspeksi');
  };

  render() {
    return (
        <ActionButton buttonColor={Colors.tintColor} onPress={() => this.props.navigation.push('BuatInspeksi')}></ActionButton>
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