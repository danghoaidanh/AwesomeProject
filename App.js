import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class Greeting extends Component {
  render () {
    return (
    <Text>Hello world!! of {this.props.name}</Text>
    );
  }
}

export default class Bananas extends Component {
  render () {
    let picUrl = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{alignItems: 'center', top:100}}>
        <Image source={picUrl} style={{width: 193, height:110}}/>
      <Greeting name="PHP"></Greeting>
      </View>
      
    );
  }
}