import React from "react";
import {Button, View, Text} from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
      // alignSelf: 'center'
    },
    headerBackTitle: 'fucmk u',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    mode: 'card'
  };

  render() {
    return (
      <View style={{padding: 15}}>
        <Text>Home Screen 2312</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}

export default HomeScreen
