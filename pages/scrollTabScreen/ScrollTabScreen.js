var ScrollableTabView = require('react-native-scrollable-tab-view');
import React from "react";
import {Button, View, Text, StyleSheet, ScrollView, Image} from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  withNavigationFocus,
} from "react-navigation";
import Swiper from 'react-native-swiper';
import Dialog, {DialogTitle, ScaleAnimation, SlideAnimation, DialogContent,DialogFooter, DialogButton, } from 'react-native-popup-dialog';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class ScrollTabScreen extends React.Component {
  state = {
    visible: false
  }
  render() {
    var sliderImgs = [
      'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
      'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
      'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
    ];
    return (
      <ScrollableTabView>
        <View tabLabel="Test swiper"
              style={{display: 'flex', flex: 1, height: '100%'}}>
          <Swiper loadMinimal={true}
                  bounces={true}>
            <Image style={{width: '100%', height: '100%'}}
                   resizeMode="contain"
                   source={{uri: sliderImgs[0]}}></Image>
            <Image style={{width: '100%', height: '100%'}}
                   resizeMode="cover"
                   source={{uri: sliderImgs[1]}}></Image>
            <Image style={{width: '100%', height: '100%'}}
                   resizeMode="stretch"
                   source={{uri: sliderImgs[2]}}></Image>
            <Image style={{width: '100%', height: '100%'}}
                   resizeMode="center"
                   source={{uri: sliderImgs[2]}}></Image>
            <Image style={{width: '100%', height: '100%'}}
                   resizeMode="repeat"
                   source={{uri: sliderImgs[2]}}></Image>
          </Swiper>
        </View>
        <ScrollView tabLabel="Test dialog">
          <Text> fdasfdasfs</Text>
          <Button
            title="Show Dialog sfdafasdfdasf"
            onPress={() => {
              this.setState({ visible: true });
            }}
          />
          <Dialog
            visible={this.state.visible}
            width={0.8}
            dialogTitle={<DialogTitle title="Dialog 123Title" />}
            onHardwareBackPress={() => {
              this.setState({ visible: false });
            }}
            dialogAnimation={new ScaleAnimation({
              initialValue: 0, // optional
              useNativeDriver: true, // optional
            })}
            footer={
              <DialogFooter>
                <DialogButton
                  text="CANCEL"
                  onPress={() => {}}
                />
                <DialogButton
                  text="OK"
                  onPress={() => {}}
                />
              </DialogFooter>
            }
            onTouchOutside={() => {
              this.setState({ visible: false });
            }}>
            <DialogContent style={{paddingTop: 15}}>
              <Text style={{color: 'green'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fugit odio saepe. Aliquam aspernatur expedita odio. Corporis optio quas quod.
              </Text>
            </DialogContent>
          </Dialog>

        </ScrollView>
        <ScrollView tabLabel="2221">
          <Text>sji</Text>
        </ScrollView>
      </ScrollableTabView>
    )
  }
}
