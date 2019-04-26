import React from "react";
import {ActivityIndicator,Alert,AlertIOS,Clipboard, ActionSheetIOS, Modal, StyleSheet, TouchableHighlight,Button, View, Text, DatePickerIOS, Linking } from "react-native";
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
  async _getContent() {
    var content = await Clipboard.getString();
  }

  openAlert = () => {
    Clipboard.setString('hello world');

    let str = this._getContent()
    console.log(str)
    // Alert.alert(
    //   'Alert Title',
    //   'My Alert Msg',
    //   [
    //     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: 'OK', onPress: () => console.log('OK Pressed')},
    //   ],
    //   { cancelable: false }
    // )

    AlertIOS.alert(
      'Sync Complete',
    );
    // ActionSheetIOS.showActionSheetWithOptions({
    //     options: ['取消', '删除'],
    //     destructiveButtonIndex: 1,
    //     cancelButtonIndex: 0,
    //   },
    //   (buttonIndex) => {
    //     if (buttonIndex === 1) { /* 当接收到的索引为1，即点击了删除按钮时，执行对应操作 */ }
    //   });
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
        <Button onPress={this.openAlert} title='openAlert'></Button>
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
