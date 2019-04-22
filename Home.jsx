import React from "react";
import {Button, View, Text} from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Home Screen 12321 w</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details', {
            itemId: 86,
            otherParam: 'anything you want here shi 2t',
          })}
        />
      </View>
    );
  }
}

export default HomeScreen
