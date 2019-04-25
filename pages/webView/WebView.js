import React from "react";
import {Button, View, Text, StyleSheet} from "react-native";
import { WebView } from 'react-native-webview';
var DEFAULT_URL = 'https://www.baidu.com';
var styles = StyleSheet.create({
  webview_style:{
    backgroundColor:'#00ff00',
  }
});
class WebViewPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    // WebView必须是作为根节点
    return (
        <WebView source={{uri: DEFAULT_URL}}>
        </WebView>
    );
  }
}

export default WebViewPage
