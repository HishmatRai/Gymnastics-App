import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../../colors";
const Banner = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._title_main}>
        <Text style={styles._title}>Title</Text>
        <Text style={styles._sub_title}>Subtitle</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  _title_main: {
    marginHorizontal: 20,
    backgroundColor: colors.active,
    height: 100,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  _title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  _sub_title: {
    color: colors.white,
    fontSize: 14,
  },
});

export default Banner;
