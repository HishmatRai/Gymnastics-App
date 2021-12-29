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
import Banner from "_components/Banner";
import { SkillTrees } from "_data";
import colors from "../../colors";
const SearchCom = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner />
        <ScrollView showsVerticalScrollIndicator={false}>
          {SkillTrees.map((v, i) => {
            return (
              <TouchableOpacity style={styles._card_main} key={i}>
                <Text style={styles._card_title}>{v.name}</Text>
                <Image
                  source={require("./../images/220-SM931643.jpg")}
                  style={styles._image}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={{ paddingBottom: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _image: {
    height: 100,
    width: "50%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.secondry,
    marginHorizontal: 20,
    justifyContent: "space-between",
    borderRadius: 10,
    marginTop: 20,
  },
  _card_title: {
    color: colors.white,
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SearchCom;
