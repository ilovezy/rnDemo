import React from "react";
import {Button, View, Text,Image,StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import ImagePicker from 'react-native-image-picker';
import SplashScreen from 'react-native-splash-screen'
import * as Progress from 'react-native-progress';

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
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
  }

  openSplashScreen(){
    SplashScreen.show()
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000)
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
    // alert(JSON.stringify(this.state.avatarSource, null, 4))
    return (
      <View style={{padding: 15}}>
        <Progress.Bar progress={0.3} width={200} />
        <Progress.Pie progress={0.4} size={50} />
        <Progress.Circle size={30} indeterminate={true} />
        <Progress.CircleSnail color={['red', 'green', 'blue']} />

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

        <Button
          color='purple'
          title="splash screen"
          onPress={() => {this.openSplashScreen()}}
        />

        <Button
          title="Go to Details"
          color="pink"
          onPress={() => {this.props.navigation.push('SnapCarousel')}}
        />
      </View>
    );
  }
}

export default HomeScreen
