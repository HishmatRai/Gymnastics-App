import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Entypo from "react-native-vector-icons/dist/Entypo";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { CommunityPosts } from "_data";
import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
import moment from "moment";
import colors from "../../colors";
const CommunityTab = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
      <Text style={styles._heading}>Community</Text>
        <View style={styles._percentage_main}>
          <FontAwesome5 name="less-than" size={30} color={colors.white} />
          <Text style={styles._percentage}>5%</Text>
        </View>
        <Text style={styles._title}>Completion rate</Text>
        {CommunityPosts.map((v, i) => {
          return (
            <View style={{ marginTop: 30 }} key={i}>
              <View style={styles._card_main}>
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
                <View style={styles._card_header_main}>
                  <View style={styles._like_show_main}>
                    <View style={styles._like_show_main}>
                      <AntDesign name="hearto" size={15} color={colors.gray} />
                      <Text style={styles._like_show}>{v.likes}</Text>
                    </View>

                    <View style={styles._like_show_main}>
                      <AntDesign name="hearto" size={15} color={colors.gray} />
                      <Text style={styles._like_show}>5</Text>
                    </View>
                  </View>
                  <Text style={styles._private}>
                    {moment(v.date).format("MMMM DD, YYYY")}
                  </Text>
                </View>
                {v.photos.length !== 0 ? (
                  <Image
                    source={{ uri: v.photos[0] }}
                    style={styles._card_image}
                  />
                ) : null}
                {v.notes !== "" ? (
                  <>
                    <Text style={styles._des}>{v.notes}</Text>
                    <TouchableOpacity style={styles._read_more_btn}>
                      <Text style={styles._private}>Read more</Text>
                    </TouchableOpacity>
                  </>
                ) : null}
              </View>
              <Image
                source={require("./../images/220-SM931643.jpg")}
                style={styles._Profile_img}
              />
            </View>
          );
        })}
        <View style={{ marginBottom: 20 }} />
      </ScrollView>
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
    fontSize: 20,
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 5,
  },
  _card_main: {
    backgroundColor:colors.secondry,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
  },
  _card_header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  _card_heading: {
    color:colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  _private: {
    color:colors.gray,
    fontSize: 11,
    fontWeight: "normal",
  },
  _des: {
    color: colors.gray,
    fontSize: 11,
    fontWeight: "normal",
    marginTop: 10,
  },
  _read_more_btn: {
    marginTop: 5,
  },
  _Profile_img: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginHorizontal: 10,
    position: "absolute",
    top: -20,
  },
  _like_show_main: {
    flexDirection: "row",
    alignItems: "center",
    marginRight:5
  },
  _like_show: {
    color: colors.gray,
    fontSize: 11,
    fontWeight: "normal",
    marginHorizontal: 5,
  },
  _video: {
    // backgroundColor: "#EB4966",
    height: 100,
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 80,
  },
  _card_image: {
    width: 65,
    height: 80,
    marginTop: 10,
  },
  _percentage_main: {
    alignSelf: "center",
    marginTop: 10,
    flexDirection:"row",
    alignItems:"center"
  },
  _percentage: {
    fontSize: 50,
    fontWeight: "bold",
    color: colors.white,
  },
  _title:{
      textAlign:"center",
      fontSize:14,
      fontWeight:"600",
      color:colors.gray
  }
});

export default CommunityTab;
