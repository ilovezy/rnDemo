import React from "react";
import {Button, View, Text, StyleSheet} from "react-native";
import LottieView from 'lottie-react-native';
import { Countdown } from 'react-native-countdown-text';

var styles = StyleSheet.create({
  webview_style:{
    backgroundColor:'#00ff00',
  }
});
class LottiePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      batteryLevel: '', // 电池电量
      isCharging: false, // 是否在充电
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <View>
        <Text>batteryLevel: {this.state.batteryLevel}</Text>
        <Text>isCharging: {this.state.isCharging}</Text>
        <Countdown finishTime={1556175177903} />
      </View>
    );
  }
}

export default LottiePage
