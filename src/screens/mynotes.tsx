import React, { useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import VideoPlay from "_components/VideoPlayer";
import Button from "_components/button";
import moment from "moment";
import PlayerScreen from "_components/sound";
import ExerciseBottomSheet from "_components/ExerciseBottomSheet";
import AddBSheet from "_components/AddBSheet";
import colors from "../../colors";
const MyNoteTitle = (props: any) => {
  const refRBSheet = useRef();
  console.log("params", props.route.params);
  let propsData = props.route.params;
  console.log(propsData.tags);
  const screen = Dimensions.get("screen");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._header_main}>
        <View style={styles._header_back_main}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="chevron-back" size={25} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles._header_title}>{propsData.name}</Text>
        </View>
        <Text style={styles._date}>
          {" "}
          {moment(propsData.date).format("DD-MM-YYYY")}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._data_main}>
          <View style={styles._tags_main}>
            {propsData.tags.map((value, index) => {
              return (
                <View style={styles._tag} key={index}>
                  <Text style={styles._tag_title}>{value}</Text>
                </View>
              );
            })}
            <TouchableOpacity
              style={styles._add_btn}
              onPress={() => refRBSheet.current.open()}
            >
              <AntDesign name="plus" size={15} color={colors.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles._des}>{propsData.text}</Text>
          {propsData.sounds.length !== 0 ? (
            <View style={styles._audio}>
              <PlayerScreen audioPath={propsData.sounds[0]} />
            </View>
          ) : null}
          {propsData.videos.length !== 0 ? (
            <View style={styles._video}>
              <VideoPlay VideoUrl={propsData.videos[0]} />
            </View>
          ) : null}
          <Button
            btnText="New content"
            clickEvent={() => refRBSheet.current.open()}
          />
        </View>
      </ScrollView>
      <ExerciseBottomSheet refRBSheet={refRBSheet} height={screen.height - 350}>
        <AddBSheet />
      </ExerciseBottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  _header_back_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  _header_title: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "bold",
  },
  _date: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: "400",
    marginRight: 20,
  },
  _data_main: {
    marginHorizontal: 20,
  },
  _tags_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  _tag: {
    backgroundColor: colors.gray,
    height: 24,
    borderRadius: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  _tag_title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
  },
  _add_btn: {
    width: 24,
    height: 24,
    backgroundColor: colors.gray,
    borderRadius: 24 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _des: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.gray,
    marginTop: 20,
  },
  _video: {
    // backgroundColor: "#EB4966",
    height: 100,
    marginTop: 30,
    borderRadius: 10,
    marginBottom: 100,
  },
  _audio: {
    marginTop: 15,
  },
});
export default MyNoteTitle;
