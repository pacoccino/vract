import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-360';
const {VideoModule} = NativeModules;

export default class PlayerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
  }

  switchPlay() {
    return (e) => {
      const inputEvent = e.nativeEvent.inputEvent;
      if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {
        if(this.state.playing) {
          VideoModule.pause('myplayer');
          this.setState({
            playing: false,
          });
        } else {
          VideoModule.resume('myplayer');
          this.setState({
            playing: true,
          });
        }
      }
    }
  }

  reset() {
    return (e) => {
      const inputEvent = e.nativeEvent.inputEvent;
      if (inputEvent.action === 'down' && inputEvent.buttonClass === 'confirm') {

        VideoModule.seek('myplayer', 0);

      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button} onInput={this.switchPlay()}>
          <Text style={styles.buttonText}>
            {this.state.playing ? 'Stop' : 'Play'}
          </Text>
        </View>
        <View style={styles.button} onInput={this.reset()}>
          <Text style={styles.buttonText}>
            Reset
          </Text>
        </View>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    // Fill the entire surface
    marginTop: 2000,
    width: 1000,
    height: 600,
    backgroundColor: '#f0f0f000',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    padding: 20,
    backgroundColor: '#b4b4b440',
    borderColor: '#639ddaF0',
    borderWidth: 1,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});

AppRegistry.registerComponent('PlayerControl', () => PlayerControl);
