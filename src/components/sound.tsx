import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import TrackPlayer, { useProgress } from "react-native-track-player";
import { timeInMinutesAndSeconds } from "./timeInMinutesAndSeconds";
const img_pause = require("./../images/ui_pause.png");
const img_play = require("./../images/ui_play.png");
const audio_play = require("./../audio/Sunspots.mp3");
import Wave from "./Wave";
import colors from "../../colors";
const Sound = (props: any) => {
  let [sountStatus, setSoundStatus] = React.useState<string>("Playing");
  const progress = useProgress();
  const play = () => {
    setSoundStatus("Push");
    TrackPlayer.add({
      url: audio_play,
    }).then(() => {
      TrackPlayer.play();
    });
  };
  const setTrackTime = async (value: number) => {
    await TrackPlayer.seekTo((progress.duration / 100) * value);
  };
  const stop = () => {
    setSoundStatus("Playing");
    TrackPlayer.stop();
  };
  console.log(sountStatus);
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        {sountStatus === "Playing" ? (
          <TouchableOpacity onPress={() => play()} style={styles._play_btn}>
            <Image source={img_play} style={{ width: 15, height: 15 }} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => stop()} style={styles._play_btn}>
            <Image source={img_pause} style={{ width: 15, height: 15 }} />
          </TouchableOpacity>
        )}
        <Text style={styles._duration}>
          {timeInMinutesAndSeconds(progress.position)}
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Wave
          position={progress.position}
          duration={progress.duration}
          setTime={setTrackTime}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  _play_btn: {
    backgroundColor: colors.gray,
    width: 33,
    height: 33,
    borderRadius: 33 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  _duration: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default Sound;
