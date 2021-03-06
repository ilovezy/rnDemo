import React from "react";
import {Button, View, Text, TouchableOpacity,StyleSheet} from "react-native";
import ImageCropper from 'react-native-image-crop-picker';
import Modal from "react-native-modal";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import DropdownAlert from 'react-native-dropdownalert';

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }
  componentDidMount() {
    // this.fetchData();
  }
  fetchData = async () => {
    alert('fuck')
    try {
      alert('fuck')
      await fetch('https://mywebsite.com/endpoint/');
    } catch (error) {
      this.dropdown.alertWithType('error', 'Error', error.message);
    }
  };

  sayShit = () => {
    this.dropdown.alertWithType('error', 'Error', 'oll shit');
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
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>

        <Text>Show Modal</Text>
        <Modal isVisible={this.state.isModalVisible}
               onSwipeComplete={() => this.setState({isModalVisible: false})}
               onBackdropPress={() => this.setState({isModalVisible: false})}
               onBackButtonPress={() => this.setState({isModalVisible: false})}
               swipeDirection="left">
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text onPress={this._toggleModal}>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details')}
        />

        <Button
          color="green"
          title="openImageCropper"
          onPress={() => this.openImageCropper()}
        />
        <Button
          color="orange"
          title="say Shit"
          onPress={this.sayShit}
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

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => alert("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>


        <DropdownAlert ref={ref => this.dropdown = ref} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
export default SettingsScreen
