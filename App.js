import React from "react";
import {Button, View, Text, StyleSheet, ScrollView} from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  withNavigationFocus,
} from "react-navigation";
import SplashScreen from 'react-native-splash-screen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator";
import Spinner from 'react-native-loading-spinner-overlay';
import Hyperlink from 'react-native-hyperlink'
import ScrollTabScreen from './pages/scrollTabScreen/ScrollTabScreen'
import ParScreen from './pages/par/ParScreen'
import JPushModule from 'jpush-react-native';
alert(JPushModule)

SplashScreen.hide();

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions, screenProps}) => {
    return {
      title: 'Home',
      pushMsg: '',
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
          title="+12332131"
        />
      ),
    }
  }

  state = {
    count: 0,
    spinner: false
  }

  _increaseCount = () => {
    this.setState({count: this.state.count + 2});
  }

  componentDidMount(): void {
    // 初始化 JPush
    JPushModule.initPush()
    // 获取当前极光开发者信息
    JPushModule.getInfo(map => {
      console.log(map)
    })
    // 点击推送通知回调
    JPushModule.addReceiveOpenNotificationListener(map => {
      console.log('进行一系列操作')
      console.log('map.extra: ' + map)
      // 可执行跳转操作，也可跳转原生页面 关于参数请看文档
      // this.props.navigation.navigate("SecondActivity");
    })
    // 接收推送通知回调
    JPushModule.addReceiveNotificationListener(message => {
      console.log('receive notification: ', message)
    })
  }

  componentWillUnmount(): void {
    console.log('home will unmount')
    // JPushModule.removeReceiveCustomMsgListener();
    // JPushModule.removeReceiveNotificationListener();
  }

  openSpinner = () => {
    this.setState({
      spinner: !this.state.spinner
    });
    setTimeout(() => {
      this.setState({
        spinner: !this.state.spinner
      });
    }, 2000)
  }

  render() {
    console.log(this.props.isFocused)
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Hyperlink
          onPress={(url, text) => alert(url + ", " + text)}
          linkStyle={{color: '#2980b9', fontSize: 20}}
          linkText={url => url === 'https://github.com/obipawan/hyperlink' ? 'Hyperlink' : url}
        >
          <Text style={{fontSize: 15}}>
            Make clickable strings cleaner with https://github.com/obipawan/hyperlink
          </Text>
        </Hyperlink>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>shit</Text>

        <Text>Home Screen 123 12 {this.state.count}</Text>
        <Text>{this.props.isFocused ? 'Focused' : 'Not focused'}</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = (obj) => {
    return {
      title: 'Details',
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
  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
  })
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

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  ScrollTab: ScrollTabScreen,
  ParScreen: ParScreen,
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
      } else if (routeName === 'ScrollTab') {
        iconName = `ios-options`;
      }else if (routeName === 'ScrollTab') {
        iconName = `ios-car`;
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

// const AppContainer = createAppContainer(AppNavigator);
const AppContainer = createAppContainer(TabNavigator);

export default AppContainer

// export default class App extends React.Component {
//   render() {
//     return <AppContainer/>;
//   }
// }
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
