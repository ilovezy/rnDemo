import React from "react";
import {Button, View, Text} from "react-native";
import {Navigation} from 'react-native-navigation';
// import HomeScreen from './pages/home/Home'
// import ElementScreen from './pages/element/Element'
import SplashScreen from 'react-native-splash-screen'
import Ionicons from 'react-native-vector-icons/Ionicons';

SplashScreen.hide();

console.log('Navigation: ', Navigation)
class HomeScreen extends React.Component {
  render() {
    // alert(JSON.stringify(this.state.avatarSource, null, 4))
    return (
      <View style={{padding: 15}}>
        <Text>home screen</Text>
      </View>
    );
  }
}
class ElementScreen extends React.Component {
  render() {
    // alert(JSON.stringify(this.state.avatarSource, null, 4))
    return (
      <View style={{padding: 15}}>
        <Text>ElementScreen screen</Text>
      </View>
    );
  }
}

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => HomeScreen);
  Navigation.registerComponent(`navigation.playground.ElementScreen`, () => ElementScreen);

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
          stack: {
            children: [{
              component: {
                name: 'navigation.playground.WelcomeScreen',
                passProps: {
                  text: 'This is tab 1'
                }
              }
            }],
            options: {
              bottomTab: {
                text: 'Tab 1',
                // icon: require('../images/one.png'),
                testID: 'FIRST_TAB_BAR_BUTTON'
              }
            }
          }
        },
          {
            component: {
              name: 'navigation.playground.ElementScreen',
              passProps: {
                text: 'This is tab 2'
              },
              options: {
                bottomTab: {
                  text: 'Tab 2',
                  // icon: require('../images/two.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON'
                }
              }
            }
          }]
      }
    }
  });
});
