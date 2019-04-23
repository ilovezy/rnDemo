import React from 'react';
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import Settings from './pages/settings/Settings'

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

const HomeStack = createDrawerNavigator({
  Home: Home,
  Details: Detail,
}, {
  mode: 'modal',
  headerMode: 'float',
  // onTransitionStart(){
  //   alert('hi')
  // },
  // onTransitionEnd(){
  //   alert('fuck')
  // }
});

const SettingsStack = createDrawerNavigator({
  Settings: Settings,
  Details: Detail,
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    ackBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#428bca', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片未选中颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {
        height: 1  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      style: {
        backgroundColor: '#fff', // TabBar 背景色
        // height: 44
      },
      labelStyle: {
        fontSize: 18, // 文字大小
      },
    },
    /* Other configuration remains unchanged */
  }
));
