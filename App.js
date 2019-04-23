import React from 'react';
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
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
import Ionicons from 'react-native-vector-icons/FontAwesome5';

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
}, {
  mode: 'modal',
  headerBackTitleVisible: false,
  // headerMode: 'none',
  // onTransitionStart(){
  //   alert('hi')
  // },
  // onTransitionEnd(){
  //   alert('fuck')
  // }
});

const SettingsStack = createStackNavigator({
  Settings: Settings,
  Details: Detail,
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ban`;
        } else if (routeName === 'Settings') {
          iconName = `comments`;
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
