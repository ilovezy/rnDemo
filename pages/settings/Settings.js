import React from "react";
import {Button, View, Text, TouchableOpacity} from "react-native";
import ImageCropper from 'react-native-image-crop-picker';
import Modal from "react-native-modal";

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }

  openImageCropper = () => {
    ImageCropper.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      alert(JSON.stringify(image))
    });
  }

  openModal = () => {
    this.state({
      isModalVisible: true
    })
  }

  _toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  }

  render() {
    const self = this
    return (
      <View>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}
               onSwipeComplete={() => this.setState({isModalVisible: false})}
               onBackdropPress={() => this.setState({ isModalVisible: false })}
               onBackButtonPress={() => this.setState({ isModalVisible: false })}
               swipeDirection="left">
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text onPress={this._toggleModal}>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* other code from before here */}
        <Text>SettingsScreen SCREEN</Text>
        <Text>Lorem ipsum dolor sit amet, </Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details')}
        />

        <Button
          title="openImageCropper"
          onPress={() => this.openImageCropper()}
        />

        <Button
          color="black"
          title="showModal"
          onPress={() => {
            self.setState({
              isModalVisible: true
            })
          }}
        />
      </View>
    );
  }
}

export default SettingsScreen
