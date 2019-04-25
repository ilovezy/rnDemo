import React from "react";
import {ActivityIndicator, Modal, StyleSheet, TouchableHighlight,Button, View, Text, DatePickerIOS, Linking } from "react-native";
import LottieView from 'lottie-react-native';
import { Countdown } from 'react-native-countdown-text';

class LottiePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      batteryLevel: '', // 电池电量
      isCharging: false, // 是否在充电
      chosenDate: new Date(),
      modalVisible: false

    }
  }

  componentDidMount() {

  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  setDate = (newDate) => {
    this.setState({chosenDate: newDate})
  }

  sayFuck = () => {
    // debugger
    // console.log('fuck')
    Linking.openURL('tel:10086') // 打电话
  }
  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Button onPress={this.sayFuck} title='say fuck'></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

export default LottiePage
