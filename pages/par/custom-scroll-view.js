import React from "react";
import {Button, View, Text, StyleSheet, ScrollView, Image,Animated} from "react-native";

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
      <ScrollView>
        <Text>fdsafdsafdsa dfLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at excepturi illo magnam modi nostrum officiis omnis optio quisquam?</Text>
      </ScrollView>
    )
  }
}
