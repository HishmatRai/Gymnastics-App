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
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { Challenges } from "_data";
import StarRating from "./StarRating";
import colors from "../../colors";
const CardItem = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles._cards_main}>
          {Challenges.map((v, i) => {
            return (
              <View style={styles._card_main} key={i}>
                <Image
                  source={require("./../images/220-SM931643.jpg")}
                  style={styles._card_image}
                />
                {v.tags.length !== 0 ? (
                  <View style={styles._new_keyword_main}>
                    <Text style={styles._new_keyword}>{v.tags}</Text>
                  </View>
                ) : null}
                <TouchableOpacity style={styles._save_main}>
                  <AntDesign name="hearto" size={13} color={colors.white} />
                </TouchableOpacity>
                <StarRating showRating={v.rating} />
                {v.subtitle ? (
                  <Text style={styles._ovs}>{v.subtitle}</Text>
                ) : null}
                <Text style={styles._card_title}>{v.name}</Text>
                <Text style={styles._price}>
                  {v.price}
                  <Text style={styles._dollors_sign}>$</Text>
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  _card_image: {
    width: 148,
    height: 184,
    borderRadius: 10,
  },
  _cards_main: {
    marginTop: 20,
    flexDirection: "row",
  },
  _card_main: {
    marginLeft: 5,
    width: 150,
    marginRight: 5,
  },
  _new_keyword_main: {
    backgroundColor: colors.primary,
    position: "absolute",
    top: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    left: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  _new_keyword: {
    color: colors.white,
    fontWeight: "900",
    fontSize: 11,
    fontFamily: "Raleway-Black",
  },
  _save_main: {
    backgroundColor: colors.secondry,
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: -18,
  },
  _ovs: {
    color: colors.gray,
    fontFamily: "Raleway-Black",
    fontSize: 11,
    fontWeight: "400",
    marginTop: 3,
  },
  _card_title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "Raleway-Black",
    marginTop: 3,
  },
  _price: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "Raleway-Medium",
    fontWeight: "500",
  },
  _dollors_sign: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "Raleway-Regular",
    fontWeight: "500",
  },
});

export default CardItem;
