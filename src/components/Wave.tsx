import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SoundCloudWaveform from "react-native-soundcloud-waveform";

const styles = StyleSheet.create({
  container: {
  },
});

type Props = {};
export default class Wave extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SoundCloudWaveform
          waveformUrl="https://w1.sndcdn.com/PP3Eb34ToNki_m.png"
          active="#fff"
          activeInverse="#FF1844"
          activePlayable="#2bbbad"
          activePlayableInverse="#ffc107"
          inactive="#c775858f"
          inactiveInverse="#ffffff61"
          setTime={this.props.setTime}
          percentPlayed={this.props.position / this.props.duration}
          width={260}
          height={30}
        />
      </View>
    );
  }
}
