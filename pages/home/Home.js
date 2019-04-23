import React from "react";
import {Button, View, Text} from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome5"

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{padding: 15}}>
        <Text>Home Screen 2312</Text>
        {/* <Icon name="ios-settings" size={15} color="red" />
        <Icon name="ios-settings" size={25} color="yellow" />
        <Icon name="ios-settings" size={35} color="black" />
        <Icon name='md-home' size={30} color='blue'/> */}
        {/* <Icon name={'comments'} size={25} color={'red'} />; */}
        <Button
          title="Go to Details"
          onPress={() => {this.props.navigation.push('Details')}}
        />
      </View>
    );
  }
}

export default HomeScreen
