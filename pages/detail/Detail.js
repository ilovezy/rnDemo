import React from "react";
import {Button, View, Text} from "react-native";

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={{ backgroundColor: '#428bca',flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details! </Text>
      </View>
    );
  }
}

export default DetailsScreen
