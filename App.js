import React from 'react';
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import SnapCarousel from './pages/detail/SnapCarousel'
import Settings from './pages/settings/Settings'
import {
  Text
} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen'
setTimeout(() => {
  SplashScreen.hide();
}, 2000)


const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home12312',
      headerStyle: {
        backgroundColor: '#f4511e',
        // alignSelf: 'center'
      },
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: `to A`,
      // headerBackTitle: 'fucmk u',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
}, {
  // mode: 'modal',
  // headerBackTitleVisible: false,
});

const SettingsStack = createStackNavigator({
  Settings: Settings,
});
const OtherStack = createStackNavigator({
  Details: {
    screen: Detail,
    navigationOptions: () => ({
      title: 'Detail32132231',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerBackTitle: 'mark',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
  SnapCarousel: {
    screen: SnapCarousel,
    navigationOptions: () => ({
      title: 'SnapCarousel',
      headerStyle: {
        backgroundColor: '#428bca',
      },
      headerBackTitle: 'mark',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
})

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
    Other: OtherStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-basket`;
        } else if (routeName === 'Settings') {
          iconName = `md-color-fill`;
        } else if (routeName === 'Other') {
          iconName = `md-desktop`;
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#428bca',
      inactiveTintColor: '#aaa',
    },
  }
));
