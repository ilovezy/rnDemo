import React from "react";
import {Button, View, Text} from "react-native";
import Carousel from 'react-native-snap-carousel';

class SettingsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      entries: [{
        title: 'fuck'
      }, {title: 'shit'}]
    }
  }
  _renderItem ({item, index}) {
    return (
      <View style={{backgroundColor: 'pink', height: 400}}>
        <Text >{ item.title }</Text>
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        // layout={'default'}
        sliderWidth={400}
        itemWidth={300}
      />
    );
  }
}
export default SettingsScreen
