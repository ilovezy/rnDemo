import React from "react";
import {ActivityIndicator, Modal, StyleSheet, TouchableHighlight,Button, View, Text, DatePickerIOS } from "react-native";
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
  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
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
