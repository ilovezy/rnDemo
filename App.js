import React from "react";
import {Button, View, Text} from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  withNavigationFocus,
} from "react-navigation";
import SplashScreen from 'react-native-splash-screen'
import Ionicons from 'react-native-vector-icons/Ionicons';

setTimeout(() => {
  SplashScreen.hide();
}, 1000)

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions, screenProps}) => {
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: 'blue',
        fontWeight: 'bold',
      },
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+123"
        />
      ),
    }
  }

  state = {
    count: 0,
  }

  _increaseCount = () => {
    this.setState({count: this.state.count + 2});
  }

  componentDidMount(): void {
    console.log('home mount')
    this.props.navigation.setParams({increaseCount: this._increaseCount})
  }

  componentWillUnmount(): void {
    console.log('home will unmount')
  }

  willFocus() {
    console.log('home willFocus')
  }

  didFocus() {
    console.log('home didFocus')
  }

  willBlur() {
    console.log('home willBlur')
  }

  didBlur() {
    console.log('home didBlur')
  }

  render() {
    console.log(this.props.isFocused)
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Home Screen 123 12 {this.state.count}</Text>
        <Text>{this.props.isFocused ? 'Focused' : 'Not focused'}</Text>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Details fasf见覅OA 非机动阿双方均到事发地奥房间爱哦覅大是否按ofID静安寺房价大幅',
  // }
  static navigationOptions = (obj) => {
    console.log('Details obj', obj)
    // console.log(navigation, navigationOptions, screenProps)

    return {
      title: 'Details',
      // headerStyle: {
      //   backgroundColor: 'black',
      // },
      // headerTintColor: 'red',
      // headerTitleStyle: {
      //   color: 'blue',
      //   fontWeight: 'bold',
      // },
    }
  }

  componentDidMount(): void {
    console.log('detail mount')
  }

  componentWillUnmount(): void {
    console.log('detail will unmount')
  }

  render() {
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Details Screen 12323</Text>
        <Text>{itemId}</Text>
        <Text>{otherParam}</Text>
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
        <View style={{height: 15}}></View>

        <Button
          title="navigate to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <View style={{height: 15}}></View>

        <Button
          title="Push to Details... again"
          onPress={() => this.props.navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })}
        />

        <View style={{height: 15}}></View>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={{height: 15}}></View>
        <Button
          title="Pop to top"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: withNavigationFocus(HomeScreen)
  },
  Details: DetailsScreen
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

class IconWithBadge extends React.Component {
  render() {
    const {name, badgeCount, color, size} = this.props;
    return (
      <View style={{width: 24, height: 24, margin: 5}}>
        <Ionicons name={name}
                  size={size}
                  color={color}/>
        {badgeCount > 0 && (
          <View style={{
            // If you're using react-native < 0.57 overflow outside of the parent
            // will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>{badgeCount}</Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = (props) => {
  // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3}/>;
}

const TabNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,

}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        IconComponent = HomeIconWithBadge;
      } else if (routeName === 'Details') {
        iconName = `ios-options`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName}
                            size={25}
                            color={tintColor}/>;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer

// export default class App extends React.Component {
//   render() {
//     return <AppContainer/>;
//   }
// }
