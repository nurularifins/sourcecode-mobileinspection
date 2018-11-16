import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HistoryInspection extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> This is History </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  }
});