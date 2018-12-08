import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';
import PlayerControl from './src/components/PlayerControl';

export default class Hello360 extends React.Component {
  render() {
      return (
          <View>
            <PlayerControl/>
          </View>
      );
  }
};

AppRegistry.registerComponent('Hello360', () => Hello360);
