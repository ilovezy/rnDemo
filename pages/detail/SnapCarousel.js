import React from "react";
import {Button, View, Text} from "react-native";
import Carousel from 'react-native-snap-carousel';
import DropdownAlert from 'react-native-dropdownalert';

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: [{
        title: 'fuck'
      }, {title: 'shit'}]
    }
  }


  componentDidMount() {
    // this.fetchData();
  }

  _renderItem({item, index}) {
    return (
      <View style={{backgroundColor: 'pink', height: 400}}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  fetchData = async () => {
    try {
      await fetch('https://mywebsite.com/endpoint/');
    } catch (error) {
      this.dropdown.alertWithType('error', 'Error', error.message);
    }
  };

  render() {
    return (
      <View>
        <Text>金佛打随机发</Text>
        {/*<Carousel*/}
          {/*ref={(c) => {*/}
            {/*this._carousel = c;*/}
          {/*}}*/}
          {/*data={this.state.entries}*/}
          {/*renderItem={this._renderItem}*/}
          {/*// layout={'default'}*/}
          {/*sliderWidth={400}*/}
          {/*itemWidth={300}*/}
        {/*/>*/}


        {/*<DropdownAlert ref={ref => this.dropdown = ref}/>*/}

      </View>

    );
  }
}

export default SettingsScreen
