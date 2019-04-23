import React from "react";
import {Button, View, Text,Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
import ImagePicker from 'react-native-image-picker';

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'fuck',
      avatarSource: {
        uri: '',
        method: 'POST',
        headers: {
          Pragma: 'no-cache',
        },
        body: 'Your Body goes here',
      },
    }
  }

  openImg(){
    const options = {
      title: 'Select Avatar 哈哈哈',
      customButtons: [{ name: 'fdafdsfdasfas', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    // Launch Camera:
    ImagePicker.launchCamera(options, (response) => {
      // Same code as in above section!
      const source = { uri: response.uri };
      this.setState({
        avatarSource:source,
        title: 'shit',
      });
    });

    // Open Image Library:
    // ImagePicker.launchImageLibrary(options, (response) => {
    //   // Same code as in above section!
    //   const source = { uri: response.uri };
    //   this.setState({
    //     avatarSource:source,
    //     title: 'shit',
    //   });
    // });
    // ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', response);
    //   alert(JSON.stringify(response))
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     const source = { uri: response.uri };
    //
    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //
    //     this.setState({
    //       avatarSource: source,
    //     });
    //   }
    // });
  }

  render() {
    alert(JSON.stringify(this.state.avatarSource, null, 4))
    return (
      <View style={{padding: 15}}>
        <Text>Home Screen 2312</Text>
        <Text>{this.state.title}</Text>
        {
          this.state.avatarSource.uri ?
            <Image
              source={this.state.avatarSource}
              style={{width: '100%', height: 200, overflow: 'hidden', marginBottom: 10}}
            /> : null
        }

         {/*<Icon name="comments" size={25} color='red' />;*/}
        <Button
          title="Open select img"
          color="green"
          onPress={() => {this.openImg()}}
        />
        <Button
          title="Go to Details"
          onPress={() => {this.props.navigation.push('Details')}}
        />
      </View>
    );
  }
}

export default HomeScreen
