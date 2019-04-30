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

export default class ScrollTabScreen extends React.Component {
  render() {
    var sliderImgs = [
      'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
      'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
      'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
    ];
    return (
      <ScrollableTabView>
        <View tabLabel="React"
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
        <ScrollView tabLabel="fads"><Text>
          ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at, atque
          blanditiis debitis dolore eligendi eveniet facere inventore maiores natus nobis officia quidem quos saepe
          soluta totam velit. A accusantium autem consectetur, consequuntur ducimus ea, eveniet explicabo fugiat in
          ipsum itaque laboriosam laborum laudantium minus molestiae necessitatibus odit optio tempora ullam vel? Amet
          at aut blanditiis commodi dignissimos doloremque ea enim eveniet excepturi expedita facere fuga harum hic illo
          illum, in ipsam iusto libero magni minus modi mollitia nam natus, numquam odio odit provident quidem
          recusandae saepe sint, soluta sunt tempora totam ut vel velit voluptate? Aliquid dolore dolores eius quia unde
          veritatis voluptatem? Adipisci aliquid, beatae blanditiis consequatur cumque distinctio, et facilis, non
          obcaecati quae sapiente sequi tenetur ut velit voluptate voluptatem voluptatibus! A accusantium amet commodi
          dignissimos ducimus eligendi, impedit, in molestias nostrum quod recusandae reprehenderit rerum sint voluptas
          voluptates! Accusantium animi doloremque eos eum ex explicabo facilis, fuga in magnam, minus mollitia nemo
          neque nihil ratione totam? Assumenda distinctio earum eveniet iusto labore officia optio pariatur quae quos
          ratione! Amet architecto consequatur ducimus harum nobis optio quasi quia repellat suscipit, ullam. Accusamus
          accusantium alias amet aperiam at aut autem consequuntur, cupiditate distinctio dolor doloremque ea eaque esse
          eveniet excepturi expedita fugit id ipsum iure laboriosam maiores minus molestias natus nesciunt odio odit
          officiis, omnis pariatur perspiciatis praesentium quasi qui recusandae repellat! A ab, aspernatur dolore
          necessitatibus nostrum sit ullam voluptas? Aliquam ex expedita iure laudantium officiis possimus provident
          recusandae ut veniam vero. Expedita, iusto voluptatibus. Adipisci aliquam amet atque aut delectus dolorum est
          ex excepturi explicabo facere illo illum ipsa, ipsam nam nisi nostrum obcaecati odio optio pariatur
          perspiciatis provident quas qui quos ratione reiciendis repellendus reprehenderit sapiente sint, sunt tenetur
          vel veniam vitae voluptatibus! Adipisci id incidunt maxime odio? Error iste maxime perferendis porro qui
          suscipit.</Text></ScrollView>
        <ScrollView tabLabel="2221"><Text>321321</Text></ScrollView>
      </ScrollableTabView>
    )
  }
}
