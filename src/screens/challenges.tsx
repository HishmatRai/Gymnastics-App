import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import CardItem from "_components/CardItem";
import AnimatedHeader from "react-native-animated-header";
import colors from "../../colors";
const ChallengesS = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedHeader
        style={{ flex: 1 }}
        title="Challenges"
        backStyle={{ marginLeft: 30 }}
        backTextStyle={{
          color: colors.white,
          fontWeight: "bold",
          fontSize: 30,
        }}
        titleStyle={{
          color: colors.white,
          fontWeight: "bold",
          fontSize: 48,
          marginLeft: -10,
        }}
        headerMaxHeight={200}
        imageSource={require("./../images/220-SM931643.jpg")}
        toolbarColor="#262E41"
        disabled={false}
        noBorder={true}
      >
        <ScrollView>
          <View style={styles._header_main}>
            <View>
              <Text style={styles._new}>New</Text>
              <Text style={styles._header_title}>
                You’ve never seen it before!
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles._view_all_btn_text}>View all</Text>
            </TouchableOpacity>
          </View>
          <CardItem />
          <View style={{ paddingBottom: 200 }} />
        </ScrollView>
      </AnimatedHeader>
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
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 20,
  },
  _new: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 34,
    fontFamily: "Raleway-Bold",
  },
  _header_title: {
    color: colors.gray,
    fontSize: 11,
    fontFamily: "Raleway-Regular",
    fontWeight: "400",
  },
  _view_all_btn_text: {
    color: colors.white,
    fontSize: 11,
    fontFamily: "Raleway-Regular",
    fontWeight: "400",
  },
});

export default ChallengesS;
