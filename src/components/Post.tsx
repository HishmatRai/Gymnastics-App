import React, { useRef, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Entypo from "react-native-vector-icons/dist/Entypo";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import NewContent from "_components/NewContent";
import VideoPlay from "./VideoPlayer";
import Button from "./button";
import moment from "moment";
import { UserData } from "_data";
import ExerciseBottomSheet from "./ExerciseBottomSheet";
import colors from "../../colors";
const Post = (props: any) => {
  const refRBSheet = useRef();
  const screen = Dimensions.get("screen");
  let [cardData, setCardData] = React.useState<string>("");
  let [type, setType] = React.useState<string>("");
  let [currentIndex, setCurrentIndex] = React.useState<number>();
  const [data, setdata] = useState(UserData);
  const [updatedData, setUpdatedData] = useState();
  const udpateData = (PostData: any, images: string, index: number) => {
    data.skillSteps[0].posts[currentIndex] = PostData;
    data.skillSteps[0].posts[currentIndex].photos = images;
    setUpdatedData(PostData);
    console.log("==============>", updatedData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles._heading_counter}>Progress</Text>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled >
        <Button
          btnText="New content"
          clickEvent={() => {
            refRBSheet.current.open(), setType("new");
          }}
        />
        {data.skillSteps[0].posts.map((v, i) => {
          return (
            <View key={i}>
              <View style={styles._card_main}>
                {v.title !== null ? (
                  <View style={styles._card_header_main}>
                    <Text style={styles._card_heading}>{v.title}</Text>
                    <TouchableOpacity>
                      <Entypo
                        name="dots-three-horizontal"
                        size={25}
                        color={colors.gray}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
                <View style={styles._card_header_main}>
                  {v.isPublic === false ? (
                    <Text style={styles._private}>Private</Text>
                  ) : (
                    <Text style={styles._private}>Public</Text>
                  )}
                  <Text style={styles._private}>
                    {moment(v.date).format("MMMM DD, YYYY")}
                  </Text>
                </View>

                {v.videos.length !== 0 ? (
                  <View style={styles._video}>
                    <VideoPlay VideoUrl={v.videos[0]} />
                  </View>
                ) : null}
                <Text style={styles._des}>{v.notes}</Text>
                <TouchableOpacity style={styles._read_more_btn}>
                  <Text style={styles._private}>Read more</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles._setting_btn}
                onPress={() => {
                  refRBSheet.current.open(),
                    setCardData(v),
                    setCurrentIndex(i),
                    setType("edit");
                }}
              >
                <MaterialIcons name="settings" size={20} color={colors.white} />
              </TouchableOpacity>
            </View>
          );
        })}
        <View style={{ marginBottom: 20 }} />
      </ScrollView>
      <ExerciseBottomSheet refRBSheet={refRBSheet} height={screen.height - 80}>
        <NewContent
          cardData={cardData}
          currentIndex={currentIndex}
          type={type}
          refRBSheet={refRBSheet}
          onPress={udpateData}
        />
      </ExerciseBottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _card_main: {
    backgroundColor: colors.secondry,
    borderRadius: 10,
    padding: 20,
    marginRight: 20,
    marginTop: 20,
  },
  _card_header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_heading: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  _private: {
    color: colors.gray,
    fontSize: 11,
    fontWeight: "normal",
  },
  _des: {
    color: colors.gray,
    fontSize: 11,
    fontWeight: "normal",
    marginTop: 5,
  },
  _read_more_btn: {
    marginTop: 5,
  },
  _setting_btn: {
    backgroundColor: colors.gray,
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 30,
    marginTop: -16,
  },
  _video: {
    // backgroundColor: "#EB4966",
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 80,
  },
  _heading_counter: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Post;
