import React, { useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Feather from "react-native-vector-icons/dist/Feather";
import { UserData } from "_data";
import moment from "moment";
import PlayerScreen from "_components/sound";
import AddBSheet from "_components/AddBSheet";
import ExerciseBottomSheet from "_components/ExerciseBottomSheet";
import colors from "../../colors";
const MyNotes = (props: any) => {
  const [tags, setTags] = React.useState("Tag1");
  const screen = Dimensions.get("screen");
  const refRBSheet = useRef();
  const [serchData, setSearchData] = React.useState<string>("");
  const [searchInputShow, setSearchInputShow] = React.useState<boolean>(true);
  const [keyboardFocus, setKeyboardFocus] = React.useState<boolean>(true);
  let onFocus = () => {
    setKeyboardFocus(true);
    setSearchInputShow(false);
  };
  let onBlur = () => {
    setKeyboardFocus(false);
    setSearchInputShow(true);
    setSearchData("");
  };
  return (
    <SafeAreaView style={styles.container}>
      {searchInputShow ? (
        <>
          <View style={styles._header_main}>
            <Text style={styles._heading}>My Notes</Text>
            <TouchableOpacity onPress={() => setSearchInputShow(false)}>
              <Ionicons name="search-sharp" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles._tags_main}>
            <TouchableOpacity
              style={tags === "Tag1" ? styles._active_tag : styles._tag}
              onPress={() => setTags("Tag1")}
            >
              <Text
                style={
                  tags === "Tag1" ? styles._active_tag_title : styles._tag_title
                }
              >
                Tag
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tags === "Tag2" ? styles._active_tag : styles._tag}
              onPress={() => setTags("Tag2")}
            >
              <Text
                style={
                  tags === "Tag2" ? styles._active_tag_title : styles._tag_title
                }
              >
                Tag2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tags === "Tag3" ? styles._active_tag : styles._tag}
              onPress={() => setTags("Tag3")}
            >
              <Text
                style={
                  tags === "Tag3" ? styles._active_tag_title : styles._tag_title
                }
              >
                Tag3
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {UserData.notes.map((v, i) => {
              return (
                <View style={styles._card_main} key={i}>
                  <View style={styles._card_header_main}>
                    <Text style={styles._card_heading}>{v.name}</Text>
                    <Text style={styles._private}>
                      {moment(v.date).format("DD-MM-YYYY")}
                    </Text>
                  </View>
                  <View style={styles._card_tag_main}>
                    {v.tags.length !== 0 &&
                      v.tags.map((tag, tagIndex) => {
                        return (
                          <View style={styles._card_tag} key={tagIndex}>
                            <Text style={styles._card_tag_title}>{tag}</Text>
                          </View>
                        );
                      })}
                  </View>
                  {v.sounds.length === 0 ? null : (
                    <View style={styles._sound}>
                      <PlayerScreen audioPath={v.sounds[0]} />
                    </View>
                  )}
                  <Text style={styles._des}>{v.text}</Text>
                  <TouchableOpacity
                    style={styles._details_btn}
                    onPress={() => props.navigation.navigate("MyNoteTitle", v)}
                  >
                    <Text style={styles._details_btn_text}>Details</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
            <View style={{ marginBottom: 20 }} />
          </ScrollView>
          <TouchableOpacity
            style={styles._add_btn}
            onPress={() => refRBSheet.current.open()}
          >
            <Feather name="plus" size={25} color={colors.white} />
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles._search_main}>
          <TextInput
            placeholder="Search"
            value={serchData}
            onChangeText={(serchData) => setSearchData(serchData)}
            style={styles._input}
            underlineColor={colors.white}
            placeholderTextColor={colors.white}
            autoFocus={keyboardFocus}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
          />
        </View>
      )}
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
  _heading: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  _active_tag: {
    backgroundColor: colors.white,
    borderRadius: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  _tag: {
    borderRadius: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  _tags_main: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  _active_tag_title: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "500",
  },
  _tag_title: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "500",
  },
  _add_btn: {
    width: 54,
    height: 54,
    backgroundColor: colors.active,
    borderRadius: 54 / 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    alignSelf: "flex-end",
    right: 30,
  },
  _card_main: {
    backgroundColor: colors.secondry,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  _card_header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_heading: {
    color: colors.white,
    fontSize: 16,
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
    marginTop: 10,
  },
  _details_btn: {
    marginTop: 15,
    height: 36,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  _card_tag_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  _card_tag: {
    backgroundColor: colors.gray,
    height: 14,
    borderRadius: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  _card_tag_title: {
    fontSize: 9,
    color: colors.white,
    fontWeight: "600",
  },
  _details_btn_text: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "500",
  },
  _search_main: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: colors.secondry,
    paddingHorizontal: 10,
    height: 40,
  },
  _input: {
    color: colors.white,
  },
  _sound: {
    marginTop: 15,
  },
});

export default MyNotes;
