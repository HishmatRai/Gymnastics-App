import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Entypo from "react-native-vector-icons/dist/Entypo";
import { UserData } from "_data";
import colors from "../../colors";
const Information = (props: any) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <>
          <Text style={styles._des}>
            {UserData.skillSteps[0].exerciseRef.description}
          </Text>
          <View style={styles._store_main}>
            <Text style={styles._heading}>Equipment required</Text>
            <TouchableOpacity>
              <Text style={styles._store_btn_text}>Go To Store</Text>
            </TouchableOpacity>
          </View>
          <View style={styles._still_rating_main}>
            <Image
              source={require("./../images/rings.png")}
              style={styles._rings_icon}
            />
            <Text style={styles._still_rating_title}>Still Rings</Text>
          </View>
          <Text style={styles._excercises}>Exercises</Text>
          <View style={styles._card_main}>
            <Image
              source={require("./../images/220-SM931643.jpg")}
              style={styles._card_image}
            />
            <View style={styles._card_data_main}>
              <View>
                <Text style={styles._card_heading}>Pullover</Text>
                <View style={styles._card_title_main}>
                  <Text style={styles._card_title_property}>Equipment: </Text>
                  <Text style={styles._card_title_value}>Bands</Text>
                </View>
                <TouchableOpacity style={styles._back_btn}>
                  <Text style={styles._back_btn_text}>BACK</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Entypo
                  name="dots-three-vertical"
                  size={16}
                  color={colors.gray}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  _des: {
    color: colors.gray,
    fontSize: 14,
    textAlign: "left",
    fontWeight: "normal",
    fontFamily: "Raleway-Regular",
    marginTop:20
  },
  _store_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  _heading: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  _store_btn_text: {
    color: colors.gray,
    fontSize: 11,
    fontWeight: "normal",
  },
  _still_rating_main: {
    backgroundColor: colors.active,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "35%",
    height: 24,
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 10,
  },
  _still_rating_title: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "bold",
    marginLeft: 5,
  },
  _rings_icon: {
    width: 16,
    height: 16,
  },
  _excercises: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  _card_main: {
    backgroundColor: colors.secondry,
    borderRadius: 10,
    height: 86,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_image: {
    width: 96,
    height: 86,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  _card_data_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    paddingHorizontal: 10,
  },
  _card_heading: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },
  _card_title_main: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  _card_title_property: {
    color: colors.gray,
    fontSize: 11,
    fontWeight: "normal",
  },
  _card_title_value: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "normal",
  },
  _back_btn: {
    backgroundColor: colors.gray,
    height: 14,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 46,
  },
  _back_btn_text: {
    color: colors.white,
    fontSize: 9,
    fontWeight: "normal",
  },
});

export default Information;
